import { useReveal } from "../hooks/useReveal";
import { EXPERIENCE, EDUCATION, CERTIFICATIONS, LANGUAGES } from "../data/experience";

function TimelineItem({ item }) {
    return (
        <div className="timeline-item">
            <div className="timeline-marker">
                {item.logo ? (
                    <img src={item.logo} alt="" className="timeline-logo" />
                ) : (
                    <span className="timeline-dot" />
                )}
            </div>
            <div className="timeline-content">
                <div className="timeline-header">
                    <h4>{item.title}</h4>
                    {item.period && <span className="timeline-period">{item.period}</span>}
                </div>
                {item.org && (
                    <div className="timeline-org-container">
                        <a className="timeline-org" href={item.orgLink} target="_blank" rel="noopener noreferrer">{item.org}</a> 
                        <div className="preview-popup">
                            <div className="preview-card-content">
                                {item.orgImage && <img src={item.orgImage} alt="" className="preview-img" />}
                                <div className="preview-text">
                                    <strong>{item.org}</strong>
                                    <p>{item.orgSnippet || "Click to visit the official website."}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {item.description && <p className="timeline-desc">{item.description}</p>}
            </div>
        </div>
    );
}

function ExperienceAndEdu({ theme }) {
    const [ref, visible] = useReveal();

    return (
        <section
            id="experience"
            ref={ref}
            className={"experience-section" + (visible ? " is-visible" : "")}
        >
            <h2>Experience & Education</h2>

            <div className="experience-grid">
                <div>
                    <h3>Experience</h3>
                    <div className="timeline">
                        {EXPERIENCE.map((item) => (
                            <TimelineItem key={item.title} item={item} />
                        ))}
                    </div>
                </div>

                <div>
                    <div>
                        <h3>Education</h3>
                        <div className="timeline">
                            {EDUCATION.map((item) => (
                                <TimelineItem key={item.title} item={item} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3>Awards & Certification</h3>
                        <div className="timeline">
                            {CERTIFICATIONS.map((item) => (
                                <TimelineItem key={item.title} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
                    
            </div>

            <div className="languages-block">
                <h3>Languages</h3>
                <div className="language-cards">
                    {LANGUAGES.map((lang) => (
                        <div key={lang.title} className={`language-card current-${theme}`}>
                            {lang.logo && <img src={lang.logo} alt="" className="language-flag" />}
                            <div>
                                <p className="language-title">{lang.title}</p>
                                <p className="language-org">{lang.org}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExperienceAndEdu;