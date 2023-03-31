import "./Skills.scss";

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2>Professional Skills</h2>
            <div className="skills__container">
                <ul>
                    <li className="skills__item">JavaScript</li>
                    <li className="skills__item">TypeScript basics</li>
                    <li className="skills__item">HTML5</li>
                    <li className="skills__item">CSS3 / SASS</li>
                    <li className="skills__item">Git / GitHub</li>
                    <li className="skills__item">BEM methodology</li>
                </ul>
                <ul>
                    <li className="skills__item">React</li>
                    <li className="skills__item">Redux</li>
                    <li className="skills__item">Bootstrap</li>
                    <li className="skills__item">Node.js basics</li>
                    <li className="skills__item">Figma</li>
                    <li className="skills__item">English - Intermediate</li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;
