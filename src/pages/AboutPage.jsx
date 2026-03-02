import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import { useLang } from '../context/LanguageContext';
import slide2 from '../media/home/Sliders-2.jpg';

export default function AboutPage() {
    const { t } = useLang();
    return (
        <div style={{ background: 'var(--bg-dark)', minHeight: '100vh' }}>
            <PageHero
                titleEn="About Us"
                titleAr="عن الشركة"
                subtitleEn="Our story, values, and the legacy we've built since 1967."
                subtitleAr="قصتنا وقيمنا والإرث الذي بنيناه منذ عام 1967م."
                bgImage={slide2}
            />
            {/* Full About content coming soon */}
            <div className="container section-pad" style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
                <p style={{ fontSize: '18px' }}>🔧 Full About page — coming soon.</p>
            </div>
        </div>
    );
}
