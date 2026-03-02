import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import './Services.css';

export default function Services() {
    const { t } = useLang();
    const s = t.services;
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
        <section id="services" className="services section-pad" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="tag">{s.tag}</span>
                    <h2>{s.title}</h2>
                    <div className="divider" />
                    <p>{s.desc}</p>
                </div>

                <div className={`services__grid${visible ? ' visible' : ''}`}>
                    {s.items.map((item, i) => (
                        <div key={i} className="service-card" style={{ '--i': i }}>
                            <div className="service-card__icon">
                                <span>{item.icon}</span>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <div className="service-card__line" />
                        </div>
                    ))}
                </div>

                <div className="services__cta">
                    <Link to="/services" className="btn-outline">{s.cta} →</Link>
                </div>
            </div>
        </section>
    );
}
