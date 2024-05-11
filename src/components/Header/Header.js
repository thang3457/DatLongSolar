import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../../Pages/Home/Home";
import TintucPage from "../../Pages/news/TinTuc";


function Header () {
    return (
        <header id="header">
            <div className="container">
                <a href={HomePage} className="logo">
                    <img src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/440441682_856938219783302_7715632577538074323_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGuERKanisQpJ1zCgVfdDjUh7zfCrFTRGCHvN8KsVNEYPgwyRoFhMmk2NwunhSHOVnL-eOVNWY1DqdpwYu6-1vy&_nc_ohc=iLC8HHDhFEYQ7kNvgGCBppD&_nc_ht=scontent.fdad1-4.fna&oh=00_AYC9EmktL3xKuZbTTd8AO7qKc9wds_peO5g7Haf7Tp7lgg&oe=6644C54C" alt="logo" />
                </a>

                <div className="navbar">
                    <nav>
                        <ul>
                            <li> <Link to="/">Home</Link> </li>
                            <li> <Link to="/TinTuc">Tin Tức</Link> </li>
                        </ul>
                    </nav>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/TinTuc" element={<TintucPage />} />
                        </Routes>
                </div>
            </div>
       </header>
    )

}

export default Header;