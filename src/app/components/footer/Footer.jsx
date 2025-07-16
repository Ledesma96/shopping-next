import './footer.scss';

const Footer = () => (
    <footer className="footer">
        <div className="footer__top">
            <div className="footer__section">
                <h4 className="footer__title">Acerca de nosotros</h4>
                <ul className="footer__list">
                <li><a href="#">Quiénes somos</a></li>
                <li><a href="#">Trabaja con nosotros</a></li>
                <li><a href="#">Términos y condiciones</a></li>
                <li><a href="#">Política de privacidad</a></li>
                </ul>
            </div>

            <div className="footer__section">
                <h4 className="footer__title">Ayuda</h4>
                <ul className="footer__list">
                <li><a href="#">Cómo comprar</a></li>
                <li><a href="#">Preguntas frecuentes</a></li>
                <li><a href="#">Devoluciones</a></li>
                <li><a href="#">Soporte técnico</a></li>
                </ul>
            </div>

            <div className="footer__section">
                <h4 className="footer__title">Redes sociales</h4>
                <div className="footer__socials">
                    <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                </div>
            </div>

            <div className="footer__section">
                <h4 className="footer__title">Suscríbete</h4>
                <p className="footer__text">Recibe nuestras ofertas y novedades</p>
                <form className="footer__form">
                <input type="email" placeholder="Tu correo electrónico" />
                <button type="submit">Suscribirse</button>
                </form>
            </div>
            </div>

            <div className="footer__bottom">
            <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
        </div>
    </footer>
);

export default Footer;
