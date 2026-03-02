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

const IconPin = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
);
const IconPhone = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 4.18 2 2 0 015.09 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
);
const IconMail = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
);

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
                        <span className="footer__badge-check" />
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
                            <IconPin />
                            <span>{f.address}</span>
                        </li>
                        <li>
                            <IconPhone />
                            <a href={`tel:${f.phone.replace(/\s/g, '')}`}>{f.phone}</a>
                        </li>
                        <li>
                            <IconMail />
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
