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
              Ingenieria de Sistemas e Informatica. Code, learn, repeat.
            </p>

            <div className="hero-terminal">
              <span className="hero-prompt">$</span>
              <span className="hero-cmd">cd /home/victor/projects</span>
            </div>

            <div style={{ marginTop: 28 }}>
              <a href="#proyectos" className="hero-cta">
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
