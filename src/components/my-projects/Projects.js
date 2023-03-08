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
                <Carousel.Item interval={100000}>
                    <img className="d-block w-100" src={momentum} alt="First slide" />
                    <Carousel.Caption>
                        <h3>Momentum</h3>
                        <a
                            href="https://rolling-scopes-school.github.io/alenakoryavaya-JSFEPRESCHOOL2022Q2/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            preview
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={10000}>
                    <img className="d-block w-100" src={marvel} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Marvel information portal</h3>
                        <a href="/" target="_blank">
                            preview
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={10000}>
                    <img className="d-block w-100" src={employees} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Employees accounting</h3>
                        <a href="/" target="_blank">
                            preview
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Projects;
