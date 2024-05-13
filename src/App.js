import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import TintucPage from "./Pages/news/TinTuc";
import Header from './components/Header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/TinTuc" element={<TintucPage />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App; 
