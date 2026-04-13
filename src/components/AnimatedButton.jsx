export default function AnimatedButton({ text, className = "", onClick, href }) {
  const cls = `group relative overflow-hidden px-7 py-3 rounded-xl 
    transition-all duration-300 ease-in-out hover:scale-[1.04] active:scale-[0.97] 
    font-medium text-sm ${className}`;

  const content = (
    <>
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        {text}
      </span>
      <span className="opacity-0 pointer-events-none">{text}</span>
    </>
  );

  if (href) {
    return <a href={href} className={cls}>{content}</a>;
  }

  return (
    <button onClick={onClick} className={cls}>
      {content}
    </button>
  );
}
