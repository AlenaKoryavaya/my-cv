import Header from "../header/Header";
import Profile from "../profile/Profile";
import Summary from "../summary/Summary";
import Skills from "../skills/Skills";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Projects from "../my-projects/Projects";
import Footer from "../footer/Footer";

const App = () => {
    return (
        <div className="app">
            <div className="app__container">
                <Header />
                <main>
                    <Profile />
                    <Summary />
                    <Skills />
                    <Education />
                    <Experience />
                    <Projects />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App;
