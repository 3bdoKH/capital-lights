import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import PageHero from '../components/PageHero/PageHero';
import slide5 from '../media/home/Sliders-5.jpg';

/* logos */
import c1 from '../media/customers/Customer_1.jpg';
import c2 from '../media/customers/Customer_2.jpg';
import c3 from '../media/customers/Customer_3.jpg';
import c4 from '../media/customers/Customer_4.jpg';
import c5 from '../media/customers/Customer_5.jpg';
import c6 from '../media/customers/Customer_6.jpg';
import c7 from '../media/customers/Customer_7.jpg';
import c8 from '../media/customers/Customer_8.jpg';
import c9 from '../media/customers/Customer_9.jpg';
import c10 from '../media/customers/Customer_10.jpg';
import c11 from '../media/customers/Customer_11.jpg';

import '../styles/ClientsPage.css';

const LOGOS = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11];

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

/* ── Intro strip ── */
function IntroSection({ t }) {
    const [ref, visible] = useFadeIn();
    const cp = t.clientsPage;
    return (
        <section className="cp-intro section-pad" ref={ref}>
            <div className={`container cp-intro__inner${visible ? ' visible' : ''}`}>
                <div className="section-header">
                    <span className="tag">{cp.introTag}</span>
                    <h2>{cp.introTitle}</h2>
                    <div className="divider" />
                    <p className="cp-intro__desc">{cp.introDesc}</p>
                </div>
            </div>
        </section>
    );
}

/* ── Logo grid ── */
function LogoGrid({ t }) {
    const [ref, visible] = useFadeIn(0.05);
    const cp = t.clientsPage;
    const isAr = t.lang === 'ar';
    return (
        <section className="cp-logos section-pad" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="tag">{cp.logosTag}</span>
                    <h2>{cp.logosTitle}</h2>
                    <div className="divider" />
                </div>
                <div className={`cp-logos__grid${visible ? ' visible' : ''}`}>
                    {LOGOS.map((src, i) => {
                        const client = cp.clients[i];
                        return (
                            <div key={i} className="cp-logo-card" style={{ '--i': i }}>
                                <div className="cp-logo-card__img-wrap">
                                    <img src={src} alt={client ? (isAr ? client.nameAr : client.nameEn) : `Client ${i + 1}`} />
                                </div>
                                {client && (
                                    <p className="cp-logo-card__name">
                                        {isAr ? client.nameAr : client.nameEn}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ── Trust pillars ── */
function TrustSection({ t }) {
    const [ref, visible] = useFadeIn();
    const cp = t.clientsPage;
    return (
        <section className="cp-trust section-pad" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="tag">{cp.trustTag}</span>
                    <h2>{cp.trustTitle}</h2>
                    <div className="divider" />
                </div>
                <div className={`cp-trust__grid${visible ? ' visible' : ''}`}>
                    {cp.pillars.map((p, i) => (
                        <div key={i} className="cp-pillar" style={{ '--i': i }}>
                            <div className="cp-pillar__code">{p.code}</div>
                            <h4>{p.labelEn}</h4>
                            <p>{p.descEn}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── CTA ── */
function CTASection({ t }) {
    const [ref, visible] = useFadeIn();
    return (
        <section className="cp-cta section-pad" ref={ref}>
            <div className={`container cp-cta__inner${visible ? ' visible' : ''}`}>
                <div>
                    <h2>{t.lang === 'ar' ? 'هل أنت مستعد للانضمام لعملائنا؟' : 'Ready to Become Our Next Client?'}</h2>
                    <p>{t.lang === 'ar' ? 'تواصل مع فريقنا اليوم لمناقشة متطلبات مشروعك.' : 'Get in touch with our team today to discuss your project requirements.'}</p>
                </div>
                <Link to="/contact" className="btn-accent cp-cta__btn">
                    {t.lang === 'ar' ? 'تواصل معنا →' : 'Contact Us →'}
                </Link>
            </div>
        </section>
    );
}

export default function ClientsPage() {
    const { t } = useLang();
    return (
        <div style={{ background: 'var(--bg-dark)', minHeight: '100vh' }}>
            <PageHero
                titleEn={t.clientsPage.heroTitle}
                titleAr={t.clientsPage.heroTitle}
                subtitleEn={t.clientsPage.heroSubtitle}
                subtitleAr={t.clientsPage.heroSubtitle}
                bgImage={slide5}
            />
            <IntroSection t={t} />
            <LogoGrid t={t} />
            <TrustSection t={t} />
            <CTASection t={t} />
        </div>
    );
}