import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import logo from '../../media/MLogo.png';
import './Footer.css';

const NAV_LINKS = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'services', path: '/services' },
    { key: 'projects', path: '/projects' },
    { key: 'clients', path: '/clients' },
    { key: 'contact', path: '/contact' },
];

export default function Footer() {
    const { t } = useLang();
    const f = t.footer;

    return (
        <footer className="footer">
            <div className="footer__top-line" />

            <div className="container footer__grid">
                {/* Brand */}
                <div className="footer__brand">
                    <Link to="/" className="footer__logo">
                        <img src={logo} alt="Capital Lights" />
                        <span>{f.company}</span>
                    </Link>
                    <p className="footer__tagline">{f.tagline}</p>
                    <p className="footer__member">
                        <span className="footer__badge">✔</span>
                        {f.member}
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer__col">
                    <h4>{f.quickLinks}</h4>
                    <ul>
                        {NAV_LINKS.map(({ key, path }) => (
                            <li key={key}>
                                <Link to={path}>{t.nav[key]}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer__col">
                    <h4>{f.contact}</h4>
                    <ul className="footer__contact-list">
                        <li>
                            <span>📍</span>
                            <span>{f.address}</span>
                        </li>
                        <li>
                            <span>📞</span>
                            <a href={`tel:${f.phone.replace(/\s/g, '')}`}>{f.phone}</a>
                        </li>
                        <li>
                            <span>✉️</span>
                            <a href={`mailto:${f.email}`}>{f.email}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <p>{f.rights}</p>
                </div>
            </div>
        </footer>
    );
}
