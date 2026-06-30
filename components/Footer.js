export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "24px",
        textAlign: "center",
        fontSize: 13,
        color: "var(--muted)",
        fontFamily: "var(--font-mono)",
      }}
    >
      <pre
        style={{
          marginBottom: 12,
          lineHeight: 1.2,
          fontSize: 11,
          color: "#333",
        }}
      >
        {` _   _      _ _        __        __         _     _ _ 
| | | | ___| | | ___   \\ \\      / /__  _ __| | __| | |
| |_| |/ _ \\ | |/ _ \\   \\ \\ /\\ / / _ \\| '__| |/ _\` | |
|  _  |  __/ | | (_) |   \\ V  V / (_) | |  | | (_| |_|
|_| |_|\\___|_|_|\\___/     \\_/\\_/ \\___/|_|  |_|\\__,_(_)`}
      </pre>
      <p>Victor Uceda &mdash; 2026</p>
    </footer>
  );
}
