import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                
                <Link to="/" className={styles.logo} aria-label='CoffeShop'>
                    CoffeeShop
                </Link>

                <nav className='styles.navigation' aria-label='Main Navigation'>{navigationLinks.map((link) => (
                    <NavLink
                        key = {link.path}
                        to = {link.path}
                        className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                    >
                        {link.name}
                    </NavLink>
                ))}
                </nav>
            </div>
        </header>
    );
}