import '../NavBar.css';
import CartWidget from './CartWidget';
function NavBar() {
    return (
        <div>
            <nav className="nav">
                <CartWidget></CartWidget>
                <a href="#" className="nav__brand">New Store </a>
                <ul className="nav__menu">
                    <li className="nav__item"><a href="#" className="nav__link">Inicio</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Tienda</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Sobre nosotros</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar