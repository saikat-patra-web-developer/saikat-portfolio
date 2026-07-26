/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import additionalLocales from './additionalLocales.json';

const STORAGE_KEY = 'saikat-portfolio-language';
const LanguageContext = createContext(null);
const supportedLanguages = ['en', 'de', 'nl', 'fr', 'pl', 'cs', 'sk', 'es', 'it', 'pt'];
const languageByCountry = {
  DE: 'de',
  NL: 'nl',
  FR: 'fr',
  PL: 'pl',
  CZ: 'cs',
  SK: 'sk',
  ES: 'es',
  IT: 'it',
  PT: 'pt',
};
const pageTitles = {
  en: 'Saikat Patra | Web Developer',
  de: 'Saikat Patra | Webentwickler',
  nl: 'Saikat Patra | Webontwikkelaar',
  fr: 'Saikat Patra | Développeur web',
  pl: 'Saikat Patra | Web developer',
  cs: 'Saikat Patra | Webový vývojář',
  sk: 'Saikat Patra | Webový vývojár',
  es: 'Saikat Patra | Desarrollador web',
  it: 'Saikat Patra | Sviluppatore web',
  pt: 'Saikat Patra | Desenvolvedor web',
};
let countryLookupPromise;

const de = {
  services: 'Leistungen',
  workflow: 'Ablauf',
  portfolio: 'Projekte',
  reviews: 'Bewertungen',
  about: 'Über mich',
  contact: 'Kontakt',
  Home: 'Startseite',
  'Main navigation': 'Hauptnavigation',
  'Toggle menu': 'Menü öffnen',
  'Close menu': 'Menü schließen',
  "Hi, I'm Saikat Patra": 'Hallo, ich bin Saikat Patra',
  'Save 10+': 'Spare 10+',
  'Hours Every Week with a': 'Stunden pro Woche mit einem',
  'Custom CRM Built': 'maßgeschneiderten CRM',
  'for Your Business': 'für dein Unternehmen',
  'Still tracking leads, projects, or inventory in spreadsheets? I build': 'Verwaltest du Leads, Projekte oder Bestände noch in Tabellen? Ich entwickle',
  'Custom CRM Systems & Eliminate Repetitive Manual Work': 'individuelle CRM-Systeme und automatisiere wiederkehrende Aufgaben',
  'that eliminate': 'die',
  'repetitive work, reduce errors,': 'Routinearbeit reduzieren, Fehler vermeiden',
  'and help your team': 'und deinem Team helfen,',
  'scale with confidence.': 'sicher zu wachsen.',
  'Get in touch': 'Kontakt aufnehmen',
  'Explore my work': 'Projekte ansehen',
  'Projects Delivered': 'Projekte umgesetzt',
  '100% Done': '100 % erledigt',
  'On-Time Delivery': 'Pünktliche Lieferung',
  'Happy Clients': 'Zufriedene Kunden',
  'Global Trust': 'Weltweites Vertrauen',
  'Worldwide Retention': 'Internationale Kundentreue',
  'Years Experience': 'Jahre Erfahrung',
  'Expert Engineering': 'Professionelle Entwicklung',
  Projects: 'Projekte',
  Satisfaction: 'Zufriedenheit',
  'Full Stack Developer': 'Full-Stack-Entwickler',
  '7 Years+ Experience': 'Über 7 Jahre Erfahrung',
  Capabilities: 'Kompetenzen',
  'Engineered for Business Growth': 'Entwickelt für Unternehmenswachstum',
  'My Methodology': 'Meine Arbeitsweise',
  "How We'll Build Your Project": 'So setzen wir dein Projekt um',
  'Free Consultation': 'Kostenloses Erstgespräch',
  'Architecture Discovery': 'Anforderungsanalyse',
  'Planning & Strategy': 'Planung & Strategie',
  'Wireframes & Timelines': 'Wireframes & Zeitplan',
  Development: 'Entwicklung',
  'Production Codebase': 'Produktionsreifer Code',
  'Rigorous Testing': 'Gründliche Tests',
  'Quality Assurance': 'Qualitätssicherung',
  'Launch & Deploy': 'Launch & Bereitstellung',
  'Live Production': 'Produktivbetrieb',
  'Ongoing Support': 'Laufende Betreuung',
  'Scale & Monitor': 'Skalieren & Überwachen',
  'Selected Work': 'Ausgewählte Projekte',
  'Live Website →': 'Website ansehen →',
  'The Challenge:': 'Die Herausforderung:',
  'The Solution:': 'Die Lösung:',
  'Need a high-performing backend system or custom CRM?': 'Du brauchst ein leistungsstarkes Backend oder ein individuelles CRM?',
  'Client Reviews': 'Kundenbewertungen',
  'About Me': 'Über mich',
  'Custom Built CRMs & Admin Portals': 'Individuelle CRMs & Admin-Portale',
  'Automated Operational Workflows': 'Automatisierte Geschäftsabläufe',
  'High-Speed API Integrations': 'Schnelle API-Integrationen',
  'Clean UI/UX Built to Convert': 'Klare UI/UX für höhere Conversion',
  "Let's Build Your System": 'Lass uns dein System entwickeln',
  'Clear Filter': 'Filter löschen',
  'Direct Email': 'Direkte E-Mail',
  'Business Enquiries': 'Geschäftliche Anfragen',
  'Instant Chat (Primary)': 'Sofort-Chat (primär)',
  'Instant Chat (Secondary)': 'Sofort-Chat (sekundär)',
  'Professional Network': 'Berufliches Netzwerk',
  'Code Ecosystem': 'Code-Plattform',
  'Contact Me': 'Kontakt',
  'Start a Project': 'Projekt starten',
  'Send Message': 'Nachricht senden',
  'Your Name': 'Dein Name',
  'Your Email': 'Deine E-Mail',
  'Your Message': 'Deine Nachricht',
  'All rights reserved.': 'Alle Rechte vorbehalten.',
  'Built for scale': 'Für Skalierung entwickelt',
  'Zero manual friction': 'Keine manuellen Umwege',
  'Built to convert': 'Auf Conversion optimiert',
  'Lightning-fast performance': 'Blitzschnelle Performance',
  '99.9% Uptime focus': 'Fokus auf 99,9 % Verfügbarkeit',
  'High ROI': 'Hoher ROI',
  'Language': 'Sprache',
  'Full Stack': 'Full Stack',
  'Google Review': 'Google-Bewertung',
  'Top Rated Quality': 'Erstklassige Qualität',
  'Available for Projects': 'Verfügbar für Projekte',
  'Engineering Value & ROI': 'Technischer Mehrwert & ROI',
  'Building Software That Grows Your Business': 'Software, die dein Unternehmen wachsen lässt',
  'With over': 'Mit über',
  '7 years of enterprise-level engineering experience': '7 Jahren Erfahrung in der Entwicklung von Unternehmenssoftware',
  ', I specialize in translating manual business operations into highly automated digital architecture. My core objective is to design custom administrative systems, bespoke CRMs, and streamlined quote-to-invoice portals that directly optimize your business workflows, cut operational overhead, and accelerate conversion metrics.': ', spezialisiere ich mich darauf, manuelle Geschäftsprozesse in hochautomatisierte digitale Systeme zu überführen. Mein Ziel ist es, individuelle Verwaltungssysteme, maßgeschneiderte CRMs und durchgängige Angebots- und Rechnungsportale zu entwickeln, die Abläufe optimieren, Kosten senken und Conversions steigern.',
  'I bridges the gap between clean UI/UX and uncompromisingly secure, rapid-deployment backend engines. Whether managing heavy API integrations, custom database architectures, or scalable frontends, I engineer every system with clear performance metrics in mind.': 'Ich verbinde klares UI/UX-Design mit sicheren, schnell bereitstellbaren Backend-Systemen. Ob komplexe API-Integrationen, individuelle Datenbankarchitekturen oder skalierbare Frontends – jedes System entsteht mit klaren Leistungszielen.',
  'Select a stack below to instantly filter my live case studies:': 'Wähle unten eine Technologie, um meine Live-Fallstudien zu filtern:',
  'Showing work for:': 'Projekte anzeigen für:',
  'Click to see my': 'Klicken, um meine',
  'case studies': 'Fallstudien anzusehen',
  'Custom Applications & Platforms': 'Individuelle Anwendungen & Plattformen',
  'Engineered to automate your daily operations, eliminate overhead, and drive predictable revenue.': 'Entwickelt, um tägliche Abläufe zu automatisieren, Aufwand zu reduzieren und planbare Umsätze zu erzielen.',
  'SaaS & Product Development': 'SaaS- & Produktentwicklung',
  'Turn your software idea into a recurring revenue engine. I build production-ready cloud platforms with secure multi-tenant architectures, intuitive user dashboards, and automated subscription billing designed to scale seamlessly.': 'Verwandle deine Softwareidee in ein skalierbares Geschäftsmodell. Ich entwickle produktionsreife Cloud-Plattformen mit sicherer Mandantenarchitektur, intuitiven Dashboards und automatisierter Abrechnung.',
  'Validate Your Idea': 'Idee validieren',
  'Custom CRM That Eliminates Manual Work': 'Individuelles CRM statt manueller Arbeit',
  'Eliminate operational bottlenecks and manual spreadsheets. I build tailored administrative portals, custom booking engines, and interactive internal management hubs engineered to map perfectly to your business rules.': 'Beseitige Engpässe und manuelle Tabellen. Ich entwickle maßgeschneiderte Verwaltungsportale, Buchungssysteme und interne Managementlösungen passend zu deinen Geschäftsregeln.',
  'Operations': 'Prozesse',
  'Automate Workflows': 'Abläufe automatisieren',
  'Proven logic architectures': 'Bewährte Systemlogik',
  'E-commerce Engineering': 'E-Commerce-Entwicklung',
  'Maximize checkout conversions and stop losing customers. High-performance storefronts featuring fluid user journeys, lightning-fast catalog systems, and secure global payment integrations that turn casual browsers into buyers.': 'Steigere Checkout-Conversions und gewinne mehr Kunden. Leistungsstarke Shops mit flüssiger Nutzerführung, schnellen Katalogen und sicheren internationalen Zahlungsintegrationen machen Besucher zu Käufern.',
  'Maximize Conversions': 'Conversions steigern',
  'Optimized checkout flows': 'Optimierte Checkout-Abläufe',
  'High-Performance Integrations': 'Leistungsstarke Integrationen',
  'Connecting business infrastructure to multiply team efficiency and leverage intelligence.': 'Geschäftssysteme verbinden, um die Effizienz deines Teams und den Nutzen deiner Daten zu steigern.',
  'Connect All Your Business Tools Automatically': 'Alle Geschäftstools automatisch verbinden',
  'Streamline communication, eradicate manual data entry, and unify fragmented business applications by securely connecting your internal CRM, payment workflows, and external third-party tools.': 'Optimiere Kommunikation, vermeide manuelle Dateneingabe und verbinde CRM, Zahlungsabläufe und externe Tools sicher zu einem einheitlichen System.',
  'Integration': 'Integration',
  'Connect Systems': 'Systeme verbinden',
  'AI Integration & Automation': 'KI-Integration & Automatisierung',
  'Inject intelligent capabilities straight into your software stack. Deploy tailored internal search tools, context-aware AI assistants, and smart data processing models that save hundreds of hours of human labor.': 'Erweitere deine Software um intelligente Funktionen: interne Suchlösungen, kontextbezogene KI-Assistenten und smarte Datenverarbeitung sparen hunderte Arbeitsstunden.',
  'AI & Data': 'KI & Daten',
  'Deploy Smart Tools': 'Smarte Tools einsetzen',
  'Drastically reduce hours': 'Arbeitszeit drastisch reduzieren',
  'Mobile App Development': 'Mobile-App-Entwicklung',
  'Expand your market reach onto customer home screens. Build fluid, reliable cross-platform mobile apps for iOS and Android optimized for user accounts, real-time scheduling, and on-the-go utility.': 'Erreiche Kunden direkt auf ihrem Smartphone. Zuverlässige plattformübergreifende Apps für iOS und Android – optimiert für Benutzerkonten, Echtzeit-Terminplanung und mobile Nutzung.',
  'Launch Your App': 'App veröffentlichen',
  'iOS & Android ready': 'Bereit für iOS & Android',
  'Digital Frontends & Growth': 'Digitale Frontends & Wachstum',
  'Ultra-fast, beautifully designed web interfaces engineered to systematically capture high-intent leads.': 'Extrem schnelle, hochwertig gestaltete Weboberflächen, die gezielt qualifizierte Leads gewinnen.',
  'Growth-Driven Web Development': 'Wachstumsorientierte Webentwicklung',
  "Transform your brand's digital first impression. Fast, secure, and fully responsive web experiences custom-designed to tell your story, build immediate authority, and capture inbound client leads flawlessly.": 'Optimiere den digitalen ersten Eindruck deiner Marke. Schnelle, sichere und responsive Websites erzählen deine Geschichte, schaffen Vertrauen und gewinnen neue Kunden.',
  'Websites': 'Websites',
  'Capture More Leads': 'Mehr Leads gewinnen',
  'Interactive User Interfaces': 'Interaktive Benutzeroberflächen',
  'Deliver ultra-smooth, lightning-fast interactive dynamics. Utilizing modular, reusable frontend systems to construct modern components that maximize user retention and keep clients deeply engaged.': 'Flüssige, blitzschnelle Interaktionen mit modularen, wiederverwendbaren Frontend-Systemen erhöhen die Nutzerbindung und sorgen für überzeugende Erlebnisse.',
  'Upgrade UX': 'UX verbessern',
  'Fast Websites Built to Rank Higher on Google': 'Schnelle Websites für bessere Google-Rankings',
  'Outrank your competition out of the box. Deploying production-grade server-rendered architectures that deliver blazing speed performance metrics and structural layouts that search engine algorithms reward.': 'Überhole deine Konkurrenz mit produktionsreifen, serverseitig gerenderten Architekturen, hervorragender Geschwindigkeit und suchmaschinenfreundlicher Struktur.',
  'Dominate Search': 'In der Suche überzeugen',
  'Core Web Vitals optimized': 'Für Core Web Vitals optimiert',
  'Infrastructure & Continuous Support': 'Infrastruktur & laufende Betreuung',
  'Keeping your business operations secure, online, and completely stress-free.': 'Damit dein Geschäft sicher, erreichbar und sorgenfrei läuft.',
  'Managed Cloud & DevOps': 'Managed Cloud & DevOps',
  'Rest easy knowing your critical business operations are safe. Architecting secure, production-grade cloud environments featuring continuous monitoring, automated backups, and heavy-duty data encryption.': 'Deine kritischen Geschäftsprozesse bleiben geschützt – mit sicheren Cloud-Umgebungen, kontinuierlichem Monitoring, automatischen Backups und starker Datenverschlüsselung.',
  'Secure Infrastructure': 'Infrastruktur absichern',
  'Proactive Site Maintenance': 'Proaktive Website-Wartung',
  'Protect your software investment. Ongoing system performance audits, targeted bug patches, critical platform upgrades, and immediate support to keep your business operating without interruption.': 'Schütze deine Softwareinvestition durch laufende Performance-Prüfungen, gezielte Fehlerbehebungen, wichtige Plattformupdates und schnellen Support.',
  'Management': 'Betreuung',
  'Protect Your Stack': 'System schützen',
  'Zero operational downtime': 'Keine Betriebsunterbrechungen',
  'I deliver': 'Ich entwickle',
  'high-impact digital infrastructure': 'wirkungsvolle digitale Infrastruktur',
  'designed natively to optimize manual workflows, scale securely, and turn technical challenges into measurable': 'die manuelle Abläufe optimiert, sicher skaliert und technische Herausforderungen in messbaren',
  'business revenue.': 'Geschäftserfolg verwandelt.',
  'A precision engineered': 'Ein präzise entwickelter',
  'workflow designed': 'Arbeitsablauf',
  'to take your vision from initial concept to a scalable,': 'führt deine Vision vom ersten Konzept zu einem skalierbaren',
  'live product': 'Live-Produkt',
  'with zero friction.': '– ohne unnötige Reibungsverluste.',
  'Case Studies': 'Fallstudien',
  'Real Results for Real Businesses': 'Messbare Ergebnisse für echte Unternehmen',
  "I don't just write clean code. I design custom internal systems, complex pricing engines, and automated workflows that eliminate operational bottlenecks and scale revenue.": 'Ich schreibe nicht nur sauberen Code. Ich entwickle individuelle interne Systeme, komplexe Preislogik und automatisierte Abläufe, die Engpässe beseitigen und Umsatz skalieren.',
  'Have a custom project in mind? Book a Free Consultation →': 'Du planst ein individuelles Projekt? Kostenloses Erstgespräch buchen →',
  'Live Website â†’': 'Website ansehen →',
  'Saved 10+ Hours/Wk': 'Über 10 Std./Woche gespart',
  'Automated Operations': 'Automatisierte Prozesse',
  '50% Speed Optimization': '50 % schneller',
  'The sales team wasted hours juggling manual spreadsheets, causing slow follow-ups and lost leads.': 'Das Vertriebsteam verlor Stunden mit manuellen Tabellen. Dadurch verzögerten sich Rückmeldungen und Leads gingen verloren.',
  'Engineered a bespoke CRM and multi-step automated pipeline system that completely digitized their lead-to-sale workflows.': 'Ein maßgeschneidertes CRM mit mehrstufiger Automatisierung digitalisierte den gesamten Ablauf vom Lead bis zum Verkauf.',
  'Processing quotes for multi-variable, custom-manufactured window treatments required tedious manual calculations.': 'Angebote für individuell gefertigte Fensterlösungen mit vielen Variablen erforderten aufwendige manuelle Berechnungen.',
  'Built a comprehensive manufacturing and quoting application with complex, real-time pricing matrix rules to instantly automate overhead billing.': 'Eine umfassende Fertigungs- und Angebotsanwendung automatisiert komplexe Preisregeln und Kalkulationen in Echtzeit.',
  'High bounce rates on a premium real estate platform due to sluggish database loading times and unoptimized media assets.': 'Langsame Datenbankabfragen und nicht optimierte Medien sorgten auf der Immobilienplattform für hohe Absprungraten.',
  'Restructured database query performance and streamlined heavy property listings, shaving page loads by ~50% to salvage user retention.': 'Optimierte Datenbankabfragen und schlankere Immobilienanzeigen reduzierten die Ladezeit um rund 50 % und stärkten die Nutzerbindung.',
  "Whether it's complex business rules, automation logic, or dynamic database architecture, I can engineer the exact system your workflow needs to grow.": 'Ob komplexe Geschäftsregeln, Automatisierungslogik oder dynamische Datenbankarchitektur – ich entwickle genau das System, das deine Abläufe für Wachstum benötigen.',
  "Let's Discuss Your Project →": 'Projekt besprechen →',
  'Proven Performance': 'Nachgewiesene Leistung',
  'Built for Scale | Backed by Trust': 'Für Wachstum gebaut | Durch Vertrauen bestätigt',
  '4.9/5 Rating': 'Bewertung: 4,9/5',
  'on': 'bei',
  '100% Verified Clients': '100 % verifizierte Kunden',
  'On-Time Delivery Guarantee': 'Garantie für pünktliche Lieferung',
  'View Google Reviews': 'Google-Bewertungen ansehen',
  'Get a Free Quote': 'Kostenloses Angebot',
  'Verified Client Project': 'Verifiziertes Kundenprojekt',
  'Client': 'Kunde',
  'Let’s Build Something Great': 'Lass uns etwas Großartiges entwickeln',
  "Let's Build Something Great": 'Lass uns etwas Großartiges entwickeln',
  'Ready to Streamline Your Business?': 'Bereit, dein Unternehmen effizienter zu machen?',
  'Whether you need to scale custom administration systems, optimize complex operations, or engineer responsive, intuitive web applications from the ground up I deliver robust architecture built for business growth.': 'Ob du individuelle Verwaltungssysteme skalieren, komplexe Abläufe optimieren oder eine responsive Webanwendung entwickeln möchtest – ich liefere robuste Architektur für nachhaltiges Wachstum.',
  'Skip the long forms. Choose your preferred communication channel on the right to start detailing your application objectives directly with me.': 'Keine langen Formulare: Wähle rechts deinen bevorzugten Kontaktweg und besprich deine Projektziele direkt mit mir.',
  'Ready to automate your business workflows?': 'Bereit, deine Geschäftsabläufe zu automatisieren?',
  'Specializing in custom web applications, CRMs, and administrative systems built to scale.': 'Spezialisiert auf individuelle Webanwendungen, CRMs und skalierbare Verwaltungssysteme.',
  'See Client Success Stories': 'Erfolgsgeschichten ansehen',
  "Let's Build Something": 'Gemeinsam etwas entwickeln',
  'Saikat Patra Portfolio Portrait': 'Porträt von Saikat Patra',
  'Saikat Patra UI/UX Designer & Full Stack Developer': 'Saikat Patra – UI/UX-Designer & Full-Stack-Entwickler',
  'Quote My Blinds Custom CRM': 'Individuelles CRM für Quote My Blinds',
  'Purge Blinds Quote Portal': 'Angebotsportal für Purge Blinds',
  'Dream Big Group Portal': 'Portal der Dream Big Group',
  'Mobile Frame': 'Mobile Ansicht',
  'Consultant Front Avatar': 'Porträt des Beraters',
  'Consultant Back Avatar': 'Porträt des Beraters',
  'Germans + Gawenda Studio': 'Deutschland + Gawenda Studio',
  'New Zealanders + Windows Blinds': 'Neuseeland + Windows Blinds',
  'Error': 'Fehler',
  'Page Not Found': 'Seite nicht gefunden',
  "The plate you are looking for doesn't exist or has been moved to a different menu kitchen block.": 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
  'Go Back Home': 'Zurück zur Startseite',
  'Saikat Patra • Full Stack Web Developer. All rights reserved.': 'Saikat Patra • Full-Stack-Webentwickler. Alle Rechte vorbehalten.',
};

const cs = {
  services: 'Služby',
  workflow: 'Postup',
  portfolio: 'Projekty',
  reviews: 'Recenze',
  about: 'O mně',
  contact: 'Kontakt',
  Home: 'Domů',
  'Main navigation': 'Hlavní navigace',
  'Toggle menu': 'Otevřít nabídku',
  'Close menu': 'Zavřít nabídku',
  Language: 'Jazyk',
  "Hi, I'm Saikat Patra": 'Ahoj, jsem Saikat Patra',
  'Save 10+': 'Ušetřete 10+',
  'Hours Every Week with a': 'hodin týdně díky',
  'Custom CRM Built': 'CRM na míru',
  'for Your Business': 'pro vaši firmu',
  'Still tracking leads, projects, or inventory in spreadsheets? I build': 'Stále sledujete kontakty, projekty nebo zásoby v tabulkách? Vytvářím',
  'Custom CRM Systems & Eliminate Repetitive Manual Work': 'CRM systémy na míru a automatizuji opakovanou ruční práci',
  'that eliminate': 'které omezují',
  'repetitive work, reduce errors,': 'rutinní práci, snižují chybovost',
  'and help your team': 'a pomáhají vašemu týmu',
  'scale with confidence.': 'spolehlivě růst.',
  'Get in touch': 'Kontaktujte mě',
  'Explore my work': 'Prohlédnout projekty',
  'Projects Delivered': 'Dokončených projektů',
  '100% Done': '100% dokončeno',
  'On-Time Delivery': 'Dodání včas',
  'Happy Clients': 'Spokojených klientů',
  'Global Trust': 'Důvěra po celém světě',
  'Worldwide Retention': 'Dlouhodobí klienti',
  'Years Experience': 'Let zkušeností',
  'Full Stack Developer': 'Full-stack vývojář',
  '7 Years+ Experience': 'Více než 7 let zkušeností',
  'Expert Engineering': 'Profesionální vývoj',
  Projects: 'Projekty',
  Satisfaction: 'Spokojenost',
  Capabilities: 'Dovednosti',
  'Engineered for Business Growth': 'Navrženo pro růst firmy',
  'I deliver': 'Vytvářím',
  'high-impact digital infrastructure': 'výkonnou digitální infrastrukturu',
  'designed natively to optimize manual workflows, scale securely, and turn technical challenges into measurable': 'navrženou pro optimalizaci ručních procesů, bezpečné škálování a proměnu technických výzev v měřitelný',
  'business revenue.': 'obchodní přínos.',
  'Custom Applications & Platforms': 'Aplikace a platformy na míru',
  'Engineered to automate your daily operations, eliminate overhead, and drive predictable revenue.': 'Navrženo pro automatizaci každodenních činností, snížení nákladů a předvídatelný růst příjmů.',
  'SaaS & Product Development': 'Vývoj SaaS a produktů',
  'Turn your software idea into a recurring revenue engine. I build production-ready cloud platforms with secure multi-tenant architectures, intuitive user dashboards, and automated subscription billing designed to scale seamlessly.': 'Proměňte svůj softwarový nápad ve škálovatelný zdroj příjmů. Vytvářím produkční cloudové platformy s bezpečnou víceuživatelskou architekturou, přehlednými dashboardy a automatickou fakturací předplatného.',
  'Built for scale': 'Připraveno na růst',
  'Custom CRM That Eliminates Manual Work': 'CRM na míru bez ruční práce',
  'Eliminate operational bottlenecks and manual spreadsheets. I build tailored administrative portals, custom booking engines, and interactive internal management hubs engineered to map perfectly to your business rules.': 'Odstraňte provozní překážky a ruční tabulky. Vytvářím administrační portály, rezervační systémy a interní nástroje přesně podle vašich obchodních pravidel.',
  Operations: 'Provoz',
  'Proven logic architectures': 'Ověřená systémová logika',
  'E-commerce Engineering': 'Vývoj e-commerce',
  'Maximize checkout conversions and stop losing customers. High-performance storefronts featuring fluid user journeys, lightning-fast catalog systems, and secure global payment integrations that turn casual browsers into buyers.': 'Zvyšte konverze a nepřicházejte o zákazníky. Rychlé e-shopy s plynulým nákupním procesem, svižnými katalogy a bezpečnými platebními integracemi mění návštěvníky v zákazníky.',
  'Optimized checkout flows': 'Optimalizovaný nákupní proces',
  'High-Performance Integrations': 'Výkonné integrace',
  'Connecting business infrastructure to multiply team efficiency and leverage intelligence.': 'Propojení firemních systémů pro vyšší efektivitu týmu a lepší využití dat.',
  'Connect All Your Business Tools Automatically': 'Automaticky propojte všechny firemní nástroje',
  'Streamline communication, eradicate manual data entry, and unify fragmented business applications by securely connecting your internal CRM, payment workflows, and external third-party tools.': 'Zjednodušte komunikaci, odstraňte ruční zadávání dat a bezpečně propojte CRM, platby i externí nástroje.',
  Integration: 'Integrace',
  'Zero manual friction': 'Bez ručních překážek',
  'AI Integration & Automation': 'Integrace AI a automatizace',
  'Inject intelligent capabilities straight into your software stack. Deploy tailored internal search tools, context-aware AI assistants, and smart data processing models that save hundreds of hours of human labor.': 'Doplňte software o inteligentní funkce. Interní vyhledávání, AI asistenti a chytré zpracování dat ušetří stovky hodin práce.',
  'AI & Data': 'AI a data',
  'Drastically reduce hours': 'Výrazná úspora času',
  'Mobile App Development': 'Vývoj mobilních aplikací',
  'Expand your market reach onto customer home screens. Build fluid, reliable cross-platform mobile apps for iOS and Android optimized for user accounts, real-time scheduling, and on-the-go utility.': 'Oslovte zákazníky přímo v telefonu. Spolehlivé multiplatformní aplikace pro iOS a Android podporují účty, plánování v reálném čase i práci na cestách.',
  Mobile: 'Mobilní',
  'iOS & Android ready': 'Připraveno pro iOS a Android',
  'Digital Frontends & Growth': 'Digitální rozhraní a růst',
  'Ultra-fast, beautifully designed web interfaces engineered to systematically capture high-intent leads.': 'Mimořádně rychlá a kvalitně navržená webová rozhraní, která systematicky získávají hodnotné kontakty.',
  'Growth-Driven Web Development': 'Webový vývoj zaměřený na růst',
  "Transform your brand's digital first impression. Fast, secure, and fully responsive web experiences custom-designed to tell your story, build immediate authority, and capture inbound client leads flawlessly.": 'Vylepšete první digitální dojem své značky. Rychlé, bezpečné a responzivní weby budují důvěru a získávají nové klienty.',
  Websites: 'Weby',
  'Built to convert': 'Navrženo pro konverze',
  'Interactive User Interfaces': 'Interaktivní uživatelská rozhraní',
  'Deliver ultra-smooth, lightning-fast interactive dynamics. Utilizing modular, reusable frontend systems to construct modern components that maximize user retention and keep clients deeply engaged.': 'Plynulé a rychlé interakce postavené na modulárních frontendových systémech zvyšují zapojení i udržení uživatelů.',
  Frontend: 'Frontend',
  'Lightning-fast performance': 'Bleskový výkon',
  'Fast Websites Built to Rank Higher on Google': 'Rychlé weby pro lepší pozice na Googlu',
  'Outrank your competition out of the box. Deploying production-grade server-rendered architectures that deliver blazing speed performance metrics and structural layouts that search engine algorithms reward.': 'Předběhněte konkurenci pomocí produkční serverově vykreslované architektury, vysoké rychlosti a struktury vhodné pro vyhledávače.',
  Fullstack: 'Full stack',
  'Core Web Vitals optimized': 'Optimalizováno pro Core Web Vitals',
  'Infrastructure & Continuous Support': 'Infrastruktura a průběžná podpora',
  'Keeping your business operations secure, online, and completely stress-free.': 'Bezpečný, dostupný a bezstarostný provoz vaší firmy.',
  'Managed Cloud & DevOps': 'Spravovaný cloud a DevOps',
  'Rest easy knowing your critical business operations are safe. Architecting secure, production-grade cloud environments featuring continuous monitoring, automated backups, and heavy-duty data encryption.': 'Vaše klíčové procesy zůstanou v bezpečí díky produkčnímu cloudu, nepřetržitému monitoringu, automatickým zálohám a silnému šifrování.',
  '99.9% Uptime focus': 'Cíl dostupnosti 99,9 %',
  'Proactive Site Maintenance': 'Proaktivní údržba webu',
  'Protect your software investment. Ongoing system performance audits, targeted bug patches, critical platform upgrades, and immediate support to keep your business operating without interruption.': 'Chraňte svou investici průběžnými kontrolami výkonu, opravami chyb, aktualizacemi platformy a rychlou podporou.',
  Management: 'Správa',
  'Zero operational downtime': 'Bez provozních výpadků',
  'High ROI': 'Vysoká návratnost',
  'My Methodology': 'Můj postup',
  "How We'll Build Your Project": 'Jak společně vytvoříme váš projekt',
  'A precision engineered': 'Precizně navržený',
  'workflow designed': 'pracovní postup',
  'to take your vision from initial concept to a scalable,': 'promění vaši vizi od prvního konceptu ve škálovatelný',
  'live product': 'funkční produkt',
  'with zero friction.': 'bez zbytečných komplikací.',
  'Free Consultation': 'Úvodní konzultace zdarma',
  'Architecture Discovery': 'Analýza požadavků',
  'Planning & Strategy': 'Plánování a strategie',
  'Wireframes & Timelines': 'Wireframy a harmonogram',
  Development: 'Vývoj',
  'Production Codebase': 'Produkční kód',
  'Rigorous Testing': 'Důkladné testování',
  'Quality Assurance': 'Kontrola kvality',
  'Launch & Deploy': 'Spuštění a nasazení',
  'Live Production': 'Produkční provoz',
  'Ongoing Support': 'Průběžná podpora',
  'Scale & Monitor': 'Škálování a monitoring',
  'Case Studies': 'Případové studie',
  'Real Results for Real Businesses': 'Skutečné výsledky pro skutečné firmy',
  "I don't just write clean code. I design custom internal systems, complex pricing engines, and automated workflows that eliminate operational bottlenecks and scale revenue.": 'Nepíšu jen čistý kód. Navrhuji interní systémy, komplexní cenové mechanismy a automatizované procesy, které odstraňují překážky a podporují růst příjmů.',
  'Have a custom project in mind? Book a Free Consultation →': 'Máte vlastní projekt? Rezervujte si konzultaci zdarma →',
  'Live Website →': 'Zobrazit web →',
  'Saved 10+ Hours/Wk': 'Úspora 10+ hodin týdně',
  'The Challenge:': 'Výzva:',
  'The Solution:': 'Řešení:',
  'Automated Operations': 'Automatizovaný provoz',
  '50% Speed Optimization': 'Zrychlení o 50 %',
  'Need a high-performing backend system or custom CRM?': 'Potřebujete výkonný backend nebo CRM na míru?',
  "Whether it's complex business rules, automation logic, or dynamic database architecture, I can engineer the exact system your workflow needs to grow.": 'Ať jde o složitá obchodní pravidla, automatizaci nebo dynamickou databázovou architekturu, vytvořím systém přesně pro růst vašich procesů.',
  "Let's Discuss Your Project →": 'Probrat projekt →',
  'Available for Projects': 'K dispozici pro projekty',
  'Engineering Value & ROI': 'Technická hodnota a návratnost',
  'Building Software That Grows Your Business': 'Software, který pomáhá vaší firmě růst',
  'With over': 'S více než',
  '7 years of enterprise-level engineering experience': '7 lety zkušeností s podnikovým vývojem',
  ', I specialize in translating manual business operations into highly automated digital architecture. My core objective is to design custom administrative systems, bespoke CRMs, and streamlined quote-to-invoice portals that directly optimize your business workflows, cut operational overhead, and accelerate conversion metrics.': ' se specializuji na převod ručních firemních procesů do automatizovaných digitálních systémů. Navrhuji administrační systémy, CRM na míru a portály od nabídky po fakturu, které optimalizují procesy, snižují náklady a zvyšují konverze.',
  'I bridges the gap between clean UI/UX and uncompromisingly secure, rapid-deployment backend engines. Whether managing heavy API integrations, custom database architectures, or scalable frontends, I engineer every system with clear performance metrics in mind.': 'Propojuji čisté UI/UX s bezpečnými a rychle nasaditelnými backendy. Ať jde o komplexní API, databázovou architekturu nebo škálovatelný frontend, každý systém stavím s jasnými výkonnostními cíli.',
  'Custom Built CRMs & Admin Portals': 'CRM a administrační portály na míru',
  'Automated Operational Workflows': 'Automatizované pracovní procesy',
  'High-Speed API Integrations': 'Rychlé integrace API',
  'Clean UI/UX Built to Convert': 'Čisté UI/UX zaměřené na konverze',
  "Let's Build Your System": 'Vytvořme váš systém',
  'Select a stack below to instantly filter my live case studies:': 'Vyberte technologii a filtrujte případové studie:',
  'Showing work for:': 'Zobrazené projekty pro:',
  'Clear Filter': 'Zrušit filtr',
  "Let's Build Something Great": 'Vytvořme něco skvělého',
  'Ready to Streamline Your Business?': 'Chcete zefektivnit své podnikání?',
  'Whether you need to scale custom administration systems, optimize complex operations, or engineer responsive, intuitive web applications from the ground up I deliver robust architecture built for business growth.': 'Ať potřebujete škálovat administrační systém, optimalizovat složité procesy nebo vytvořit responzivní webovou aplikaci, dodám robustní architekturu pro růst firmy.',
  'Skip the long forms. Choose your preferred communication channel on the right to start detailing your application objectives directly with me.': 'Žádné dlouhé formuláře. Vpravo si zvolte preferovaný způsob kontaktu a proberte se mnou cíle projektu.',
  'Direct Email': 'Přímý e-mail',
  'Business Enquiries': 'Obchodní dotazy',
  'Instant Chat (Primary)': 'Okamžitý chat (hlavní)',
  'Instant Chat (Secondary)': 'Okamžitý chat (další)',
  'Professional Network': 'Profesní síť',
  'Code Ecosystem': 'Platforma s kódem',
  'Ready to automate your business workflows?': 'Chcete automatizovat firemní procesy?',
  'Specializing in custom web applications, CRMs, and administrative systems built to scale.': 'Specializuji se na webové aplikace, CRM a škálovatelné administrační systémy na míru.',
  'See Client Success Stories': 'Prohlédnout úspěšné projekty',
  "Let's Build Something": 'Pojďme něco vytvořit',
  'All rights reserved.': 'Všechna práva vyhrazena.',
  Error: 'Chyba',
  'Page Not Found': 'Stránka nebyla nalezena',
  "The plate you are looking for doesn't exist or has been moved to a different menu kitchen block.": 'Hledaná stránka neexistuje nebo byla přesunuta.',
  'Go Back Home': 'Zpět na úvodní stránku',
};

