import { useReveal } from "../hooks/useReveal";
import myPic from "../assets/my-pic.jpg";
import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";

function About() {
    const [ref, visible] = useReveal();

    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section id="about" ref={ref} className={"about-section" + (visible ? " is-visible" : "")}>
            <h2>About Me</h2>

            <div className="about-layout">
                <div className="my-pic">
                    <img src={myPic} alt="Szu Szu Wang" />
                    <div className="social-icons">
                        <a href="https://github.com/szuszu-hay" target="_blank" rel="noreferrer" className="github-link">
                            <img className="github-icon" src={githubIcon} alt="Github Icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/szu-szu-wang-152b45387/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <img src={linkedinIcon} alt="" />
                        </a>
                    </div>
                    <button className="explore-btn" onClick={scrollToProjects}>Explore my work</button>
                </div>

                <div className="about-content">
                    <p>I am a <strong>Software Engineering student</strong> at Sheffield Hallam University interested in developing 
                        full-stack applications and understanding how different software affects humans' lives. <br />
                        <br />

                        Most of my projects are built by using <strong>C#, ASP.NET Core, React, JavaScript, Python, and Flask</strong>. 
                        These projects include e-commerce, messaging, hospital management, and real estate applications.
                        <br/><br/>

                        I am currently focusing on improving my software engineering backgrounds, strengthening my React and C# skills as I prepare for a software engineering placement.
                        I am also eager in learning how to build more robust, well-tested, and production-oriented applications across my journey.
                    </p>

                    <div className="summary">
                        <p><strong>Currently:</strong></p>
                        <ul>
                            <li>Second-year Software Engineering student</li>
                            <li>Looking for a placement</li>
                        </ul>
                    </div>


                </div>

            </div>


        </section>
    );
}

export default About;