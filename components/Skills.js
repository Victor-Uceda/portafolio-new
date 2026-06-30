const skills = [
  { name: "Java", color: "#007396" },
  { name: "Python", color: "#3776AB" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React", color: "#61DAFB" },
  { name: "HTML", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" },
  { name: "SQL", color: "#00618A" },
  { name: "GitHub", color: "#181717" },
  { name: "Linux", color: "#FCC624" },
  { name: "Node.js", color: "#339933" },
  { name: "Next.js", color: "#000000" },
  { name: "Git", color: "#F05032" },
];

function Icon({ name, color }) {
  const p = color;
  switch (name) {
    case "Java":
      return <svg viewBox="0 0 24 24" fill={p}><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.925c2.032.209 3.636.226 6.413-.306 0 0 .384.389.996.602-5.679 1.661-12.007.133-7.951-1.221M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.999.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.819M12.723 9.303c1.944-1.051 2.231-3.648 2.231-3.648s-1.218 3.137-4.303 4.555c-1.97.905-3.799 2.631-3.799 2.631s-1.2-.635-1.315-1.299c-.378-2.175 3.298-4.514 5.658-5.523 1.074-.459 1.604-1.411 1.604-1.411s-3.505.603-5.31 1.909c-2.626 1.903-3.995 4.294-1.652 5.13 0 0 .737-.761 1.876-1.481.583-.369 1.166-.639 1.166-.639s.042.417-.218.861c-.595 1.014-2.066 2.089-2.066 2.089s1.143-.071 2.035-.525c.902-.459 2.008-.643 2.008-.643s.035.366-.138.847c-.336.932-1.498 1.684-1.498 1.684s1.86-.242 3.101-1.352c1.231-1.102 1.74-2.238 1.74-2.238s-.042.868-.618 1.712c-.576.843-1.235 1.368-1.235 1.368s1.525-.252 2.518-1.143c.993-.891 1.27-1.754 1.27-1.754z"/></svg>;
    case "Python":
      return <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="4" fill={p}/><text x="12" y="16" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Py</text></svg>;
    case "JavaScript":
      return <svg viewBox="0 0 24 24" fill={p}><rect x="2" y="2" width="20" height="20" rx="2"/><text x="12" y="16" textAnchor="middle" fill="#000" fontSize="11" fontWeight="bold">JS</text></svg>;
    case "React":
      return <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.5" fill={p}/><ellipse cx="12" cy="12" rx="10" ry="4" stroke={p} strokeWidth="1.2" fill="none"/><ellipse cx="12" cy="12" rx="4" ry="10" stroke={p} strokeWidth="1.2" fill="none" transform="rotate(45 12 12)"/></svg>;
    case "HTML":
      return <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="2" width="18" height="20" rx="2" stroke={p} strokeWidth="1.5" fill="rgba(227,79,38,0.1)"/><text x="12" y="16" textAnchor="middle" fill={p} fontSize="10" fontWeight="bold">&lt;/&gt;</text></svg>;
    case "CSS":
      return <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="2" width="18" height="20" rx="2" stroke={p} strokeWidth="1.5" fill="rgba(21,114,182,0.1)"/><text x="12" y="16" textAnchor="middle" fill={p} fontSize="11" fontWeight="bold">#</text></svg>;
    case "SQL":
      return <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke={p} strokeWidth="1.5" fill="rgba(0,97,138,0.1)"/><text x="12" y="16" textAnchor="middle" fill={p} fontSize="10" fontWeight="bold">SQL</text></svg>;
    case "GitHub":
      return <svg viewBox="0 0 24 24" fill="none"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke={p} strokeWidth="1.5"/></svg>;
    case "Linux":
      return <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="6" r="3" stroke={p} strokeWidth="1.5"/><path d="M7 21c0-3 2-6 5-6s5 3 5 6" stroke={p} strokeWidth="1.5" fill="rgba(252,198,36,0.1)"/><path d="M5 15c.3-.8 1.5-2 3-2" stroke={p} strokeWidth="1.5"/><path d="M19 15c-.3-.8-1.5-2-3-2" stroke={p} strokeWidth="1.5"/></svg>;
    case "Node.js":
      return <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke={p} strokeWidth="1.5" fill="rgba(51,153,51,0.1)"/><text x="12" y="16" textAnchor="middle" fill={p} fontSize="8" fontWeight="bold">N</text></svg>;
    case "Next.js":
      return <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="4" fill="#111"/><text x="12" y="16" textAnchor="middle" fill="#E6E9EE" fontSize="9" fontWeight="bold">N</text></svg>;
    case "Git":
      return <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke={p} strokeWidth="1.5" fill="rgba(240,80,50,0.1)"/><text x="12" y="16" textAnchor="middle" fill={p} fontSize="8" fontWeight="bold">G</text></svg>;
    case "Three.js":
      return <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L2 12l10 10 10-10L12 2z" stroke="#049ef4" strokeWidth="1.5" fill="rgba(4,158,244,0.1)"/><text x="12" y="16" textAnchor="middle" fill="#049ef4" fontSize="8" fontWeight="bold">3D</text></svg>;
    default:
      return <svg viewBox="0 0 24 24" fill={p}><circle cx="12" cy="12" r="6"/></svg>;
  }
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Tecnologias</h2>

      <div className="skills-grid">
        {skills.map((s) => (
          <span key={s.name} className="skill-item">
            <span className="skill-icon">
              <Icon name={s.name} color={s.color} />
            </span>
            <span>{s.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