const sk = {
  ...cs,
  services: 'Služby',
  workflow: 'Postup',
  portfolio: 'Projekty',
  reviews: 'Recenzie',
  about: 'O mne',
  Home: 'Domov',
  'Main navigation': 'Hlavná navigácia',
  'Toggle menu': 'Otvoriť ponuku',
  'Close menu': 'Zavrieť ponuku',
  Language: 'Jazyk',
  "Hi, I'm Saikat Patra": 'Ahoj, som Saikat Patra',
  'Save 10+': 'Ušetrite 10+',
  'Hours Every Week with a': 'hodín týždenne vďaka',
  'Custom CRM Built': 'CRM na mieru',
  'for Your Business': 'pre vašu firmu',
  'Still tracking leads, projects, or inventory in spreadsheets? I build': 'Stále sledujete kontakty, projekty alebo zásoby v tabuľkách? Vytváram',
  'Custom CRM Systems & Eliminate Repetitive Manual Work': 'CRM systémy na mieru a automatizujem opakovanú manuálnu prácu',
  'that eliminate': 'ktoré obmedzujú',
  'repetitive work, reduce errors,': 'rutinnú prácu, znižujú chybovosť',
  'and help your team': 'a pomáhajú vášmu tímu',
  'scale with confidence.': 'spoľahlivo rásť.',
  'Get in touch': 'Kontaktujte ma',
  'Explore my work': 'Pozrieť projekty',
  'Projects Delivered': 'Dokončených projektov',
  '100% Done': '100 % dokončené',
  'On-Time Delivery': 'Dodanie načas',
  'Happy Clients': 'Spokojných klientov',
  'Global Trust': 'Dôvera po celom svete',
  'Worldwide Retention': 'Dlhodobí klienti',
  'Years Experience': 'Rokov skúseností',
  'Full Stack Developer': 'Full-stack vývojár',
  '7 Years+ Experience': 'Viac ako 7 rokov skúseností',
  'Expert Engineering': 'Profesionálny vývoj',
  Satisfaction: 'Spokojnosť',
  Capabilities: 'Schopnosti',
  'Engineered for Business Growth': 'Navrhnuté pre rast firmy',
  'I deliver': 'Vytváram',
  'high-impact digital infrastructure': 'výkonnú digitálnu infraštruktúru',
  'designed natively to optimize manual workflows, scale securely, and turn technical challenges into measurable': 'navrhnutú na optimalizáciu manuálnych procesov, bezpečné škálovanie a premenu technických výziev na merateľný',
  'business revenue.': 'obchodný prínos.',
  'Custom Applications & Platforms': 'Aplikácie a platformy na mieru',
  'Engineered to automate your daily operations, eliminate overhead, and drive predictable revenue.': 'Navrhnuté na automatizáciu každodenných činností, zníženie nákladov a predvídateľný rast príjmov.',
  'SaaS & Product Development': 'Vývoj SaaS a produktov',
  'Turn your software idea into a recurring revenue engine. I build production-ready cloud platforms with secure multi-tenant architectures, intuitive user dashboards, and automated subscription billing designed to scale seamlessly.': 'Premeňte svoj softvérový nápad na škálovateľný zdroj príjmov. Vytváram produkčné cloudové platformy s bezpečnou viacpoužívateľskou architektúrou, prehľadnými dashboardmi a automatickou fakturáciou predplatného.',
  'Built for scale': 'Pripravené na rast',
  'Custom CRM That Eliminates Manual Work': 'CRM na mieru bez manuálnej práce',
  'Eliminate operational bottlenecks and manual spreadsheets. I build tailored administrative portals, custom booking engines, and interactive internal management hubs engineered to map perfectly to your business rules.': 'Odstráňte prevádzkové prekážky a manuálne tabuľky. Vytváram administračné portály, rezervačné systémy a interné nástroje presne podľa vašich obchodných pravidiel.',
  Operations: 'Prevádzka',
  'Proven logic architectures': 'Overená systémová logika',
  'E-commerce Engineering': 'Vývoj e-commerce',
  'Maximize checkout conversions and stop losing customers. High-performance storefronts featuring fluid user journeys, lightning-fast catalog systems, and secure global payment integrations that turn casual browsers into buyers.': 'Zvýšte konverzie a nestrácajte zákazníkov. Rýchle e-shopy s plynulým nákupným procesom, svižnými katalógmi a bezpečnými platobnými integráciami menia návštevníkov na zákazníkov.',
  'Optimized checkout flows': 'Optimalizovaný nákupný proces',
  'High-Performance Integrations': 'Výkonné integrácie',
  'Connecting business infrastructure to multiply team efficiency and leverage intelligence.': 'Prepojenie firemných systémov pre vyššiu efektivitu tímu a lepšie využitie dát.',
  'Connect All Your Business Tools Automatically': 'Automaticky prepojte všetky firemné nástroje',
  'Streamline communication, eradicate manual data entry, and unify fragmented business applications by securely connecting your internal CRM, payment workflows, and external third-party tools.': 'Zjednodušte komunikáciu, odstráňte manuálne zadávanie dát a bezpečne prepojte CRM, platby aj externé nástroje.',
  Integration: 'Integrácia',
  'Zero manual friction': 'Bez manuálnych prekážok',
  'AI Integration & Automation': 'Integrácia AI a automatizácia',
  'Inject intelligent capabilities straight into your software stack. Deploy tailored internal search tools, context-aware AI assistants, and smart data processing models that save hundreds of hours of human labor.': 'Doplňte softvér o inteligentné funkcie. Interné vyhľadávanie, AI asistenti a inteligentné spracovanie dát ušetria stovky hodín práce.',
  'AI & Data': 'AI a dáta',
  'Drastically reduce hours': 'Výrazná úspora času',
  'Mobile App Development': 'Vývoj mobilných aplikácií',
  'Expand your market reach onto customer home screens. Build fluid, reliable cross-platform mobile apps for iOS and Android optimized for user accounts, real-time scheduling, and on-the-go utility.': 'Oslovte zákazníkov priamo v telefóne. Spoľahlivé multiplatformové aplikácie pre iOS a Android podporujú účty, plánovanie v reálnom čase aj prácu na cestách.',
  Mobile: 'Mobilné',
  'iOS & Android ready': 'Pripravené pre iOS a Android',
  'Digital Frontends & Growth': 'Digitálne rozhrania a rast',
  'Ultra-fast, beautifully designed web interfaces engineered to systematically capture high-intent leads.': 'Mimoriadne rýchle a kvalitne navrhnuté webové rozhrania, ktoré systematicky získavajú hodnotné kontakty.',
  'Growth-Driven Web Development': 'Webový vývoj zameraný na rast',
  "Transform your brand's digital first impression. Fast, secure, and fully responsive web experiences custom-designed to tell your story, build immediate authority, and capture inbound client leads flawlessly.": 'Zlepšite prvý digitálny dojem svojej značky. Rýchle, bezpečné a responzívne weby budujú dôveru a získavajú nových klientov.',
  'Built to convert': 'Navrhnuté pre konverzie',
  'Interactive User Interfaces': 'Interaktívne používateľské rozhrania',
  'Deliver ultra-smooth, lightning-fast interactive dynamics. Utilizing modular, reusable frontend systems to construct modern components that maximize user retention and keep clients deeply engaged.': 'Plynulé a rýchle interakcie postavené na modulárnych frontendových systémoch zvyšujú zapojenie aj udržanie používateľov.',
  'Lightning-fast performance': 'Bleskový výkon',
  'Fast Websites Built to Rank Higher on Google': 'Rýchle weby pre lepšie pozície na Googli',
  'Outrank your competition out of the box. Deploying production-grade server-rendered architectures that deliver blazing speed performance metrics and structural layouts that search engine algorithms reward.': 'Predbehnite konkurenciu pomocou produkčnej serverovo vykresľovanej architektúry, vysokej rýchlosti a štruktúry vhodnej pre vyhľadávače.',
  'Core Web Vitals optimized': 'Optimalizované pre Core Web Vitals',
  'Infrastructure & Continuous Support': 'Infraštruktúra a priebežná podpora',
  'Keeping your business operations secure, online, and completely stress-free.': 'Bezpečná, dostupná a bezstarostná prevádzka vašej firmy.',
  'Managed Cloud & DevOps': 'Spravovaný cloud a DevOps',
  'Rest easy knowing your critical business operations are safe. Architecting secure, production-grade cloud environments featuring continuous monitoring, automated backups, and heavy-duty data encryption.': 'Vaše kľúčové procesy zostanú v bezpečí vďaka produkčnému cloudu, nepretržitému monitoringu, automatickým zálohám a silnému šifrovaniu.',
  '99.9% Uptime focus': 'Cieľ dostupnosti 99,9 %',
  'Proactive Site Maintenance': 'Proaktívna údržba webu',
  'Protect your software investment. Ongoing system performance audits, targeted bug patches, critical platform upgrades, and immediate support to keep your business operating without interruption.': 'Chráňte svoju investíciu priebežnými kontrolami výkonu, opravami chýb, aktualizáciami platformy a rýchlou podporou.',
  Management: 'Správa',
  'Zero operational downtime': 'Bez prevádzkových výpadkov',
  'High ROI': 'Vysoká návratnosť',
  'My Methodology': 'Môj postup',
  "How We'll Build Your Project": 'Ako spoločne vytvoríme váš projekt',
  'A precision engineered': 'Precízne navrhnutý',
  'workflow designed': 'pracovný postup',
  'to take your vision from initial concept to a scalable,': 'premení vašu víziu od prvého konceptu na škálovateľný',
  'live product': 'funkčný produkt',
  'with zero friction.': 'bez zbytočných komplikácií.',
  'Free Consultation': 'Úvodná konzultácia zdarma',
  'Architecture Discovery': 'Analýza požiadaviek',
  'Planning & Strategy': 'Plánovanie a stratégia',
  'Wireframes & Timelines': 'Wireframy a harmonogram',
  Development: 'Vývoj',
  'Production Codebase': 'Produkčný kód',
  'Rigorous Testing': 'Dôkladné testovanie',
  'Quality Assurance': 'Kontrola kvality',
  'Launch & Deploy': 'Spustenie a nasadenie',
  'Live Production': 'Produkčná prevádzka',
  'Ongoing Support': 'Priebežná podpora',
  'Scale & Monitor': 'Škálovanie a monitoring',
  'Case Studies': 'Prípadové štúdie',
  'Real Results for Real Businesses': 'Skutočné výsledky pre skutočné firmy',
  "I don't just write clean code. I design custom internal systems, complex pricing engines, and automated workflows that eliminate operational bottlenecks and scale revenue.": 'Nepíšem iba čistý kód. Navrhujem interné systémy, komplexné cenové mechanizmy a automatizované procesy, ktoré odstraňujú prekážky a podporujú rast príjmov.',
  'Have a custom project in mind? Book a Free Consultation →': 'Máte vlastný projekt? Rezervujte si konzultáciu zdarma →',
  'Live Website →': 'Zobraziť web →',
  'Saved 10+ Hours/Wk': 'Úspora 10+ hodín týždenne',
  'The Challenge:': 'Výzva:',
  'The Solution:': 'Riešenie:',
  'Automated Operations': 'Automatizovaná prevádzka',
  '50% Speed Optimization': 'Zrýchlenie o 50 %',
  'Need a high-performing backend system or custom CRM?': 'Potrebujete výkonný backend alebo CRM na mieru?',
  "Whether it's complex business rules, automation logic, or dynamic database architecture, I can engineer the exact system your workflow needs to grow.": 'Či ide o zložité obchodné pravidlá, automatizáciu alebo dynamickú databázovú architektúru, vytvorím systém presne pre rast vašich procesov.',
  "Let's Discuss Your Project →": 'Prediskutovať projekt →',
  'Available for Projects': 'K dispozícii pre projekty',
  'Engineering Value & ROI': 'Technická hodnota a návratnosť',
  'Building Software That Grows Your Business': 'Softvér, ktorý pomáha vašej firme rásť',
  'With over': 'S viac ako',
  '7 years of enterprise-level engineering experience': '7 rokmi skúseností s podnikovým vývojom',
  ', I specialize in translating manual business operations into highly automated digital architecture. My core objective is to design custom administrative systems, bespoke CRMs, and streamlined quote-to-invoice portals that directly optimize your business workflows, cut operational overhead, and accelerate conversion metrics.': ' sa špecializujem na prevod manuálnych firemných procesov do automatizovaných digitálnych systémov. Navrhujem administračné systémy, CRM na mieru a portály od ponuky po faktúru, ktoré optimalizujú procesy, znižujú náklady a zvyšujú konverzie.',
  'I bridges the gap between clean UI/UX and uncompromisingly secure, rapid-deployment backend engines. Whether managing heavy API integrations, custom database architectures, or scalable frontends, I engineer every system with clear performance metrics in mind.': 'Prepájam čisté UI/UX s bezpečnými a rýchlo nasaditeľnými backendmi. Či ide o komplexné API, databázovú architektúru alebo škálovateľný frontend, každý systém staviam s jasnými výkonnostnými cieľmi.',
  'Custom Built CRMs & Admin Portals': 'CRM a administračné portály na mieru',
  'Automated Operational Workflows': 'Automatizované pracovné procesy',
  'High-Speed API Integrations': 'Rýchle integrácie API',
  'Clean UI/UX Built to Convert': 'Čisté UI/UX zamerané na konverzie',
  "Let's Build Your System": 'Vytvorme váš systém',
  'Select a stack below to instantly filter my live case studies:': 'Vyberte technológiu a filtrujte prípadové štúdie:',
  'Showing work for:': 'Zobrazené projekty pre:',
  'Clear Filter': 'Zrušiť filter',
  "Let's Build Something Great": 'Vytvorme niečo skvelé',
  'Ready to Streamline Your Business?': 'Chcete zefektívniť svoje podnikanie?',
  'Whether you need to scale custom administration systems, optimize complex operations, or engineer responsive, intuitive web applications from the ground up I deliver robust architecture built for business growth.': 'Či potrebujete škálovať administračný systém, optimalizovať zložité procesy alebo vytvoriť responzívnu webovú aplikáciu, dodám robustnú architektúru pre rast firmy.',
  'Skip the long forms. Choose your preferred communication channel on the right to start detailing your application objectives directly with me.': 'Žiadne dlhé formuláre. Vpravo si zvoľte preferovaný spôsob kontaktu a preberte so mnou ciele projektu.',
  'Direct Email': 'Priamy e-mail',
  'Business Enquiries': 'Obchodné otázky',
  'Instant Chat (Primary)': 'Okamžitý chat (hlavný)',
  'Instant Chat (Secondary)': 'Okamžitý chat (ďalší)',
  'Professional Network': 'Profesijná sieť',
  'Code Ecosystem': 'Platforma s kódom',
  'Ready to automate your business workflows?': 'Chcete automatizovať firemné procesy?',
  'Specializing in custom web applications, CRMs, and administrative systems built to scale.': 'Špecializujem sa na webové aplikácie, CRM a škálovateľné administračné systémy na mieru.',
  'See Client Success Stories': 'Pozrieť úspešné projekty',
  "Let's Build Something": 'Poďme niečo vytvoriť',
  'All rights reserved.': 'Všetky práva vyhradené.',
  'Page Not Found': 'Stránka sa nenašla',
  "The plate you are looking for doesn't exist or has been moved to a different menu kitchen block.": 'Hľadaná stránka neexistuje alebo bola presunutá.',
  'Go Back Home': 'Späť na úvodnú stránku',
};

const germanSentences = new Map([
  ['We dive deep into your business goals, target audience, and system requirements to map out the perfect digital architecture.', 'Wir analysieren deine Geschäftsziele, Zielgruppe und Systemanforderungen, um die passende digitale Architektur zu planen.'],
  ['Crafting detailed wireframes, user journeys, and project roadmaps to ensure exact alignment before a single line of code is written.', 'Detaillierte Wireframes, User Journeys und Projektpläne schaffen Klarheit, bevor die erste Zeile Code entsteht.'],
  ['Our team builds your high-performing web application using modern, scalable tech stacks with highly optimized, clean code patterns.', 'Wir entwickeln deine leistungsstarke Webanwendung mit modernen, skalierbaren Technologien und sauberem, optimiertem Code.'],
  ['End-to-end quality assurance testing across all target devices and intense edge cases to guarantee zero glitches at public launch.', 'Umfassende Qualitätstests auf allen Zielgeräten und für kritische Sonderfälle sorgen für einen reibungslosen Launch.'],
  ['Seamless deployment to production servers with optimized cloud delivery metrics, fully ready for scaling to your active user base.', 'Nahtlose Bereitstellung auf Produktivservern mit optimierter Cloud-Auslieferung – bereit für wachsende Nutzerzahlen.'],
  ['Continuous server monitoring, routine modern security updates, and performance optimization to keep your system scaling smoothly.', 'Kontinuierliches Monitoring, aktuelle Sicherheitsupdates und Performance-Optimierung halten dein System stabil und skalierbar.'],
]);

