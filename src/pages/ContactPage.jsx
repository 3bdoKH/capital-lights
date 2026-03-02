import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import slide1 from '../media/home/Sliders-1.jpg';

export default function ContactPage() {
    return (
        <div style={{ background: 'var(--bg-dark)', minHeight: '100vh' }}>
            <PageHero
                titleEn="Contact Us"
                titleAr="تواصل معنا"
                subtitleEn="We'd love to hear from you. Get in touch with our team."
                subtitleAr="يسعدنا التواصل معكم. تواصل مع فريقنا."
                bgImage={slide1}
            />
            <div className="container section-pad" style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
                <p style={{ fontSize: '18px' }}>🔧 Full Contact page — coming soon.</p>
            </div>
        </div>
    );
}
