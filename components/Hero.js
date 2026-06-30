import AsciiCube from "./AsciiCube";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        <div className="hero-col hero-col-text">
          <div className="hero-text-block">
            <h1 className="hero-title">Victor Uceda</h1>

            <div className="hero-divider" />

            <p className="hero-desc">
              Soluciones de software a la medida
            </p>
            <p className="hero-subdesc">
              Ingeniero en Sistemas e Informatica
            </p>

            <div className="hero-terminal">
              <span className="hero-prompt">$</span>
              <span className="hero-cmd">cd /home/victor/projects</span>
            </div>

            <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
              <a href="https://wa.me/51901682201" target="_blank" rel="noopener noreferrer" className="hero-cta hero-cta-primary">
                Trabajemos juntos
              </a>
              <a href="#proyectos" className="hero-cta hero-cta-secondary">
                Ver Proyectos
              </a>
            </div>
          </div>
        </div>

        <div className="hero-col hero-col-cube">
          <AsciiCube />
        </div>
      </div>
    </section>
  );
}