const czechSentences = new Map([
  ['We dive deep into your business goals, target audience, and system requirements to map out the perfect digital architecture.', 'Podrobně poznáme vaše obchodní cíle, cílovou skupinu a systémové požadavky, abychom navrhli ideální digitální architekturu.'],
  ['Crafting detailed wireframes, user journeys, and project roadmaps to ensure exact alignment before a single line of code is written.', 'Připravíme podrobné wireframy, uživatelské cesty a plán projektu, aby bylo vše jasné ještě před napsáním prvního řádku kódu.'],
  ['Our team builds your high-performing web application using modern, scalable tech stacks with highly optimized, clean code patterns.', 'Vytvoříme výkonnou webovou aplikaci pomocí moderních a škálovatelných technologií s čistým, optimalizovaným kódem.'],
  ['End-to-end quality assurance testing across all target devices and intense edge cases to guarantee zero glitches at public launch.', 'Komplexní testování na všech cílových zařízeních a v krajních situacích zajistí bezproblémové veřejné spuštění.'],
  ['Seamless deployment to production servers with optimized cloud delivery metrics, fully ready for scaling to your active user base.', 'Plynulé nasazení na produkční servery s optimalizovaným cloudovým provozem, připravené na růst počtu uživatelů.'],
  ['Continuous server monitoring, routine modern security updates, and performance optimization to keep your system scaling smoothly.', 'Průběžný monitoring serverů, bezpečnostní aktualizace a optimalizace výkonu udržují systém stabilní a škálovatelný.'],
]);

