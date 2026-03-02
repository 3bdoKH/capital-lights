import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import slide3 from '../media/home/Sliders-3.jpg';

export default function ServicesPage() {
    return (
        <div style={{ background: 'var(--bg-dark)', minHeight: '100vh' }}>
            <PageHero
                titleEn="Our Services"
                titleAr="خدماتنا"
                subtitleEn="Comprehensive electromechanical and civil contracting services."
                subtitleAr="خدمات مقاولات كهروميكانيكية ومدنية متكاملة."
                bgImage={slide3}
            />
            <div className="container section-pad" style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
                <p style={{ fontSize: '18px' }}>🔧 Full Services page — coming soon.</p>
            </div>
        </div>
    );
}
