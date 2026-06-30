export default function Services() {
  return (
    <section id="servicios" className="services-section">
      <h2 className="services-title">Que ofrezco</h2>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
          </div>
          <h3 className="service-name">Landing Pages</h3>
          <p className="service-desc">
            Paginas web profesionales para tu negocio o proyecto. Diseño limpio,
            responsive y optimizado para conversion.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3 className="service-name">Sitios Web</h3>
          <p className="service-desc">
            Desarrollo de sitios web completos con React y Next.js. rápidos,
            modernos y con experiencia de usuario cuidada.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <h3 className="service-name">Integraciones</h3>
          <p className="service-desc">
            Conexion con WhatsApp, formularios, bases de datos y mas. Tu web
            funcionando como herramienta de ventas.
          </p>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 32 }}>
        <a
          href="https://wa.me/51901682201"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta hero-cta-primary btn-solicitar"
        >
          Solicitar
        </a>
      </div>
    </section>
  );
}
