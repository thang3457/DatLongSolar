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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/TinTuc">Trang Chủ</Link></li>
                            <li><Link to="/TinTuc">Giới Thiệu</Link></li>
                            <li><Link to="/TinTuc">Dịch Vụ</Link></li>
                            <li><Link to="/TinTuc">Sản Phẩm</Link></li>
                            <li><Link to="/TinTuc">Dự Án</Link></li>
                            <li><Link to="/TinTuc">Tin Tức</Link></li>
                            <li><Link to="/TinTuc">Liên Hệ</Link></li>
                        </ul>
                    </nav>
                </div>
        </header>
    );
}

export default Header;
