export default function RequestDemoTicker() {
  const items = Array(10).fill("Request a demo");

  return (
    <section className="ticker-wrapper">
      <ul className="ticker-track">
        {[...items, ...items].map((text, i) => (
          <li key={i} className="ticker-item">
            <span>{text}</span>
            <img
              src="/icons/artificial-intelligence.png"
              alt=""
              className="ticker-icon"
              aria-hidden="true"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