const slovakSentences = new Map([
  ['We dive deep into your business goals, target audience, and system requirements to map out the perfect digital architecture.', 'Podrobne spoznáme vaše obchodné ciele, cieľovú skupinu a systémové požiadavky, aby sme navrhli ideálnu digitálnu architektúru.'],
  ['Crafting detailed wireframes, user journeys, and project roadmaps to ensure exact alignment before a single line of code is written.', 'Pripravíme podrobné wireframy, používateľské cesty a plán projektu, aby bolo všetko jasné ešte pred napísaním prvého riadku kódu.'],
  ['Our team builds your high-performing web application using modern, scalable tech stacks with highly optimized, clean code patterns.', 'Vytvoríme výkonnú webovú aplikáciu pomocou moderných a škálovateľných technológií s čistým, optimalizovaným kódom.'],
  ['End-to-end quality assurance testing across all target devices and intense edge cases to guarantee zero glitches at public launch.', 'Komplexné testovanie na všetkých cieľových zariadeniach a v hraničných situáciách zabezpečí bezproblémové verejné spustenie.'],
  ['Seamless deployment to production servers with optimized cloud delivery metrics, fully ready for scaling to your active user base.', 'Plynulé nasadenie na produkčné servery s optimalizovanou cloudovou prevádzkou, pripravené na rast počtu používateľov.'],
  ['Continuous server monitoring, routine modern security updates, and performance optimization to keep your system scaling smoothly.', 'Priebežný monitoring serverov, bezpečnostné aktualizácie a optimalizácia výkonu udržiavajú systém stabilný a škálovateľný.'],
]);

