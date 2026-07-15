import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import styles from './Header.module.css';


type UserRole = 'admin' | 'user';

type User = {
    name: string;
    role: UserRole;
}

const navigationLinks = [
  { label: 'Home', path: '/' },
  { label: 'Carrinho', path: '/cart' },
  { label: 'Login', path: '/login' }
];

export function Header() {

    const [searchTerm, setSearchTerm] = useState('');
    //const user: User| null;

    function handleSearch(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        const normalizedSearchTerm = searchTerm.trim().toLowerCase();


        if (!normalizedSearchTerm) {
            return;
        }

        console.log(`Buscando por: ${normalizedSearchTerm}`);
    }


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
                        {link.label}
                    </NavLink>
                ))}
                </nav>
            </div>
        </header>
    );
}