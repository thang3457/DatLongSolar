// import { Routes, Route, Link } from "react-router-dom";
// import HomePage from "./Pages/Home/Home";
// import TintucPage from "./Pages/news/TinTuc";
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header />
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/TinTuc">Tin Tức</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/TinTuc" element={<TintucPage />} />
      </Routes> */}
    </div>
  );
}

export default App; 
