import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/slider/img-2.jpg";
import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="header">
      <div className="container">
        <Link to="/DatLongSolar" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Icon for menu (hamburger icon) */}
        </div>
        {/* <div className={`navbar ${isOpen ?  'open' : ''}`}> */}
        <nav className={isOpen ? "open" : ""}>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/DatLongSolar"
                activeClassName="active"
              >
                Trang Chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/gioi-thieu"
                activeClassName="active"
              >
                Giới Thiệu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/san-pham"
                activeClassName="active"
              >
                Sản Phẩm
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/dich-vu"
                activeClassName="active"
              >
                Dịch Vụ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/du-an"
                activeClassName="active"
              >
                Dự Án
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/tin-tuc"
                activeClassName="active"
              >
                Tin Tức
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/lien-he"
                activeClassName="active"
              >
                Liên Hệ
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
