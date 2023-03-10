import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";
import resume from "../../assets/img/resume.pdf";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const onToggleMenu = () => {
        setToggle(!toggle);
    };

    const style = toggle ? "nav" : "nav nav_hidden";
    const overlayStyle = toggle ? "overlay" : "overlay overlay_hidden";

    return (
        <>
            <div className={overlayStyle} onClick={onToggleMenu}></div>

            <header className="header">
                <nav className={style}>
                    <span className="nav__plus-sign" onClick={onToggleMenu}>
                        &#43;
                    </span>
                    <ul className="nav__list">
                        <li className="nav__item" onClick={onToggleMenu}>
                            <a href="#summary">Summary</a>
                        </li>
                        <li className="nav__item" onClick={onToggleMenu}>
                            <a href="#skills">Skills</a>
                        </li>
                        <li className="nav__item" onClick={onToggleMenu}>
                            <a href="#education">Education</a>
                        </li>
                        <li className="nav__item" onClick={onToggleMenu}>
                            <a href="#experience">Experience</a>
                        </li>
                        <li className="nav__item" onClick={onToggleMenu}>
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="nav__item" onClick={onToggleMenu}>
                            <a href="#contacts">Contacts</a>
                        </li>
                        <li className="nav__item">
                            <a className="btn" href={resume} download>
                                Download
                            </a>
                        </li>
                    </ul>
                </nav>

                <button className="header__burger" onClick={onToggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </header>
        </>
    );
};

export default Header;
