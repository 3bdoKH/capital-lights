import React, { useRef, useEffect, useState } from 'react';
import { useLang } from '../context/LanguageContext';
import PageHero from '../components/PageHero/PageHero';
import slide2 from '../media/home/Sliders-2.jpg';
import slide3 from '../media/home/Sliders-3.jpg';
import about01 from '../media/about/about01.jpg';
import gallery1 from '../media/about/Gallery_1.jpg';
import gallery2 from '../media/about/Gallery_2.jpg';
import gallery4 from '../media/about/Gallery_4.jpg';
import '../styles/AboutPage.css';

/* ── Reusable fade-in hook ── */
function useFadeIn(threshold = 0.15) {
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

/* ── Company Profile Section ── */
function ProfileSection({ t }) {
    const [ref, visible] = useFadeIn();
    return (
        <section className="about-profile section-pad" ref={ref}>
            <div className="container about-profile__grid">
                {/* Text */}
                <div className={`about-profile__text${visible ? ' visible' : ''}`}>
                    <div className="section-header" style={{ textAlign: t.dir === 'rtl' ? 'right' : 'left' }}>
                        <span className="tag">{t.aboutPage.profileTag}</span>
                        <h2>{t.aboutPage.profileTitle}</h2>
                        <div className="divider divider-left" />
                    </div>
                    <p>{t.aboutPage.profile1}</p>
                    <p>{t.aboutPage.profile2}</p>
                    <p>{t.aboutPage.profile3}</p>
                </div>
                {/* Image */}
                <div className={`about-profile__image${visible ? ' visible' : ''}`}>
                    <div className="about-profile__img-wrap">
                        <img src={about01} alt="Capital Lights project" />
                    </div>
                    <div className="about-profile__img-accent" />
                </div>
            </div>
        </section>
    );
}

/* ── Vision & Mission ── */
function VisionSection({ t }) {
    const [ref, visible] = useFadeIn();
    const isAr = t.lang === 'ar';
    return (
        <section className="about-vision section-pad" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="tag">{t.aboutPage.visionTag}</span>
                    <h2>{t.aboutPage.visionTitle}</h2>
                    <div className="divider" />
                </div>
                <div className={`about-vision__grid${visible ? ' visible' : ''}`}>
                    <div className="about-vision__card">
                        <div className="about-vision__icon">
                            <span>V</span>
                        </div>
                        <h3>{isAr ? 'الرؤية' : 'Vision'}</h3>
                        <p>{t.aboutPage.vision}</p>
                    </div>
                    <div className="about-vision__card about-vision__card--accent">
                        <div className="about-vision__icon about-vision__icon--filled">
                            <span>M</span>
                        </div>
                        <h3>{isAr ? 'الرسالة' : 'Mission'}</h3>
                        <p>{t.aboutPage.mission}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── Timeline ── */
function TimelineSection({ t }) {
    const [ref, visible] = useFadeIn(0.05);
    return (
        <section className="about-timeline section-pad" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="tag">{t.aboutPage.timelineTag}</span>
                    <h2>{t.aboutPage.timelineTitle}</h2>
                    <div className="divider" />
                </div>
                <div className={`about-timeline__track${visible ? ' visible' : ''}`}>
                    {t.aboutPage.milestones.map((m, i) => (
                        <div key={i} className={`about-timeline__item${i % 2 === 0 ? ' left' : ' right'}`} style={{ '--i': i }}>
                            <div className="about-timeline__dot" />
                            <div className="about-timeline__card">
                                <span className="about-timeline__year">{m.year}</span>
                                <h4>{m.labelEn}</h4>
                                <p>{m.descEn}</p>
                            </div>
                        </div>
                    ))}
                    <div className="about-timeline__line" />
                </div>
            </div>
        </section>
    );
}

/* ── Gallery ── */
function GallerySection({ t }) {
    const [ref, visible] = useFadeIn();
    const images = [gallery1, gallery2, gallery4, slide2, slide3, about01];
    return (
        <section className="about-gallery section-pad" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="tag">{t.aboutPage.galleryTag}</span>
                    <h2>{t.aboutPage.galleryTitle}</h2>
                    <div className="divider" />
                </div>
                <div className={`about-gallery__grid${visible ? ' visible' : ''}`}>
                    {images.map((src, i) => (
                        <div key={i} className="about-gallery__item" style={{ '--i': i }}>
                            <img src={src} alt={`Project ${i + 1}`} />
                            <div className="about-gallery__overlay" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── Certifications ── */
function CertSection({ t }) {
    const [ref, visible] = useFadeIn();
    return (
        <section className="about-certs section-pad" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="tag">{t.aboutPage.certTag}</span>
                    <h2>{t.aboutPage.certTitle}</h2>
                    <div className="divider" />
                </div>
                <div className={`about-certs__grid${visible ? ' visible' : ''}`}>
                    {t.aboutPage.certs.map((c, i) => (
                        <div key={i} className="about-certs__card" style={{ '--i': i }}>
                            <div className="about-certs__num">{String(i + 1).padStart(2, '0')}</div>
                            <h4>{c.labelEn}</h4>
                            <p>{c.descEn}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── Main Page ── */
export default function AboutPage() {
    const { t } = useLang();
    return (
        <div style={{ background: 'var(--bg-dark)' }}>
            <PageHero
                titleEn={t.aboutPage.heroTitle}
                titleAr={t.aboutPage.heroTitle}
                subtitleEn={t.aboutPage.heroSubtitle}
                subtitleAr={t.aboutPage.heroSubtitle}
                bgImage={slide2}
            />
            <ProfileSection t={t} />
            <VisionSection t={t} />
            <TimelineSection t={t} />
            <GallerySection t={t} />
            <CertSection t={t} />
        </div>
    );
}