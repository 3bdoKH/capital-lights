import React, { useState, useRef, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import PageHero from '../components/PageHero/PageHero';
import slide1 from '../media/home/Sliders-1.jpg';
import '../styles/ContactPage.css';

const MAP_SRC = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3623.8072608968473!2d46.708988!3d24.7334964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f02f5f42ab93f%3A0x3fac83ad82c7ecb1!2z2LTYsdmD2Kkg2KfZhNhu2KfYo9mK2KfYo9in2YTZhdmI2KjZiNmK2YPYp9mG2YnZhNmK2YPYp9mG2YnZhNmK2YPYp9mG2YrZg9in!5e0!3m2!1sen!2sus!4v1772489288721!5m2!1sen!2sus';

/* Inline SVG icons */
const IconPin = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>;
const IconPhone = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 4.18 2 2 0 015.09 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>;
const IconFax = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 17 17 17 21 22 21 22 17" /><rect x="2" y="3" width="15" height="13" rx="1" /><path d="M17 8h5v4h-5" /><line x1="6" y1="8" x2="11" y2="8" /><line x1="6" y1="12" x2="11" y2="12" /></svg>;
const IconMail = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const IconClock = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
const IconCheck = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>;

const INFO_ITEMS = [
    { key: 'address', Icon: IconPin, href: null },
    { key: 'phone', Icon: IconPhone, href: 'tel:0114707003' },
    { key: 'fax', Icon: IconFax, href: null },
    { key: 'email', Icon: IconMail, href: 'mailto:info@capital-lights.com' },
];

export default function ContactPage() {
    const { t } = useLang();
    const cp = t.contactPage;
    const f = cp.fields;

    const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    const [busy, setBusy] = useState(false);
    const [sent, setSent] = useState(false);
    const [errors, setErrors] = useState({});

    const sectionRef = useRef();
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.05 });
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = true;
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = true;
        if (!form.subject.trim()) e.subject = true;
        if (!form.message.trim()) e.message = true;
        return e;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setBusy(true);
        setTimeout(() => { setBusy(false); setSent(true); }, 1800);
    };

    const handleChange = (field) => (e) => {
        setForm(prev => ({ ...prev, [field]: e.target.value }));
        setErrors(prev => ({ ...prev, [field]: false }));
    };

    return (
        <div style={{ background: 'var(--bg-dark)', minHeight: '100vh' }}>
            <PageHero
                titleEn={cp.heroTitle}
                titleAr={cp.heroTitle}
                subtitleEn={cp.heroSubtitle}
                subtitleAr={cp.heroSubtitle}
                bgImage={slide1}
            />

            <section className="contact-section section-pad" ref={sectionRef}>
                <div className={`container contact-layout${visible ? ' visible' : ''}`}>

                    {/* ── Left col: info + hours + map ── */}
                    <aside className="contact-info">
                        <div className="contact-info__header">
                            <span className="tag">{cp.infoTag}</span>
                            <h2>{cp.infoTitle}</h2>
                            <div className="divider divider-left" />
                        </div>

                        {/* Contact detail items */}
                        <div className="contact-info__items">
                            {INFO_ITEMS.map(({ key, Icon, href }) => (
                                <div key={key} className="ci-item">
                                    <div className="ci-item__icon"><Icon /></div>
                                    <div className="ci-item__text">
                                        {href
                                            ? <a href={href}>{cp[key]}</a>
                                            : <span>{cp[key]}</span>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Business hours */}
                        <div className="contact-hours">
                            <div className="contact-hours__head">
                                <IconClock />
                                <h4>{cp.hoursTitle}</h4>
                            </div>
                            <ul>
                                {cp.hours.map((h, i) => (
                                    <li key={i}>
                                        <span className="contact-hours__day">{h.day}</span>
                                        <span className={`contact-hours__time${h.time === 'Closed' || h.time === 'إجازة' ? ' closed' : ''}`}>
                                            {h.time}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Map */}
                        <div className="contact-map">
                            <p className="contact-map__label">{cp.mapTitle}</p>
                            <div className="contact-map__embed">
                                <iframe
                                    title="Capital Lights Location"
                                    src={MAP_SRC}
                                    width="100%" height="220"
                                    style={{ border: 0, display: 'block' }}
                                    allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </aside>

                    {/* ── Right col: form ── */}
                    <div className="contact-form-wrap">
                        <div className="contact-form-header">
                            <span className="tag">{cp.formTag}</span>
                            <h2>{cp.formTitle}</h2>
                            <div className="divider divider-left" />
                        </div>

                        {sent ? (
                            <div className="contact-success">
                                <div className="contact-success__icon"><IconCheck /></div>
                                <h3>{cp.successTitle}</h3>
                                <p>{cp.successDesc}</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                {/* Row 1: name + email */}
                                <div className="cf-row">
                                    <div className={`cf-field${errors.name ? ' cf-field--error' : ''}`}>
                                        <label>{f.name.label} <span className="cf-req">*</span></label>
                                        <input type="text" placeholder={f.name.placeholder} value={form.name} onChange={handleChange('name')} />
                                    </div>
                                    <div className={`cf-field${errors.email ? ' cf-field--error' : ''}`}>
                                        <label>{f.email.label} <span className="cf-req">*</span></label>
                                        <input type="email" placeholder={f.email.placeholder} value={form.email} onChange={handleChange('email')} />
                                    </div>
                                </div>

                                {/* Row 2: phone + company */}
                                <div className="cf-row">
                                    <div className="cf-field">
                                        <label>{f.phone.label}</label>
                                        <input type="tel" placeholder={f.phone.placeholder} value={form.phone} onChange={handleChange('phone')} dir="ltr" />
                                    </div>
                                    <div className="cf-field">
                                        <label>{f.company.label}</label>
                                        <input type="text" placeholder={f.company.placeholder} value={form.company} onChange={handleChange('company')} />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className={`cf-field${errors.subject ? ' cf-field--error' : ''}`}>
                                    <label>{f.subject.label} <span className="cf-req">*</span></label>
                                    <input type="text" placeholder={f.subject.placeholder} value={form.subject} onChange={handleChange('subject')} />
                                </div>

                                {/* Message */}
                                <div className={`cf-field${errors.message ? ' cf-field--error' : ''}`}>
                                    <label>{f.message.label} <span className="cf-req">*</span></label>
                                    <textarea rows="5" placeholder={f.message.placeholder} value={form.message} onChange={handleChange('message')} />
                                </div>

                                <button type="submit" className={`btn-accent cf-submit${busy ? ' busy' : ''}`} disabled={busy}>
                                    {busy ? (
                                        <><span className="cf-spinner" />{cp.sending}</>
                                    ) : (
                                        <>{cp.send} →</>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
