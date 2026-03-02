import React, { useRef, useEffect, useState } from 'react';
import { useLang } from '../../context/LanguageContext';
import './Clients.css';

/* Import all customer logos */
import c1 from '../../media/customers/Customer_1.jpg';
import c2 from '../../media/customers/Customer_2.jpg';
import c3 from '../../media/customers/Customer_3.jpg';
import c4 from '../../media/customers/Customer_4.jpg';
import c5 from '../../media/customers/Customer_5.jpg';
import c6 from '../../media/customers/Customer_6.jpg';
import c7 from '../../media/customers/Customer_7.jpg';
import c8 from '../../media/customers/Customer_8.jpg';
import c9 from '../../media/customers/Customer_9.jpg';
import c10 from '../../media/customers/Customer_10.jpg';
import c11 from '../../media/customers/Customer_11.jpg';

const LOGOS = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11];

export default function Clients() {
    const { t } = useLang();
    const cl = t.clients;
    const [visible, setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    /* Duplicate for infinite scroll */
    const allLogos = [...LOGOS, ...LOGOS];

    return (
        <section id="clients" className="clients section-pad" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="tag">{cl.tag}</span>
                    <h2>{cl.title}</h2>
                    <div className="divider" />
                    <p>{cl.desc}</p>
                </div>
            </div>

            {/* Infinite marquee */}
            <div className={`clients__track-wrap${visible ? ' visible' : ''}`}>
                <div className="clients__track">
                    {allLogos.map((src, i) => (
                        <div key={i} className="clients__logo">
                            <img src={src} alt={`Client ${(i % LOGOS.length) + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
