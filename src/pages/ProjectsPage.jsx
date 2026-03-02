import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import PageHero from '../components/PageHero/PageHero';

/* Images map */
import s1 from '../media/home/Sliders-1.jpg';
import s2 from '../media/home/Sliders-2.jpg';
import s3 from '../media/home/Sliders-3.jpg';
import s4 from '../media/home/Sliders-4.jpg';
import s5 from '../media/home/Sliders-5.jpg';
import g1 from '../media/about/Gallery_1.jpg';
import g2 from '../media/about/Gallery_2.jpg';
import g4 from '../media/about/Gallery_4.jpg';
import heroBg from '../media/home/Sliders-2.jpg';

import '../styles/ProjectsPage.css';

const IMG_MAP = { s1, s2, s3, s4, s5, g1, g2, g4 };

/* Category → accent colour map */
const CAT_COLOR = {
    Electrical: '#cd4c2c',
    Mechanical: '#3b82f6',
    Civil: '#f59e0b',
    'Power Systems': '#8b5cf6',
    Lighting: '#10b981',
    Maintenance: '#6b7280',
};

/* SVG icons */
const IconPin = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>;
const IconCalendar = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
const IconClose = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;

/* Color by category */
const catColor = (cat) => CAT_COLOR[cat] || 'var(--accent)';

/* ── Project Card ── */
function ProjectCard({ project, isAr, onClick, style }) {
    const title = isAr ? project.titleAr : project.titleEn;
    const client = isAr ? project.clientAr : project.clientEn;
    const imgSrc = IMG_MAP[project.img] || s1;
    const color = catColor(project.category);

    return (
        <div className="pp-card" style={style} onClick={() => onClick(project)}>
            <div className="pp-card__img-wrap">
                <img src={imgSrc} alt={title} />
                <div className="pp-card__overlay" />
                <span className="pp-card__cat" style={{ '--cat-color': color }}>
                    {project.category}
                </span>
                <span className="pp-card__value">{project.value}</span>
            </div>
            <div className="pp-card__body">
                <h3>{title}</h3>
                <p className="pp-card__client">{client}</p>
                <div className="pp-card__meta">
                    <span><IconPin /> {project.location}</span>
                    <span><IconCalendar /> {project.year}</span>
                </div>
            </div>
        </div>
    );
}

/* ── Detail Modal ── */
function ProjectModal({ project, isAr, onClose }) {
    if (!project) return null;
    const title = isAr ? project.titleAr : project.titleEn;
    const client = isAr ? project.clientAr : project.clientEn;
    const desc = isAr ? project.descAr : project.descEn;
    const imgSrc = IMG_MAP[project.img] || s1;
    const color = catColor(project.category);

    return (
        <div className="pp-modal-backdrop" onClick={onClose}>
            <div className="pp-modal" onClick={e => e.stopPropagation()}>
                {/* Close */}
                <button className="pp-modal__close" onClick={onClose}><IconClose /></button>
                {/* Image */}
                <div className="pp-modal__img">
                    <img src={imgSrc} alt={title} />
                    <div className="pp-modal__img-overlay" />
                    <span className="pp-modal__cat" style={{ '--cat-color': color }}>{project.category}</span>
                </div>
                {/* Content */}
                <div className="pp-modal__content">
                    <h2>{title}</h2>
                    <div className="pp-modal__meta-grid">
                        <div className="pp-modal__meta-item">
                            <span className="pp-modal__meta-label">{isAr ? 'العميل' : 'Client'}</span>
                            <span className="pp-modal__meta-val">{client}</span>
                        </div>
                        <div className="pp-modal__meta-item">
                            <span className="pp-modal__meta-label">{isAr ? 'الموقع' : 'Location'}</span>
                            <span className="pp-modal__meta-val">{project.location}</span>
                        </div>
                        <div className="pp-modal__meta-item">
                            <span className="pp-modal__meta-label">{isAr ? 'السنة' : 'Year'}</span>
                            <span className="pp-modal__meta-val">{project.year}</span>
                        </div>
                        <div className="pp-modal__meta-item">
                            <span className="pp-modal__meta-label">{isAr ? 'القيمة' : 'Value'}</span>
                            <span className="pp-modal__meta-val" style={{ color: 'var(--accent)', fontWeight: 700 }}>{project.value}</span>
                        </div>
                    </div>
                    <p className="pp-modal__desc">{desc}</p>
                    <Link to="/contact" className="btn-accent pp-modal__cta" onClick={onClose}>
                        {isAr ? 'تواصل معنا ←' : 'Discuss a Similar Project →'}
                    </Link>
                </div>
            </div>
        </div>
    );
}

