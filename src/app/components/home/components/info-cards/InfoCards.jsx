import "./infoCards.scss";
import Image from "next/image";

export default function InfoCards() {
    return (
        <section className="promoCards">
            <div className="promoCards__grid">

                {/* Card 1 */}
                <div className="promoCards__card">
                    <Image
                        src="/images/envios.jpg"
                        alt="Envíos a todo el país"
                        fill
                        className="promoCards__img"
                    />

                    <div className="promoCards__overlay">
                        <h3>Envíos a todo el país</h3>
                        <p>Comprá y recibí sin importar dónde estés.</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="promoCards__card">
                    <Image
                        src="/images/seguridad.jpg"
                        alt="Pagos 100% seguros"
                        fill
                        className="promoCards__img"
                    />

                    <div className="promoCards__overlay">
                        <h3>Pagos 100% seguros</h3>
                        <p>Protección total en todas tus compras.</p>
                    </div>
                </div>

                {/* Card 3 – Full width on second row */}
                <div className="promoCards__card promoCards__card--large">
                    <Image
                        src="/images/soporte.jpg"
                        alt="Atención personalizada"
                        fill
                        className="promoCards__img"
                    />

                    <div className="promoCards__overlay">
                        <h3>Atención personalizada</h3>
                        <p>Estamos disponibles las 24 horas para ayudarte.</p>
                    </div>
                </div>

            </div>
        </section>
    );
    }
