import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import about01 from '../../media/about/about01.jpg';
import gallery1 from '../../media/about/Gallery_1.jpg';
import gallery2 from '../../media/about/Gallery_2.jpg';
import './AboutSnapshot.css';

function CountUp({ end, suffix = '' }) {
    const [val, setVal] = useState(0);
    const ref = useRef();
    useEffect(() => {
        const num = parseInt(end.replace(/\D/g, ''), 10) || 0;
        let start = 0;
        const step = Math.ceil(num / 60);
        const timer = setInterval(() => {
            start += step;
            if (start >= num) { setVal(num); clearInterval(timer); }
            else setVal(start);
        }, 25);
        return () => clearInterval(timer);
    }, [end]);
    const display = end.includes('+') ? `${val}+` : end.includes('M') ? `${val}M+` : `${val}`;
    return <span ref={ref}>{display.includes('NaN') ? end : display}{suffix}</span>;
}

export default function AboutSnapshot() {
    const { t } = useLang();
    const a = t.about;
    const [visible, setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.2 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    const stats = [
        { val: a.stat1val, lab: a.stat1lab },
        { val: a.stat2val, lab: a.stat2lab },
        { val: a.stat3val, lab: a.stat3lab },
        { val: a.stat4val, lab: a.stat4lab },
    ];

    return (
        <section id="about" className="about-snap section-pad" ref={ref}>
            <div className="container about-snap__grid">
                {/* ── Images side ── */}
                <div className={`about-snap__media${visible ? ' visible' : ''}`}>
                    <div className="about-snap__img-main">
                        <img src={about01} alt="Capital Lights project" />
                    </div>
                    <div className="about-snap__img-stack">
                        <img src={gallery1} alt="Gallery 1" />
                        <img src={gallery2} alt="Gallery 2" />
                    </div>
                    <div className="about-snap__badge-float">
                        <span className="about-snap__badge-num">57+</span>
                        <span className="about-snap__badge-lab">
                            {t.lang === 'ar' ? 'عاماً من التميز' : 'Years of Excellence'}
                        </span>
                    </div>
                </div>

                {/* ── Text side ── */}
                <div className={`about-snap__content${visible ? ' visible' : ''}`}>
                    <div className="section-header" style={{ textAlign: t.dir === 'rtl' ? 'right' : 'left' }}>
                        <span className="tag">{a.tag}</span>
                        <h2>{a.title}</h2>
                        <div className="divider divider-left" />
                    </div>
                    <p className="about-snap__body">{a.body}</p>
                    <Link to="/about" className="btn-accent">{a.cta}</Link>

                    {/* Stats grid */}
                    <div className="about-snap__stats">
                        {stats.map((s, i) => (
                            <div key={i} className="about-snap__stat">
                                <strong>
                                    {visible ? <CountUp end={s.val} /> : '0'}
                                </strong>
                                <span>{s.lab}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
