import { useParams, Link, useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { useState } from "react";

function ProjectDetails({ theme }) {
    const { id } = useParams();
    const project = PROJECTS.find((p) => p.id === id);
    const [activeImage, setActiveImage] = useState(0);
    const navigate = useNavigate();

    const goToProjects = () => {
        navigate("/", { state: {scrollTo: "projects"} });
    };

    if (!project) {
        return (
            <div className="project-notfound">
                <p>Project not found.</p>
                <Link to="/projects">← Back to Projects</Link>
            </div>
        )
    }
    return (
        <div className={`project-details current-${theme}`}>
            <h1>{project.title}</h1>
            <button onClick={goToProjects} className="project-back-link">← Back to Projects</button>
            <p>{project.description}</p>
            {project.highlights.length > 0 && (
                <ul className="project-highlights">
                    {project.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            )}
            <div className="project-tags">
                {project.tags.map((tag) => (
                    <span key={tag} className={`project-tag tag-${theme}`}>{tag}</span>
                ))}
            </div>
            
            {project.msg.length > 0 && (
                <div> 
                    <p>{project.msg}</p>
                </div>
            )}

            <div className="project-links">
                <a href={project.repo} target="_blank" rel="noreferrer">Code</a>
                <a href={project.live} target="_blank" rel="noreferrer">Live</a>
            </div>

             {project.images.length > 0 && (
                <div className="project-gallery">
                    <img
                        src={project.images[activeImage]}
                        alt={`${project.title} screenshot ${activeImage + 1}`}
                        className="project-gallery-main"
                    />
                    {project.images.length > 1 && (
                        <div className="project-gallery-thumbs">
                            {project.images.map((img, i) => (
                                <button
                                    key={img}
                                    className={"project-gallery-thumb" + (i === activeImage ? " active" : "")}
                                    onClick={() => setActiveImage(i)}
                                    aria-label={`Show screenshot ${i + 1}`}
                                >
                                    <img src={img} alt="" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {project.video && (
                <video key={`${project.id}-${project.video}`} controls autoPlay muted playsInline preload="auto" className="project-video">
                    <source src={`${import.meta.env.BASE_URL}${project.video.replace(/^\//, '')}`} type="video/mp4" />
                    Your browser doesn't support embedded video.
                </video>
            )}

            {project.testAccounts.length > 0 && (
                <div className="project-test-accounts">
                    <h3>Try it yourself</h3>
                    <p>Use one of these accounts to explore without signing up:</p>
                    {project.testAccounts.map((acc) => (
                        <div key={acc.role} className="test-account-row">
                            <span className="test-account-role">{acc.role}</span>
                            <code>{acc.username}</code>
                            <code>{acc.password}</code>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

export default ProjectDetails;