/* ── Main Page ── */
export default function ProjectsPage() {
    const { t } = useLang();
    const isAr = t.lang === 'ar';
    const pp = t.projectsPage;
    const [active, setActive] = useState('all');
    const [selected, setSelected] = useState(null);

    const filtered = useMemo(() => {
        if (active === 'all') return pp.projects;
        return pp.projects.filter(p => p.category === active);
    }, [active, pp.projects]);

    return (
        <div style={{ background: 'var(--bg-dark)', minHeight: '100vh' }}>
            <PageHero
                titleEn={pp.heroTitle}
                titleAr={pp.heroTitle}
                subtitleEn={pp.heroSubtitle}
                subtitleAr={pp.heroSubtitle}
                bgImage={heroBg}
            />

            {/* Stats strip */}
            <div className="pp-stats">
                <div className="container pp-stats__inner">
                    {pp.stats.map((s, i) => (
                        <div key={i} className="pp-stat">
                            <strong>{s.val}</strong>
                            <span>{s.lab}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Filter tabs */}
            <div className="pp-filters-wrap">
                <div className="container">
                    <div className="pp-filters">
                        <button
                            className={`pp-filter${active === 'all' ? ' active' : ''}`}
                            onClick={() => setActive('all')}
                        >
                            {pp.filterAll}
                            <span className="pp-filter__count">{pp.projects.length}</span>
                        </button>
                        {pp.filters.map(f => {
                            const count = pp.projects.filter(p => p.category === f.key).length;
                            return (
                                <button
                                    key={f.key}
                                    className={`pp-filter${active === f.key ? ' active' : ''}`}
                                    onClick={() => setActive(f.key)}
                                    style={active === f.key ? { '--active-color': CAT_COLOR[f.key] || 'var(--accent)' } : {}}
                                >
                                    {f.label}
                                    <span className="pp-filter__count">{count}</span>
                                </button>
                            );
                        })}

                    </div>
                </div>
            </div>

            {/* Grid */}
            <section className="pp-grid-section section-pad">
                <div className="container">
                    <div className="pp-grid">
                        {filtered.map((project, i) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                isAr={isAr}
                                onClick={setSelected}
                                style={{ '--i': i }}
                            />
                        ))}
                    </div>
                    {filtered.length === 0 && (
                        <div className="pp-empty">
                            <p>{isAr ? 'لا توجد مشاريع في هذه الفئة' : 'No projects in this category yet.'}</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="pp-cta section-pad">
                <div className="container pp-cta__inner">
                    <div>
                        <h2>{isAr ? 'هل لديك مشروع مماثل؟' : 'Have a Similar Project?'}</h2>
                        <p>{isAr ? 'تواصل مع فريقنا لمناقشة احتياجاتك.' : 'Get in touch with our team to discuss your requirements.'}</p>
                    </div>
                    <Link to="/contact" className="btn-accent">{isAr ? 'تواصل معنا →' : 'Contact Us →'}</Link>
                </div>
            </section>

            {/* Modal */}
            {selected && (
                <ProjectModal
                    project={selected}
                    isAr={isAr}
                    onClose={() => setSelected(null)}
                />
            )}
        </div>
    );
}