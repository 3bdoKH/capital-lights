import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import PageHero from '../components/PageHero/PageHero';
import slide3 from '../media/home/Sliders-3.jpg';
import '../styles/ServicesPage.css';

function useFadeIn(threshold = 0.1) {
    const ref = useRef();
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, visible];
}

/* ── Check mark SVG ── */
const Check = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

/* ── Single service card ── */
function ServiceCard({ svc, index }) {
    const [ref, visible] = useFadeIn(0.08);
    return (
        <div
            ref={ref}
            className={`sp-card${visible ? ' sp-card--visible' : ''}`}
            style={{ '--i': index }}
        >
            <div className="sp-card__header">
                <div className="sp-card__badge">{svc.code}</div>
                <h3>{svc.title}</h3>
            </div>
            <p className="sp-card__desc">{svc.desc}</p>
            <ul className="sp-card__bullets">
                {svc.bullets.map((b, i) => (
                    <li key={i}>
                        <span className="sp-card__check"><Check /></span>
                        {b}
                    </li>
                ))}
            </ul>
            <div className="sp-card__line" />
        </div>
    );
}

/* ── Page ── */
export default function ServicesPage() {
    const { t } = useLang();
    const sp = t.servicesPage;
    const [introRef, introVisible] = useFadeIn();
    const [ctaRef, ctaVisible] = useFadeIn();

    return (
        <div style={{ background: 'var(--bg-dark)', minHeight: '100vh' }}>

            {/* Hero */}
            <PageHero
                titleEn={sp.heroTitle}
                titleAr={sp.heroTitle}
                subtitleEn={sp.heroSubtitle}
                subtitleAr={sp.heroSubtitle}
                bgImage={slide3}
            />

            {/* Intro */}
            <section className="sp-intro section-pad" ref={introRef}>
                <div className={`container sp-intro__inner${introVisible ? ' visible' : ''}`}>
                    <div className="section-header">
                        <span className="tag">{sp.introTag}</span>
                        <h2>{sp.introTitle}</h2>
                        <div className="divider" />
                        <p className="sp-intro__desc">{sp.introDesc}</p>
                    </div>
                    <div className="sp-stats">
                        <div className="sp-stat">
                            <strong>8</strong>
                            <span>{t.lang === 'ar' ? 'تخصصات خدمية' : 'Service Disciplines'}</span>
                        </div>
                        <div className="sp-stat">
                            <strong>57+</strong>
                            <span>{t.lang === 'ar' ? 'عاماً من الخبرة' : 'Years Experience'}</span>
                        </div>
                        <div className="sp-stat">
                            <strong>I</strong>
                            <span>{t.lang === 'ar' ? 'درجة التصنيف' : 'Classification Grade'}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services grid */}
            <section className="sp-grid-section section-pad">
                <div className="container">
                    <div className="sp-grid">
                        {sp.services.map((svc, i) => (
                            <ServiceCard key={svc.code} svc={svc} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="sp-cta section-pad" ref={ctaRef}>
                <div className={`container sp-cta__inner${ctaVisible ? ' visible' : ''}`}>
                    <div className="sp-cta__text">
                        <h2>{sp.ctaTitle}</h2>
                        <p>{sp.ctaDesc}</p>
                    </div>
                    <Link to="/contact" className="btn-accent sp-cta__btn">{sp.ctaBtn} →</Link>
                </div>
            </section>

        </div>
    );
}