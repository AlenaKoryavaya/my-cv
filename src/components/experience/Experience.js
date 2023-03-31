import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faDumbbell } from "@fortawesome/free-solid-svg-icons";

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
                        <p className="item-prof">Agricultural Researcher</p>
                        <div className="item-responsob">
                            <ul>
                                <li>
                                    Development of agricultural action items aimed to improve land
                                    fertility and crop yield
                                </li>
                                <li>Preparation of scientific documentation and reporting.</li>
                                <li>
                                    Project control on harvesting, transportation and storing of the
                                    harvest
                                </li>
                                <li>Organization of planting of the field crops</li>
                                <li>Planting plan management</li>
                                <li>
                                    Leading negotiations and contract preparation for plant seed and
                                    plant stock procurement
                                </li>
                            </ul>
                        </div>
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
                        <div className="item-responsob">
                            <ul>
                                <li>Working with the CRM system</li>
                                <li>Database management in Excel</li>
                                <li>Finance reporting in 1C</li>
                                <li>
                                    Enhancing profitability by organising and delivering an
                                    appropriate range of fitness activities and programmes
                                </li>
                                <li>Consulting of the clients on the subscription products</li>
                                <li>Maintaining customer service standards</li>
                                <li>Dealing with enquiries, complaints and emergencies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
