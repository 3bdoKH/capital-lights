import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import './CTABanner.css';

export default function CTABanner() {
    const { t } = useLang();
    const c = t.cta;

    return (
        <section className="cta-banner">
            <div className="cta-banner__glow" />
            <div className="container cta-banner__inner">
                <div className="cta-banner__text">
                    <h2>{c.title}</h2>
                    <p>{c.desc}</p>
                </div>
                <Link to="/contact" className="btn-accent cta-banner__btn">{c.btn} →</Link>
            </div>
        </section>
    );
}
