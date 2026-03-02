import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import slide4 from '../media/home/Sliders-4.jpg';

export default function ProjectsPage() {
    return (
        <div style={{ background: 'var(--bg-dark)', minHeight: '100vh' }}>
            <PageHero
                titleEn="Our Projects"
                titleAr="مشاريعنا"
                subtitleEn="A portfolio of landmark electromechanical projects across the Kingdom."
                subtitleAr="معرض مشاريعنا الكهروميكانيكية البارزة في أرجاء المملكة."
                bgImage={slide4}
            />
            <div className="container section-pad" style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
                <p style={{ fontSize: '18px' }}>🔧 Full Projects page — coming soon.</p>
            </div>
        </div>
    );
}