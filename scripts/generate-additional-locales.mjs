import fs from 'node:fs/promises';
import path from 'node:path';
import { parse } from '@babel/parser';

const root = process.cwd();
const sourcePath = path.join(root, 'src', 'i18n', 'LanguageContext.jsx');
const outputPath = path.join(root, 'src', 'i18n', 'additionalLocales.json');
const localeCodes = ['nl', 'fr', 'pl', 'cs', 'sk', 'es', 'it', 'pt'];

const source = await fs.readFile(sourcePath, 'utf8');
const ast = parse(source, { sourceType: 'module', plugins: ['jsx'] });
const phrases = new Set();

for (const statement of ast.program.body) {
  if (statement.type !== 'VariableDeclaration') continue;

  for (const declaration of statement.declarations) {
    if (declaration.id.type !== 'Identifier') continue;

    if (declaration.id.name === 'de' && declaration.init?.type === 'ObjectExpression') {
      for (const property of declaration.init.properties) {
        if (property.type !== 'ObjectProperty') continue;
        if (property.key.type === 'StringLiteral') phrases.add(property.key.value);
        if (property.key.type === 'Identifier') phrases.add(property.key.name);
      }
    }

    if (
      declaration.id.name === 'germanSentences'
      && declaration.init?.type === 'NewExpression'
      && declaration.init.arguments[0]?.type === 'ArrayExpression'
    ) {
      for (const entry of declaration.init.arguments[0].elements) {
        const key = entry?.type === 'ArrayExpression' ? entry.elements[0] : null;
        if (key?.type === 'StringLiteral') phrases.add(key.value);
      }
    }
  }
}

let translations = {};
try {
  translations = JSON.parse(await fs.readFile(outputPath, 'utf8'));
} catch {
  translations = {};
}

for (const locale of localeCodes) {
  translations[locale] ??= {};
}

async function translate(text, locale) {
  const url = new URL('https://translate.googleapis.com/translate_a/single');
  url.searchParams.set('client', 'gtx');
  url.searchParams.set('sl', 'en');
  url.searchParams.set('tl', locale);
  url.searchParams.set('dt', 't');
  url.searchParams.set('q', text);

  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      return payload[0].map((part) => part[0]).join('');
    } catch (error) {
      if (attempt === 4) throw error;
      await new Promise((resolve) => setTimeout(resolve, attempt * 750));
    }
  }
}

const jobs = [];
for (const locale of localeCodes) {
  for (const phrase of phrases) {
    if (!translations[locale][phrase]) jobs.push({ locale, phrase });
  }
}

let completed = 0;
const workers = Array.from({ length: 6 }, async () => {
  while (jobs.length) {
    const job = jobs.shift();
    translations[job.locale][job.phrase] = await translate(job.phrase, job.locale);
    completed += 1;

    if (completed % 25 === 0 || jobs.length === 0) {
      await fs.writeFile(outputPath, `${JSON.stringify(translations, null, 2)}\n`, 'utf8');
      console.log(`Translated ${completed}; ${jobs.length} remaining`);
    }
  }
});

await Promise.all(workers);
await fs.writeFile(outputPath, `${JSON.stringify(translations, null, 2)}\n`, 'utf8');
console.log(`Finished ${phrases.size} phrases across ${localeCodes.length} locales.`);
