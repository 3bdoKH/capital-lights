import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import logo from '../../media/MLogo.png';
import './Navbar.css';

const NAV_LINKS = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'services', path: '/services' },
    { key: 'projects', path: '/projects' },
    { key: 'clients', path: '/clients' },
    { key: 'contact', path: '/contact' },
];

export default function Navbar() {
    const { t, toggle } = useLang();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (!menuOpen) return;
        const close = () => setMenuOpen(false);
        document.addEventListener('click', close);
        return () => document.removeEventListener('click', close);
    }, [menuOpen]);

    const handleMenuClick = (e) => {
        e.stopPropagation();
        setMenuOpen(v => !v);
    };

    return (
        <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">

                {/* Logo */}
                <Link to="/" className="navbar__logo">
                    <img src={logo} alt="Capital Lights Logo" />
                    <span className="navbar__logo-text">
                        {t.lang === 'ar' ? 'أضواء العاصمة' : 'Capital Lights'}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <ul className="navbar__links">
                    {NAV_LINKS.map(({ key, path }) => (
                        <li key={key}>
                            <NavLink
                                to={path}
                                end={path === '/'}
                                className={({ isActive }) =>
                                    `navbar__link${isActive ? ' navbar__link--active' : ''}`
                                }
                            >
                                {t.nav[key]}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className="navbar__actions">
                    {/* Search icon */}
                    <button
                        className="navbar__icon-btn"
                        onClick={() => navigate('/search')}
                        aria-label="Search"
                    >
                        🔍
                    </button>
                    <button className="navbar__lang" onClick={toggle}>
                        {t.nav.toggle}
                    </button>
                    <Link to="/contact" className="btn-accent navbar__cta">
                        {t.nav.contact}
                    </Link>
                    {/* Hamburger */}
                    <button
                        className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
                        onClick={handleMenuClick}
                        aria-label="Toggle menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar__mobile${menuOpen ? ' open' : ''}`}>
                {NAV_LINKS.map(({ key, path }) => (
                    <NavLink
                        key={key}
                        to={path}
                        end={path === '/'}
                        className={({ isActive }) =>
                            `navbar__mobile-link${isActive ? ' active' : ''}`
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        {t.nav[key]}
                    </NavLink>
                ))}
                <button
                    className="navbar__lang navbar__lang--mobile"
                    onClick={() => { toggle(); setMenuOpen(false); }}
                >
                    {t.nav.toggle}
                </button>
            </div>
        </nav>
    );
}
