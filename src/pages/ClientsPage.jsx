import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import slide5 from '../media/home/Sliders-5.jpg';

export default function ClientsPage() {
    return (
        <div style={{ background: 'var(--bg-dark)', minHeight: '100vh' }}>
            <PageHero
                titleEn="Our Clients"
                titleAr="عملاؤنا"
                subtitleEn="Trusted by leading public and private sector organizations in Saudi Arabia."
                subtitleAr="حظينا بثقة كبرى مؤسسات القطاعين العام والخاص في المملكة."
                bgImage={slide5}
            />
            <div className="container section-pad" style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
                <p style={{ fontSize: '18px' }}>🔧 Full Clients page — coming soon.</p>
            </div>
        </div>
    );
}
