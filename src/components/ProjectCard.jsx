import { useNavigate } from "react-router-dom";

function ProjectCard({ project, index, theme }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/projects/${project.id}`);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
        }
    };

    return (
        <div className={`project-card current-${theme}`} style={{ transitionDelay: `${index * 0.1}s` }} 
            onClick={handleClick} onKeyDown={handleKeyDown} tabIndex={0}
            aria-label={`View details for ${project.title}`}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
                {project.tags.map((tag) => (
                    <span key={tag} className={`project-tag tag-${theme}`}>{tag}</span>
                ))}
            </div>

            <div className="project-links">
                <a href={project.repo} target="_blank" rel="noreferrer">Code</a>
                <a href={project.live} target="_blank" rel="noreferrer">Live</a>
            </div>

        </div>
    );
}

export default ProjectCard;