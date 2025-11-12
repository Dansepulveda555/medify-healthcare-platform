export default function LustreText({ text, className = "" }) {
  return (
    <span className={`lustre-text lustre-dark ${className}`}>
      {text}
    </span>
  );
}
