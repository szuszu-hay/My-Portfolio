import { useEffect, useRef, useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/mkjjwapr";

export default function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) return; 

    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus({ type: "success", message: "Thanks! Your message has been sent." });
      } else {
        setStatus({ type: "error", message: "Something went wrong. Please email me." });
      }
    } catch {
      setStatus({ type: "error", message: "Sorry, could not send. Please email me." });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" ref={sectionRef} className={`contact-section${visible ? " is-visible" : ""}`}>
      <h2>Get in touch with me</h2>
      <p className="contact-intro">
        I am positively open for placement offers and opportunities.<br></br>
        Please send me a message and I will get back to you!
      </p>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" required autoComplete="name" />
          </div>

          <div className="field-group">
            <label htmlFor="contact-org">Organisation</label>
            <input id="contact-org" name="org" type="text" required autoComplete="org" />
          </div>

          <div className="field-group">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" required autoComplete="email" />
          </div>

          <div className="field-group">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" required />
          </div>

          <input type="text" name="website" tabIndex={-1} autoComplete="off"
            aria-hidden="true" style={{ position: "absolute", left: "-9999px" }} />

          <button type="submit" className="explore-btn" disabled={sending}>
            {sending ? "Sending..." : "Send message"}
          </button>

          {status.message && (
            <p className={`form-feedback ${status.type}`} role="status">
              {status.message}
            </p>
          )}
        </form>

        <div className="contact-side">
          <a className="contact-direct" href="mailto:szuszuhay@gmail.com">
            Email: <strong>szuszuhay@gmail.com</strong>
          </a>
          <a className="contact-direct" href="https://www.linkedin.com/in/szu-szu-wang-152b45387" target="_blank" rel="noreferrer">
            Navigate to my <strong>LinkedIn</strong>
          </a>
          <a className="contact-direct" href="https://github.com/szuszu-hay" target="_blank" rel="noreferrer">
            Navigate to my <strong>GitHub</strong>
          </a>
        </div>
      </div>
    </section>
  );
}