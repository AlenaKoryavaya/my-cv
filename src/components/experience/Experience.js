import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSeedling,
    faBagShopping,
    faDumbbell,
    faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

import "./Experience.scss";

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <h2>Work experience</h2>
            <div className="experience__list">
                <div className="experience__item">
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faSeedling} className="icon" />
                    </div>
                    <div>
                        <h3>Minsk Agricultural Experimental Station</h3>
                        <p className="item-year">2014 - 2016</p>
                        <p className="item-prof">Agronomist</p>
                    </div>
                </div>
                <div className="experience__item">
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faBagShopping} className="icon" />
                    </div>
                    <div>
                        <h3>Zamok Mall, Brand trade</h3>
                        <p className="item-year">2017 - 2019</p>
                        <p className="item-prof">Sales Manager</p>
                    </div>
                </div>
                <div className="experience__item">
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faDumbbell} className="icon" />
                    </div>
                    <div>
                        <h3>WeHouse GYM</h3>
                        <p className="item-year">2019 - 2021</p>
                        <p className="item-prof">Manager</p>
                    </div>
                </div>
                <div className="experience__item">
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faLaptopCode} className="icon" />
                    </div>
                    <div>
                        <h3>Soon...</h3>
                        <p className="item-prof">Front-end Developer</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
