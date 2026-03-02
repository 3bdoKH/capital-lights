import React, { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { search, highlight } from '../search/searchIndex';
import '../styles/SearchPage.css';

/* Category badge colours map */
const CAT_STYLES = {
    Page: 'cat--page',
    Service: 'cat--service',
    Client: 'cat--client',
    About: 'cat--about',
};

/* Highlighted text segment renderer */
function Highlighted({ text, query }) {
    const parts = highlight(text, query);
    return (
        <span>
            {parts.map((p, i) =>
                p.highlight
                    ? <mark key={i} className="search-mark">{p.text}</mark>
                    : <span key={i}>{p.text}</span>
            )}
        </span>
    );
}

/* Single result card */
function ResultCard({ item, query, isAr }) {
    const title = isAr ? item.titleAr : item.titleEn;
    const body = isAr ? item.bodyAr : item.bodyEn;
    const cat = isAr ? item.categoryAr : item.category;
    return (
        <Link to={item.path} className={`sr-card ${CAT_STYLES[item.category] || ''}`}>
            <div className="sr-card__top">
                <span className="sr-card__cat">{cat}</span>
                <span className="sr-card__path">{item.path}</span>
            </div>
            <h3 className="sr-card__title">
                <Highlighted text={title} query={query} />
            </h3>
            <p className="sr-card__body">
                <Highlighted text={body} query={query} />
            </p>
            <div className="sr-card__arrow">→</div>
        </Link>
    );
}

export default function SearchPage() {
    const { t } = useLang();
    const isAr = t.lang === 'ar';
    const [params, setParams] = useSearchParams();
    const [inputVal, setInputVal] = useState(params.get('q') || '');
    const [query, setQuery] = useState(params.get('q') || '');
    const [results, setResults] = useState([]);

    /* Run search whenever query changes */
    useEffect(() => {
        const q = params.get('q') || '';
        setInputVal(q);
        setQuery(q);
        setResults(search(q, t.lang));
    }, [params, t.lang]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const q = inputVal.trim();
        if (q) setParams({ q });
    }, [inputVal, setParams]);

    const hasQuery = query.trim().length >= 2;
    const hasResults = results.length > 0;

    return (
        <div className="search-page">
            {/* ── Search hero ── */}
            <div className="search-hero">
                <div className="search-hero__glow" />
                <div className="container search-hero__inner">
                    <span className="tag">{isAr ? 'البحث' : 'Search'}</span>
                    <h1>{isAr ? 'ما الذي تبحث عنه؟' : 'What are you looking for?'}</h1>
                    <form className="search-hero__form" onSubmit={handleSubmit}>
                        <div className="search-hero__input-wrap">
                            <svg className="search-hero__icon" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <input
                                type="search"
                                autoFocus
                                value={inputVal}
                                onChange={e => setInputVal(e.target.value)}
                                placeholder={isAr ? 'ابحث عن خدمة، مشروع، عميل…' : 'Search services, projects, clients…'}
                                className="search-hero__input"
                            />
                            {inputVal && (
                                <button type="button" className="search-hero__clear"
                                    onClick={() => { setInputVal(''); setParams({}); }}>×</button>
                            )}
                        </div>
                        <button type="submit" className="btn-accent search-hero__btn">
                            {isAr ? 'بحث' : 'Search'}
                        </button>
                    </form>
                </div>
            </div>

            {/* ── Results area ── */}
            <div className="container search-results">
                {/* Summary row */}
                {hasQuery && (
                    <div className="search-summary">
                        <p>
                            {hasResults
                                ? isAr
                                    ? `${results.length} نتيجة لـ `
                                    : `${results.length} result${results.length !== 1 ? 's' : ''} for `
                                : isAr ? 'لا توجد نتائج لـ ' : 'No results for '
                            }
                            <strong>"{query}"</strong>
                        </p>
                        {hasResults && (
                            <div className="search-cats">
                                {[...new Set(results.map(r => isAr ? r.categoryAr : r.category))].map(c => (
                                    <span key={c} className="search-cats__pill">{c}</span>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Results grid */}
                {hasQuery && hasResults && (
                    <div className="sr-grid">
                        {results.map(item => (
                            <ResultCard key={item.id} item={item} query={query} isAr={isAr} />
                        ))}
                    </div>
                )}

                {/* No results */}
                {hasQuery && !hasResults && (
                    <div className="search-empty">
                        <div className="search-empty__icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </div>
                        <h3>{isAr ? 'لا توجد نتائج' : 'No results found'}</h3>
                        <p>
                            {isAr
                                ? 'حاول البحث بكلمات مختلفة أو تصفّح صفحات موقعنا مباشرة.'
                                : 'Try different keywords or browse our pages directly.'}
                        </p>
                        <div className="search-empty__links">
                            {[
                                { path: '/services', label: isAr ? 'الخدمات' : 'Services' },
                                { path: '/about', label: isAr ? 'عن الشركة' : 'About' },
                                { path: '/clients', label: isAr ? 'العملاء' : 'Clients' },
                                { path: '/contact', label: isAr ? 'تواصل معنا' : 'Contact' },
                            ].map(l => (
                                <Link key={l.path} to={l.path} className="search-empty__link">{l.label}</Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Initial state — no query yet */}
                {!hasQuery && (
                    <div className="search-suggestions">
                        <p className="search-suggestions__title">
                            {isAr ? 'اقتراحات للبحث' : 'Try searching for'}
                        </p>
                        <div className="search-suggestions__pills">
                            {['Electrical Works', 'Plumbing', 'Ministry of Health', 'Maintenance', 'Riyadh', 'Grade I'].map(s => (
                                <button key={s} className="search-pill"
                                    onClick={() => { setInputVal(s); setParams({ q: s }); }}>
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}