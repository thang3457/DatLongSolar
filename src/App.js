import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import NewsPage from "./Pages/News/News";
import ContactPage from "./Pages/Contact/Contact";
import IntroducePage from "./Pages/Introduce/Introduce";
import ProductPage from "./Pages/Product/Product";
import ProjectPage from "./Pages/Project/Project";
import ServicePage from "./Pages/Service/Service";
import Header from './components/Header';
import Footer from './components/footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gioi-thieu" element={<IntroducePage />} />
        <Route path="/san-pham" element={<ProductPage />} />
        <Route path="/dich-vu" element={<ServicePage />} />
        <Route path="/du-an" element={<ProjectPage />} />
        <Route path="/tin-tuc" element={<NewsPage />} />
        <Route path="/lien-he" element={<ContactPage />} />
      </Routes>
      
      <Contact />
      <Footer />

    </div>
  );
}

export default App; 