const translationsByLanguage = {
  de: new Map([...Object.entries(de), ...germanSentences]),
  ...Object.fromEntries(
    Object.entries(additionalLocales).map(([locale, translations]) => [
      locale,
      new Map(Object.entries(translations)),
    ])
  ),
  cs: new Map([
    ...Object.entries(additionalLocales.cs ?? {}),
    ...Object.entries(cs),
    ...czechSentences,
  ]),
  sk: new Map([
    ...Object.entries(additionalLocales.sk ?? {}),
    ...Object.entries(sk),
    ...slovakSentences,
  ]),
};
const reverseTranslations = new Map(
  Object.values(translationsByLanguage).flatMap((map) =>
    [...map].map(([english, translated]) => [
      translated.trim(),
      {
        english: english.trim(),
        leading: translated.match(/^\s*/)?.[0] ?? '',
        trailing: translated.match(/\s*$/)?.[0] ?? '',
      },
    ])
  )
);
const sourceTextByNode = new WeakMap();
const renderedTextByNode = new WeakMap();
const sourceAttributesByElement = new WeakMap();
const renderedAttributesByElement = new WeakMap();

function detectInitialLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (supportedLanguages.includes(saved)) return saved;

  const locales = navigator.languages?.length ? navigator.languages : [navigator.language];
  const primaryLocale = locales[0]?.toLowerCase().split('-')[0];
  if (supportedLanguages.includes(primaryLocale)) return primaryLocale;

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const languageByTimeZone = {
    'Europe/Berlin': 'de',
    'Europe/Busingen': 'de',
    'Europe/Amsterdam': 'nl',
    'Europe/Paris': 'fr',
    'Europe/Warsaw': 'pl',
    'Europe/Prague': 'cs',
    'Europe/Bratislava': 'sk',
    'Europe/Madrid': 'es',
    'Europe/Rome': 'it',
    'Europe/Lisbon': 'pt',
  };
  return languageByTimeZone[timeZone] ?? 'en';
}

async function detectLanguageByCountry() {
  countryLookupPromise ??= fetch('https://api.country.is/', {
    headers: { Accept: 'application/json' },
  })
    .then((response) => {
      if (!response.ok) throw new Error(`Country lookup failed with ${response.status}`);
      return response.json();
    })
    .then((data) => languageByCountry[data.country?.toUpperCase()] ?? null)
    .catch(() => null);

  return countryLookupPromise;
}

function translateValue(value, language) {
  const leading = value.match(/^\s*/)?.[0] ?? '';
  const trailing = value.match(/\s*$/)?.[0] ?? '';
  const text = value.trim();
  if (!text) return value;
  const englishText = reverseTranslations.get(text)?.english ?? text;
  const translated = language === 'en'
    ? englishText
    : translationsByLanguage[language]?.get(englishText);
  return translated ? `${leading}${translated}${trailing}` : value;
}

function normalizeToEnglish(value) {
  const leading = value.match(/^\s*/)?.[0] ?? '';
  const trailing = value.match(/\s*$/)?.[0] ?? '';
  const text = value.trim();
  const reverseTranslation = reverseTranslations.get(text);
  if (!reverseTranslation) return value;

  const structuralLeading = reverseTranslation.leading
    && leading.endsWith(reverseTranslation.leading)
    ? leading.slice(0, -reverseTranslation.leading.length)
    : leading;
  const structuralTrailing = reverseTranslation.trailing
    && trailing.startsWith(reverseTranslation.trailing)
    ? trailing.slice(reverseTranslation.trailing.length)
    : trailing;

  return `${structuralLeading}${reverseTranslation.english}${structuralTrailing}`;
}

function getSourceText(node) {
  const currentValue = node.nodeValue;
  const lastRenderedValue = renderedTextByNode.get(node);
  if (
    !sourceTextByNode.has(node)
    || (lastRenderedValue !== undefined && currentValue !== lastRenderedValue)
  ) {
    sourceTextByNode.set(node, normalizeToEnglish(currentValue));
  }
  return sourceTextByNode.get(node);
}

function getAttributeMaps(element) {
  if (!sourceAttributesByElement.has(element)) {
    sourceAttributesByElement.set(element, new Map());
    renderedAttributesByElement.set(element, new Map());
  }
  return {
    sources: sourceAttributesByElement.get(element),
    rendered: renderedAttributesByElement.get(element),
  };
}

function translateDocument(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    if (
      !['SCRIPT', 'STYLE'].includes(node.parentElement?.tagName) &&
      !node.parentElement?.closest('[data-no-translate]')
    ) {
      const translated = translateValue(getSourceText(node), language);
      renderedTextByNode.set(node, translated);
      if (translated !== node.nodeValue) node.nodeValue = translated;
    }
    node = walker.nextNode();
  }

  document.querySelectorAll('[aria-label], [title], [placeholder]').forEach((element) => {
    if (element.closest('[data-no-translate]')) return;
    const { sources, rendered } = getAttributeMaps(element);
    ['aria-label', 'title', 'placeholder'].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value) {
        const lastRenderedValue = rendered.get(attribute);
        if (
          !sources.has(attribute)
          || (lastRenderedValue !== undefined && value !== lastRenderedValue)
        ) {
          sources.set(attribute, normalizeToEnglish(value));
        }
        const translated = translateValue(sources.get(attribute), language);
        rendered.set(attribute, translated);
        if (translated !== value) element.setAttribute(attribute, translated);
      }
    });
  });
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(detectInitialLanguage);

  const setLanguage = (nextLanguage) => {
    localStorage.setItem(STORAGE_KEY, nextLanguage);
    setLanguageState(nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = pageTitles[language];
    translateDocument(language);

    const observer = new MutationObserver(() => translateDocument(language));
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [language]);

  useEffect(() => {
    if (supportedLanguages.includes(localStorage.getItem(STORAGE_KEY))) return;

    let active = true;
    detectLanguageByCountry().then((countryLanguage) => {
      if (
        active
        && countryLanguage
        && !supportedLanguages.includes(localStorage.getItem(STORAGE_KEY))
      ) {
        setLanguageState(countryLanguage);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
