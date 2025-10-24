import React, {useState} from "react";
import "./Header.css"
import {Link} from 'react-router-dom';


const Header = ({onMenuClick}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="hd_inner">
                {/*로고*/}
                <div className="hd_logo" onClick={() => onMenuClick("top")}><img src={process.env.PUBLIC_URL + "/header-img/logo.svg"} alt=""/></div>
                <ul className="hd_menu">
                    <li onClick={() => onMenuClick("introSection")}>INTRO</li>
                    <li onClick={() => onMenuClick("productSection")}>PRODUCT</li>
                    <li onClick={() => onMenuClick("lineUpSection")}>LINE_UP</li>
                    <li onClick={() => onMenuClick("gallerySection")}>GALLERY</li>
                </ul>
                {/*아이콘*/}
                <ul className="hd_icons">
                    <li><a href="#"><img src={process.env.PUBLIC_URL + "/header-img/shopping-bag.svg"} alt=""/></a></li>
                    <li><a href="#"><img src={process.env.PUBLIC_URL + "/header-img/user.svg"} alt=""/></a></li>
                </ul>
                {/*모바일 메뉴바*/}
                <button className="hd_menu_btn" onClick={() => setMenuOpen(prev => !prev)}>
                    <div>
                        <span className={menuOpen ? "active" : ""}></span>
                        <span className={menuOpen ? "active" : ""}></span>
                        <span className={menuOpen ? "active" : ""}></span>
                        <span className={menuOpen ? "active" : ""}></span>
                    </div>
                </button>

                    <ul className={`mob_menu ${menuOpen ? "open" : ""}`}>
                        <li onClick={() => onMenuClick("introSection")}>INTRO</li>
                        <li onClick={() => onMenuClick("productSection")}>PRODUCT</li>
                        <li onClick={() => onMenuClick("lineUpSection")}>LINE_UP</li>
                        <li onClick={() => onMenuClick("gallerySection")}>GALLERY</li>
                    </ul>

            </div>
        </header>
    )

};
export default Header;