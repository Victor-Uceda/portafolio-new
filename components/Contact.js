export default function Contact() {
  return (
    <section id="contacto" style={{ textAlign: "center" }}>
      <h2
        style={{
          fontSize: 22,
          fontWeight: 600,
          marginBottom: 32,
          letterSpacing: "-0.3px",
          textAlign: "center",
        }}
      >
        Contacto
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          maxWidth: 400,
          margin: "0 auto",
        }}
      >
        <a
          href="https://wa.me/51901682201"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <IconWhatsApp />
          <span>+51 901 682 201</span>
        </a>

        <a
          href="https://github.com/Victor-Uceda"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <IconGitHub />
          <span>github.com/Victor-Uceda</span>
        </a>

        <a
          href="https://www.linkedin.com/in/victor-uceda-226a89371/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <IconLinkedIn />
          <span>linkedin.com/in/victor-uceda</span>
        </a>

        <a
          href="mailto:victorhugouceda@gmail.com"
          className="contact-link"
        >
          <IconEmail />
          <span>victorhugouceda@gmail.com</span>
        </a>
      </div>
    </section>
  );
}

function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
