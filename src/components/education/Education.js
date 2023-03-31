import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuildingColumns,
    faGraduationCap,
    faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import "./Education.scss";

const Education = () => {
    return (
        <section id="education" className="education">
            <h2>Education</h2>
            <div className="education__content">
                <div className="content__item">
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faBuildingColumns} className="content__item-icon" />
                    </div>

                    <div>
                        <h3>State Technical College n.a. B.E. Lobanka</h3>
                        <p className="content__item-year">2010 - 2014</p>
                        <p className="content__item-prof">Agricultural Researcher</p>
                    </div>
                </div>
                <div className="content__item">
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faGraduationCap} className="content__item-icon" />
                    </div>
                    <div>
                        <h3>MI University</h3>
                        <p className="content__item-year">2021 - 2023</p>
                        <p className="content__item-prof">Organisation Management</p>
                    </div>
                </div>
                <div className="content__item">
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faCertificate} className="content__item-icon" />
                    </div>
                    <div>
                        <h3 className="content__item-title">
                            <a href="https://rs.school/" target="_blank" rel="noreferrer">
                                The Rolling Scopes School
                            </a>
                        </h3>
                        <p className="content__item-year">2022</p>
                        <OverlayTrigger
                            key="1"
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={
                                <Tooltip id="rsschool" style={{ marginTop: "10px" }}>
                                    Sertificate
                                </Tooltip>
                            }
                        >
                            <a
                                className="content__item-link"
                                href="https://app.rs.school/certificate/plexnfoc"
                                target="_blank"
                                rel="noreferrer"
                            >
                                JavaScript basics
                            </a>
                        </OverlayTrigger>
                    </div>
                </div>
                <div className="content__item">
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faCertificate} className="content__item-icon" />
                    </div>
                    <div>
                        <h3 className="content__item-title">
                            <a
                                href="https://www.udemy.com/course/javascript_full/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Udemy "JavaScript + React"
                            </a>
                        </h3>
                        <p className="content__item-year">2023</p>
                        <OverlayTrigger
                            key="2"
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={
                                <Tooltip id="udemi" style={{ marginTop: "10px" }}>
                                    Sertificate
                                </Tooltip>
                            }
                        >
                            <a
                                className="content__item-link"
                                href="https://www.udemy.com/certificate/UC-d17de21e-d5ae-4cb0-855a-9e29a95daef2/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                JavaScript + React
                            </a>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
