import { useReveal } from "../hooks/useReveal";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";

function Projects({ theme }) {
    const [ref, visible] = useReveal();

    return (
        <section id="projects" ref={ref} className={"projects-section" + (visible ? " is-visible" : "")}>
            
            <div className="projects-header">
                <h2>Projects</h2>
                <p>A few things I've built. <br />Click to view more details.</p>
            </div>
            <div className="projects-grid">
                {PROJECTS.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} theme={theme} />
                ))}
            </div>
        </section>
    );
}

export default Projects;