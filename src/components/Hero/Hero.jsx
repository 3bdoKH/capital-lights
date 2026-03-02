import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import './Hero.css';

import slide1 from '../../media/home/Sliders-1.jpg';
import slide2 from '../../media/home/Sliders-2.jpg';
import slide3 from '../../media/home/Sliders-3.jpg';
import slide4 from '../../media/home/Sliders-4.jpg';
import slide5 from '../../media/home/Sliders-5.jpg';

const IMAGES = [slide1, slide2, slide3, slide4, slide5];
const SLIDE_KEYS = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'];

export default function Hero() {
    const { t } = useLang();
    const h = t.hero;
    const [active, setActive] = useState(0);
    const [animKey, setAnimKey] = useState(0);
    const timerRef = useRef(null);

    const goTo = (idx) => {
        setActive(idx);
        setAnimKey(k => k + 1);
        clearInterval(timerRef.current);
        timerRef.current = setInterval(advance, 5500);
    };

    const advance = () => {
        setActive(prev => {
            const next = (prev + 1) % IMAGES.length;
            setAnimKey(k => k + 1);
            return next;
        });
    };

    useEffect(() => {
        timerRef.current = setInterval(advance, 5500);
        return () => clearInterval(timerRef.current);
    }, []);

    const slide = h[SLIDE_KEYS[active]];

    return (
        <section id="home" className="hero">
            {/* Slides */}
            {IMAGES.map((src, i) => (
                <div
                    key={i}
                    className={`hero__slide${i === active ? ' active' : ''}`}
                    style={{ backgroundImage: `url(${src})` }}
                />
            ))}

            {/* Overlay */}
            <div className="hero__overlay" />

            {/* Content */}
            <div className="container hero__content">
                <div key={animKey} className="hero__text">
                    <span className="hero__badge">{h.badge}</span>
                    <h1 className="hero__title">{slide.title}</h1>
                    <p className="hero__subtitle">{slide.subtitle}</p>
                    <div className="hero__actions">
                        <Link to="/projects" className="btn-accent">{h.cta}</Link>
                        <Link to="/about" className="btn-outline">{h.learnMore}</Link>
                    </div>
                </div>
            </div>

            {/* Dots / Indicators */}
            <div className="hero__indicators">
                {IMAGES.map((_, i) => (
                    <button
                        key={i}
                        className={`hero__dot${i === active ? ' active' : ''}`}
                        onClick={() => goTo(i)}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Progress bar */}
            <div className="hero__progress">
                <div key={`prog-${active}`} className="hero__progress-bar" />
            </div>

            {/* Scroll hint */}
            <div className="hero__scroll-hint">
                <span className="hero__scroll-arrow" />
            </div>
        </section>
    );
}
