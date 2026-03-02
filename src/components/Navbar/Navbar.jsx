import React, { useState, useEffect, useRef } from 'react';
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
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchVal, setSearchVal] = useState('');
    const searchInputRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* Close mobile menu on outside click */
    useEffect(() => {
        if (!menuOpen) return;
        const close = () => setMenuOpen(false);
        document.addEventListener('click', close);
        return () => document.removeEventListener('click', close);
    }, [menuOpen]);

    /* Focus input when search opens */
    useEffect(() => {
        if (searchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [searchOpen]);

    const handleMenuClick = (e) => {
        e.stopPropagation();
        setMenuOpen(v => !v);
    };

    const openSearch = () => { setSearchOpen(true); setMenuOpen(false); };
    const closeSearch = () => { setSearchOpen(false); setSearchVal(''); };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const q = searchVal.trim();
        if (q.length >= 1) {
            navigate(`/search?q=${encodeURIComponent(q)}`);
            closeSearch();
        }
    };

    return (
        <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">

                {/* Logo */}
                <Link to="/" className="navbar__logo">
                    <img src={logo} alt="Capital Lights Logo" />
                </Link>

                {/* Desktop Nav — hide when search open */}
                {!searchOpen && (
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
                )}

                {/* Inline search bar (when open) */}
                {searchOpen && (
                    <form className="navbar__search-bar" onSubmit={handleSearchSubmit}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"
                            className="navbar__search-ico">
                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            ref={searchInputRef}
                            type="search"
                            value={searchVal}
                            onChange={e => setSearchVal(e.target.value)}
                            placeholder={t.lang === 'ar' ? 'ابحث…' : 'Search…'}
                            className="navbar__search-input"
                        />
                        <button type="submit" className="navbar__search-go">
                            {t.lang === 'ar' ? 'بحث' : 'Go'}
                        </button>
                        <button type="button" className="navbar__search-close" onClick={closeSearch}>
                            ×
                        </button>
                    </form>
                )}

                {/* Actions */}
                <div className="navbar__actions">
                    {/* Search icon */}
                    <button
                        className={`navbar__icon-btn${searchOpen ? ' active' : ''}`}
                        onClick={searchOpen ? closeSearch : openSearch}
                        aria-label="Search"
                    >
                        {searchOpen ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        )}
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
                {/* Mobile search */}
                <form className="navbar__mobile-search" onSubmit={(e) => {
                    e.preventDefault();
                    const q = e.target.search.value.trim();
                    if (q) { navigate(`/search?q=${encodeURIComponent(q)}`); setMenuOpen(false); }
                }}>
                    <input
                        name="search"
                        type="search"
                        placeholder={t.lang === 'ar' ? 'ابحث…' : 'Search…'}
                        className="navbar__mobile-search-input"
                    />
                    <button type="submit" className="navbar__mobile-search-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </button>
                </form>
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
