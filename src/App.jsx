import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import { LanguageProvider } from './i18n/LanguageContext';


const PageLayout = () => (
  <>
    <Outlet />
  </>
);

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
