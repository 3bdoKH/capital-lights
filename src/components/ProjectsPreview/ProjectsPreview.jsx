import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import g1 from '../../media/about/Gallery_1.jpg';
import g2 from '../../media/about/Gallery_2.jpg';
import g3 from '../../media/about/Gallery_4.jpg';
import g4 from '../../media/home/Sliders-1.jpg';
import g5 from '../../media/home/Sliders-3.jpg';
import g6 from '../../media/home/Sliders-4.jpg';
import './ProjectsPreview.css';

const PROJECTS = [
    { img: g1, cat: 'Electrical', catAr: 'كهربائي', titleEn: 'High Voltage Substation', titleAr: 'محطة جهد عالٍ', locEn: 'Riyadh', locAr: 'الرياض', valEn: 'SR 45M', valAr: '45 مليون ريال' },
    { img: g2, cat: 'Civil', catAr: 'مدني', titleEn: 'Power Distribution Hub', titleAr: 'مركز توزيع طاقة', locEn: 'Jeddah', locAr: 'جدة', valEn: 'SR 32M', valAr: '32 مليون ريال' },
    { img: g3, cat: 'Mechanical', catAr: 'ميكانيكي', titleEn: 'Industrial HVAC Complex', titleAr: 'منشأة تكييف صناعية', locEn: 'Dammam', locAr: 'الدمام', valEn: 'SR 28M', valAr: '28 مليون ريال' },
    { img: g4, cat: 'Lighting', catAr: 'إضاءة', titleEn: 'Smart Street Lighting', titleAr: 'إنارة طرق ذكية', locEn: 'Medina', locAr: 'المدينة', valEn: 'SR 18M', valAr: '18 مليون ريال' },
    { img: g5, cat: 'Electrical', catAr: 'كهربائي', titleEn: 'Switchgear Installation', titleAr: 'تركيب لوحات توزيع', locEn: 'Mecca', locAr: 'مكة المكرمة', valEn: 'SR 22M', valAr: '22 مليون ريال' },
    { img: g6, cat: 'Civil', catAr: 'مدني', titleEn: 'Cable Network Upgrade', titleAr: 'ترقية شبكة الكابلات', locEn: 'Riyadh', locAr: 'الرياض', valEn: 'SR 15M', valAr: '15 مليون ريال' },
];

export default function ProjectsPreview() {
    const { t } = useLang();
    const p = t.projects;
    const isAr = t.lang === 'ar';
    const [visible, setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.1 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section id="projects" className="projects-preview section-pad" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="tag">{p.tag}</span>
                    <h2>{p.title}</h2>
                    <div className="divider" />
                    <span className="section-header__desc">{p.desc}</span>
                </div>

                <div className={`projects-preview__grid${visible ? ' visible' : ''}`}>
                    {PROJECTS.map((proj, i) => (
                        <div key={i} className="project-card" style={{ '--i': i }}>
                            <div className="project-card__img-wrap">
                                <img src={proj.img} alt={isAr ? proj.titleAr : proj.titleEn} />
                                <span className="project-card__cat">{isAr ? proj.catAr : proj.cat}</span>
                            </div>
                            <div className="project-card__info">
                                <h3>{isAr ? proj.titleAr : proj.titleEn}</h3>
                                <div className="project-card__meta">
                                    <span className="project-card__loc">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                        {isAr ? proj.locAr : proj.locEn}
                                    </span>
                                    <span className="project-card__val">{isAr ? proj.valAr : proj.valEn}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-preview__cta">
                    <Link to="/projects" className="btn-accent">{p.cta}</Link>
                </div>
            </div>
        </section>
    );
}
