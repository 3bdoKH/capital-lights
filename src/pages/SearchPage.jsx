import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import { useLang } from '../context/LanguageContext';

export default function SearchPage() {
    const { t } = useLang();
    return (
        <div style={{ background: 'var(--bg-dark)', minHeight: '100vh' }}>
            <PageHero
                titleEn="Search Results"
                titleAr="نتائج البحث"
                subtitleEn="Find projects, services, and more."
                subtitleAr="ابحث في المشاريع والخدمات والمزيد."
            />
            <div className="container section-pad" style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
                <p style={{ fontSize: '18px' }}>🔧 Search results page — coming soon.</p>
            </div>
        </div>
    );
}
