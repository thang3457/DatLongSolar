import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/slider/img-2.jpg';
import './Header.scss';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header id="header">
            <div className="container">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                </Link>
                <div className="menu-icon" onClick={toggleMenu}>
                    &#9776; {/* Icon for menu (hamburger icon) */}
                </div>
                {/* <div className={`navbar ${isOpen ?  'open' : ''}`}> */}
                <nav className={isOpen ? 'open' : ''}>
                        <ul>
                            <li><Link to="/">Trang Chủ</Link></li>
                            <li><Link to="/gioi-thieu">Giới Thiệu</Link></li>
                            <li><Link to="/dich-vu">Dịch Vụ</Link></li>
                            <li><Link to="/san-pham">Sản Phẩm</Link></li>
                            <li><Link to="/du-an">Dự Án</Link></li>
                            <li><Link to="/tin-tuc">Tin Tức</Link></li>
                            <li><Link to="/lien-he">Liên Hệ</Link></li>
                        </ul>
                    </nav>
                </div>
        </header>
    );
}

export default Header;
