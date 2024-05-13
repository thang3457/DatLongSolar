import {  Link } from "react-router-dom";
import logo from "../../images/slider/img-2.jpg"

import './Header.scss'
function Header () {
    return (
        <header id="header">
            <div className="container">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                </Link>

                <div className="navbar">
                    <nav>
                        <ul>
                            <li> <Link to="/">Home</Link> </li>
                            <li> <Link to="/TinTuc">Tin Tức</Link> </li>
                        </ul>
                    </nav>
                       
                </div>
            </div>
       </header>
    )

}

export default Header;