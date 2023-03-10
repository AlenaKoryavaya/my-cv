import { Carousel } from "react-bootstrap";

import "./Projects.scss";
import momentum from "../../assets/img/slider/momentum.png";
import marvel from "../../assets/img/slider//marvel.png";
import employees from "../../assets/img/slider/employees.png";

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img className="d-block w-100" src={momentum} alt="First slide" />
                    <Carousel.Caption>
                        <a
                            href="https://rolling-scopes-school.github.io/alenakoryavaya-JSFEPRESCHOOL2022Q2/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Momentum
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img className="d-block w-100" src={marvel} alt="Second slide" />
                    <Carousel.Caption>
                        <a
                            href="https://alenakoryavaya.github.io/React-API-app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Marvel information portal
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img className="d-block w-100" src={employees} alt="Third slide" />
                    <Carousel.Caption>
                        <a
                            href="https://alenakoryavaya.github.io/Employees-app-React/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Employees accounting
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Projects;
