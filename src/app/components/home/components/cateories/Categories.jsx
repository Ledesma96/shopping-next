import "./categories.scss";

const categories = [
  { name: "Electrónica", icon: "📱" },
  { name: "Moda", icon: "👗" },
  { name: "Hogar", icon: "🏠" },
  { name: "Juguetes", icon: "🧸" },
  { name: "Deportes", icon: "🏀" },
  { name: "Belleza", icon: "💄" },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories__grid">
        {categories.map((cat) => (
          <div key={cat.name} className="categories__card">
            <div className="categories__icon">{cat.icon}</div>
            <span className="categories__label">{cat.name}</span>
          </div>
        ))}
        <div className="categories__card categories__card--explore">
          <div className="categories__icon">🔎</div>
          <span className="categories__label">Explorar más</span>
        </div>
      </div>
    </section>
  );
}
