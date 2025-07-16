import React from 'react';
import './page.scss';

const page = () => {
    return (
        <section className="help-center">
            <h4>Centro de ayuda</h4>
            <input
                type="text"
                placeholder="¿En qué podemos ayudarte?"
                className="search-input"
            />

            <div className="categories">
                <h5>Categorías</h5>
                <ul>
                    <li>Compras y pedidos</li>
                    <li>Pagos y facturación</li>
                    <li>Envíos y entregas</li>
                    <li>Devoluciones y reembolsos</li>
                    <li>Cuenta y seguridad</li>
                    <li>Vender productos</li>
                </ul>
            </div>

            <div className="contact-support">
                <h5>¿Necesitás más ayuda?</h5>
                <button>Contactar soporte</button>
            </div>
        </section>
    );
};

export default page;
