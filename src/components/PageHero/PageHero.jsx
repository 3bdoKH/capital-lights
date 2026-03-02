import React from 'react';
import { useLang } from '../../context/LanguageContext';
import './PageHero.css';

/**
 * Reusable page hero / banner used on all inner pages.
 * Props: titleEn, titleAr, subtitleEn, subtitleAr, bgImage (optional)
 */
export default function PageHero({ titleEn, titleAr, subtitleEn, subtitleAr, bgImage }) {
    const { t } = useLang();
    const isAr = t.lang === 'ar';

    return (
        <section
            className="page-hero"
            style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
        >
            <div className="page-hero__overlay" />
            <div className="container page-hero__content">
                {/* Breadcrumb */}
                <div className="page-hero__breadcrumb">
                    <a href="/">{isAr ? 'الرئيسية' : 'Home'}</a>
                    <span>/</span>
                    <span>{isAr ? titleAr : titleEn}</span>
                </div>
                <h1>{isAr ? titleAr : titleEn}</h1>
                {(subtitleEn || subtitleAr) && (
                    <p>{isAr ? subtitleAr : subtitleEn}</p>
                )}
            </div>
        </section>
    );
}
