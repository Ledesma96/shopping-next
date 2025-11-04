import Image from "next/image";
import "./categories.scss";

const categories = [
  { name: "Celulares", icon: "/images/celulares.png" },
  { name: "Moda", icon: "/images/moda.png" },
  { name: "Hogar", icon: "/images/hogar.png" },
  { name: "Juguetes", icon: "/images/juguetes.png!w700wp" },
  { name: "Deportes", icon: "/images/deporte.png" },
  { name: "Belleza", icon: "/images/belleza.webp" },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories__scroll">
        {categories.map((cat) => (
          <div key={cat.name} className="categories__card">
            <div className="circle">
              <div className="categories__circle">
                <Image
                  src={cat.icon}
                  alt={cat.name}
                  fill
                  sizes="70px"
                  className="categories__image"
                />
              </div>
            </div>
            <p className="categories__label">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
