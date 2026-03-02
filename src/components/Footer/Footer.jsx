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

/* ── Inline SVG icons ── */
const IconPin = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
);
const IconPhone = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 4.18 2 2 0 015.09 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
);
const IconFax = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
        <polyline points="22 17 17 17 17 21 22 21 22 17" /><rect x="2" y="3" width="15" height="13" rx="1" /><path d="M17 8h5v4h-5" /><line x1="6" y1="8" x2="11" y2="8" /><line x1="6" y1="12" x2="11" y2="12" />
    </svg>
);
const IconMail = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
);

/* Social icons */
const IconFacebook = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
);
const IconTwitter = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
);
const IconInstagram = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);
const IconYoutube = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0d0f14" />
    </svg>
);
const IconLinkedin = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
    </svg>
);

const SOCIALS = [
    { icon: <IconFacebook />, label: 'Facebook', href: '#' },
    { icon: <IconTwitter />, label: 'Twitter', href: '#' },
    { icon: <IconInstagram />, label: 'Instagram', href: '#' },
    { icon: <IconYoutube />, label: 'YouTube', href: '#' },
    { icon: <IconLinkedin />, label: 'LinkedIn', href: '#' },
];

/* Google Maps embed — Riyadh, Saudi Arabia */
const MAP_SRC =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3623.8072608968473!2d46.708988!3d24.7334964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f02f5f42ab93f%3A0x3fac83ad82c7ecb1!2z2LTYsdmD2Kkg2KfYttmI2KfYoSDYp9mE2LnYp9i12YXYqSDZhNmE2YPZh9ix2YjZhdmK2YPYp9mG2YrZg9inIC0g2KfZhNmF2LHZg9iyINin2YTYsdim2YrYs9mK!5e0!3m2!1sen!2sus!4v1772489288721!5m2!1sen!2sus';

export default function Footer() {
    const { t } = useLang();
    const f = t.footer;
    const isAr = t.lang === 'ar';

    return (
        <footer className="footer">
            <div className="footer__top-line" />

            <div className="container footer__grid">

                {/* ── Col 1 · About ── */}
                <div className="footer__brand">
                    <Link to="/" className="footer__logo">
                        <img src={logo} alt="Capital Lights" />
                    </Link>
                    <span>{f.company}</span>
                    <p className="footer__tagline">{f.tagline}</p>
                    <p className="footer__member">
                        <span className="footer__badge-check" />
                        {f.member}
                    </p>
                </div>

                {/* ── Col 2 · HQ & Contact ── */}
                <div className="footer__col">
                    <h4>{f.headquarters}</h4>
                    <ul className="footer__contact-list">
                        <li>
                            <IconPin />
                            <span>{f.address}</span>
                        </li>
                        <li>
                            <IconPhone />
                            {isAr ? (
                                <a href="tel:0114707003" dir="ltr">{f.phone}</a>
                            ) : (
                                <a href="tel:0114707003">{f.phone}</a>
                            )}
                        </li>
                        <li>
                            <IconFax />
                            {isAr ? (
                                <span dir="ltr">{f.fax}</span>
                            ) : (
                                <span>{f.fax}</span>
                            )}
                        </li>
                        <li>
                            <IconMail />
                            <a href={`mailto:${f.email}`}>{f.email}</a>
                        </li>
                    </ul>
                </div>

                {/* ── Col 3 · Quick Links ── */}
                <div className="footer__col">
                    <h4>{f.quickLinks}</h4>
                    <ul className="footer__links-list">
                        {NAV_LINKS.map(({ key, path }) => (
                            <li key={key}>
                                <Link to={path}>
                                    <span className="footer__link-arrow">{isAr ? '‹' : '›'}</span>
                                    {t.nav[key]}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ── Col 4 · Map ── */}
                <div className="footer__col footer__col--map">
                    <h4>{f.location}</h4>
                    <div className="footer__map">
                        <iframe
                            title="Capital Lights Location"
                            src={MAP_SRC}
                            width="100%"
                            height="180"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

            </div>

            {/* ── Bottom bar ── */}
            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <p>{f.rights}</p>
                    <div className="footer__socials">
                        {SOCIALS.map(({ icon, label, href }) => (
                            <a key={label} href={href} className="footer__social-btn" aria-label={label} target="_blank" rel="noopener noreferrer">
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
