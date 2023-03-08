import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMobileScreenButton, faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faSkype, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

const Footer = () => {
    const [scroll, setScroll] = useState(0);

    const onTopPosition = () => {
        document.documentElement.scrollTop = 0;
    };

    window.addEventListener("scroll", () => {
        setScroll(document.documentElement.scrollTop);
    });

    const arrowBtnStyle = scroll ? "footer__arrow" : "footer__arrow footer__arrow_hidden";

    return (
        <footer id="contacts" className="footer">
            <div className="footer__inner">
                <h4 className="footer__title">Contacts</h4>
                <div className="footer__contacts-wrapper">
                    <div className="footer__contacts">
                        <div className="footer__contacts-item">
                            <FontAwesomeIcon className="contact-icon" icon={faLocationDot} />
                            <span className="contact-link">Minsk, Belarus</span>
                        </div>
                        <div className="footer__contacts-item">
                            <FontAwesomeIcon className="contact-icon" icon={faMobileScreenButton} />
                            <a className="contact-link" href="tel:+375336373867">
                                +375 33 637 38 67{" "}
                            </a>
                        </div>
                        <div className="footer__contacts-item">
                            <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
                            <a className="contact-link" href="mailto:elena.koryavaya@gmail.com">
                                elena.koryavaya@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Arrow on top */}
                    <div className={arrowBtnStyle} onClick={onTopPosition}>
                        <FontAwesomeIcon className="arrow-icon" icon={faAnglesUp} />
                    </div>

                    <div className="footer__messangers">
                        <div className="messanger-wrapper">
                            <a
                                className="messanger-link"
                                href="https://join.skype.com/invite/M7BJZpkJgi56"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    className="contact-icon messanger"
                                    icon={faSkype}
                                />
                                skype
                            </a>
                        </div>
                        <div className="messanger-wrapper">
                            <a
                                className="messanger-link"
                                href="https://api.whatsapp.com/send?%20phone=375336373867"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    className="contact-icon messanger"
                                    icon={faWhatsapp}
                                />
                                whatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
