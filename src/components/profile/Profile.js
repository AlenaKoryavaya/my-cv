import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import "./Profile.scss";
import avatar from "../../assets/img/avatar.jpg";

const Profile = () => {
    return (
        <section className="profile">
            <figure className="profile__figure">
                <img className="profile__img" src={avatar} alt="avatar" />
            </figure>
            <div className="profile__desc">
                <h1>
                    Alena <span>Karavaya</span>
                </h1>
                <p className="profile__profession">Front-end developer</p>
                <div className="profile__social">
                    <ul className="profile__social-list">
                        <OverlayTrigger
                            key="1"
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={
                                <Tooltip id="email" style={{ marginTop: "10px" }}>
                                    Email
                                </Tooltip>
                            }
                        >
                            <li className="social-item">
                                <a className="social-link" href="mailto:elena.koryavaya@gmail.com">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </li>
                        </OverlayTrigger>

                        <OverlayTrigger
                            key="2"
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={
                                <Tooltip id="github" style={{ marginTop: "10px" }}>
                                    GitHub
                                </Tooltip>
                            }
                        >
                            <li className="social-item">
                                <a
                                    className="social-link"
                                    href="https://github.com/AlenaKoryavaya?tab=repositories"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>
                        </OverlayTrigger>

                        <OverlayTrigger
                            key="3"
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={
                                <Tooltip id="linkedin" style={{ marginTop: "10px" }}>
                                    Linkedin
                                </Tooltip>
                            }
                        >
                            <li className="social-item">
                                <a
                                    className="social-link"
                                    href="https://www.linkedin.com/in/alena-karavaya-479136181/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </li>
                        </OverlayTrigger>

                        {/* <OverlayTrigger
                            key="bottom"
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={
                                <Tooltip id="telegram" style={{ marginTop: "10px" }}>
                                    Telegram
                                </Tooltip>
                            }
                        >
                            <li className="social-item">
                                <a
                                    className="social-link"
                                    href="https://telegram.org"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </a>
                            </li>
                        </OverlayTrigger> */}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Profile;
