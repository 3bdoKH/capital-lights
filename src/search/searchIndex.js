/**
 * searchIndex.js
 * ─────────────
 * Static content index for the Capital Lights website.
 * Each entry has: id, page (route), category, titleEn, titleAr, bodyEn, bodyAr, tags[]
 * The SearchPage filters this array against the user query.
 */

export const SEARCH_INDEX = [
    /* ── Home ── */
    {
        id: 'home',
        path: '/',
        category: 'Page',
        categoryAr: 'صفحة',
        titleEn: 'Home',
        titleAr: 'الرئيسية',
        bodyEn: 'Capital Lights — Adhwa Al Asima Electromechanical Co. Grade I classified electromechanical contractor in Riyadh, Saudi Arabia.',
        bodyAr: 'أضواء العاصمة للمقاولات الكهروميكانيكية — مقاول كهروميكانيكي مصنّف الدرجة الأولى في الرياض.',
        tags: ['home', 'electromechanical', 'contractor', 'riyadh', 'saudi'],
    },

    /* ── About ── */
    {
        id: 'about',
        path: '/about',
        category: 'Page',
        categoryAr: 'صفحة',
        titleEn: 'About Us',
        titleAr: 'عن الشركة',
        bodyEn: 'Established in 1967, Capital Lights has delivered electromechanical and civil projects exceeding SR 250 million. Grade I classified, member of Riyadh Chamber of Commerce.',
        bodyAr: 'تأسست عام 1967م وأنجزت مشاريع تجاوزت 250 مليون ريال. مصنّفة الدرجة الأولى وعضو في غرفة تجارة الرياض.',
        tags: ['about', 'history', 'company profile', '1967', 'established', 'grade i', 'riyadh chamber'],
    },
    {
        id: 'about-vision',
        path: '/about',
        category: 'About',
        categoryAr: 'عن الشركة',
        titleEn: 'Vision & Mission',
        titleAr: 'الرؤية والرسالة',
        bodyEn: 'To be the leading electromechanical contractor in the Kingdom of Saudi Arabia, executing projects with the highest standards of quality, safety and professionalism.',
        bodyAr: 'أن نكون المقاول الكهروميكانيكي الرائد في المملكة، تنفيذ المشاريع بأعلى معايير الجودة والسلامة والاحترافية.',
        tags: ['vision', 'mission', 'values', 'quality', 'safety'],
    },

    /* ── Services ── */
    {
        id: 'services',
        path: '/services',
        category: 'Page',
        categoryAr: 'صفحة',
        titleEn: 'Our Services',
        titleAr: 'خدماتنا',
        bodyEn: 'Comprehensive electromechanical, civil and maintenance contracting services. Grade I classified since 1967.',
        bodyAr: 'خدمات مقاولات كهروميكانيكية ومدنية وصيانة متكاملة. مصنّفون درجة أولى منذ 1967م.',
        tags: ['services', 'contracting', 'electromechanical', 'civil', 'maintenance'],
    },
    {
        id: 'svc-el',
        path: '/services',
        category: 'Service',
        categoryAr: 'خدمة',
        titleEn: 'Electrical Works',
        titleAr: 'الأعمال الكهربائية',
        bodyEn: 'High & medium voltage installations, substation construction, power distribution panels, earthing, lightning protection, emergency power systems.',
        bodyAr: 'تركيبات الجهد العالي والمتوسط، إنشاء المحطات، لوحات توزيع الطاقة، أنظمة التأريض والحماية من الصواعق.',
        tags: ['electrical', 'hv', 'mv', 'substation', 'power', 'distribution', 'كهرباء'],
    },
    {
        id: 'svc-me',
        path: '/services',
        category: 'Service',
        categoryAr: 'خدمة',
        titleEn: 'Mechanical Works',
        titleAr: 'الأعمال الميكانيكية',
        bodyEn: 'HVAC systems, plumbing, sanitary systems, fire-fighting, suppression systems, compressed air networks.',
        bodyAr: 'أنظمة التكييف، السباكة، أنظمة الإطفاء والإخماد، شبكات الهواء المضغوط.',
        tags: ['mechanical', 'hvac', 'plumbing', 'fire', 'suppression', 'ميكانيكي'],
    },
    {
        id: 'svc-cv',
        path: '/services',
        category: 'Service',
        categoryAr: 'خدمة',
        titleEn: 'General Construction',
        titleAr: 'الإنشاءات العامة',
        bodyEn: 'Structural works, reinforced concrete, foundations, earthworks, road infrastructure, masonry, pre-construction planning.',
        bodyAr: 'الأعمال الإنشائية والخرسانة المسلحة، الأساسات، أعمال الطرق، البناء، مرحلة ما قبل الإنشاء.',
        tags: ['civil', 'construction', 'concrete', 'foundation', 'roads', 'مدني', 'إنشاء'],
    },
    {
        id: 'svc-ps',
        path: '/services',
        category: 'Service',
        categoryAr: 'خدمة',
        titleEn: 'Power Systems',
        titleAr: 'أنظمة الطاقة',
        bodyEn: 'MV/LV switchgear panels, transformers, diesel generators, UPS & battery backup, power factor correction.',
        bodyAr: 'لوحات التوزيع، المحولات، المولدات الديزلية، أنظمة UPS والبطاريات الاحتياطية.',
        tags: ['power', 'switchgear', 'transformer', 'generator', 'ups', 'ups', 'طاقة'],
    },
    {
        id: 'svc-lt',
        path: '/services',
        category: 'Service',
        categoryAr: 'خدمة',
        titleEn: 'Lighting Solutions',
        titleAr: 'حلول الإضاءة',
        bodyEn: 'Street and road lighting networks, industrial and warehouse lighting, facade lighting, smart lighting control systems.',
        bodyAr: 'شبكات إنارة الشوارع والطرق، الإضاءة الصناعية، إضاءة الواجهات، أنظمة الإضاءة الذكية.',
        tags: ['lighting', 'street', 'industrial', 'smart', 'إضاءة'],
    },
    {
        id: 'svc-pl',
        path: '/services',
        category: 'Service',
        categoryAr: 'خدمة',
        titleEn: 'Plumbing & Sanitary',
        titleAr: 'السباكة والصرف الصحي',
        bodyEn: 'Water supply and distribution piping, drainage, sewage systems, sanitary fixtures, pump rooms and boosters.',
        bodyAr: 'أنابيب إمداد المياه، أنظمة الصرف الصحي، التجهيزات الصحية، غرف المضخات.',
        tags: ['plumbing', 'sanitary', 'drainage', 'sewage', 'water', 'سباكة'],
    },
    {
        id: 'svc-pt',
        path: '/services',
        category: 'Service',
        categoryAr: 'خدمة',
        titleEn: 'Painting & Finishing',
        titleAr: 'الدهانات والتشطيبات',
        bodyEn: 'Interior and exterior painting, protective and anti-corrosion coatings, epoxy floor coatings, industrial structure painting.',
        bodyAr: 'الدهانات الداخلية والخارجية، الطلاءات الواقية، طلاءات الإيبوكسي للأرضيات، دهانات الهياكل الصناعية.',
        tags: ['painting', 'finishing', 'coatings', 'epoxy', 'دهانات'],
    },
    {
        id: 'svc-om',
        path: '/services',
        category: 'Service',
        categoryAr: 'خدمة',
        titleEn: 'Maintenance & O&M',
        titleAr: 'الصيانة وتشغيل الأصول',
        bodyEn: 'Preventive maintenance schedules, corrective and emergency maintenance, electrical network O&M contracts, testing and inspection.',
        bodyAr: 'جداول الصيانة الوقائية، الصيانة التصحيحية والطوارئ، عقود تشغيل وصيانة شبكات الكهرباء.',
        tags: ['maintenance', 'o&m', 'preventive', 'corrective', 'inspection', 'صيانة'],
    },

    /* ── Projects ── */
    {
        id: 'projects',
        path: '/projects',
        category: 'Page',
        categoryAr: 'صفحة',
        titleEn: 'Projects',
        titleAr: 'المشاريع',
        bodyEn: 'A portfolio of landmark electromechanical and civil projects delivered across the Kingdom of Saudi Arabia.',
        bodyAr: 'محفظة من المشاريع الكهروميكانيكية والمدنية البارزة المنجزة في أرجاء المملكة العربية السعودية.',
        tags: ['projects', 'portfolio', 'work', 'مشاريع'],
    },

    /* ── Clients ── */
    {
        id: 'clients',
        path: '/clients',
        category: 'Page',
        categoryAr: 'صفحة',
        titleEn: 'Our Clients',
        titleAr: 'عملاؤنا',
        bodyEn: 'Trusted by leading Saudi government and private sector organizations including SEC, STC, Ministry of Finance, Ministry of Health, Saudi National Guard.',
        bodyAr: 'نحظى بثقة كبرى المؤسسات السعودية الحكومية والخاصة كشركة الكهرباء، STC، وزارة المالية، وزارة الصحة، الحرس الوطني.',
        tags: ['clients', 'partners', 'sec', 'stc', 'ministry', 'government', 'عملاء'],
    },
    {
        id: 'client-sec',
        path: '/clients',
        category: 'Client',
        categoryAr: 'عميل',
        titleEn: 'Saudi Electricity Company (SEC)',
        titleAr: 'شركة الكهرباء السعودية',
        bodyEn: 'Major electricity generation and distribution company in Saudi Arabia. Key client for electrical works.',
        bodyAr: 'شركة الكهرباء السعودية، عميل رئيسي للأعمال الكهربائية.',
        tags: ['sec', 'electricity', 'saudi electricity', 'كهرباء', 'الكهرباء'],
    },
    {
        id: 'client-stc',
        path: '/clients',
        category: 'Client',
        categoryAr: 'عميل',
        titleEn: 'Saudi Telecom Company (STC)',
        titleAr: 'شركة الاتصالات السعودية STC',
        bodyEn: 'Saudi Arabia\'s leading telecom provider. Capital Lights has executed electrical infrastructure for STC.',
        bodyAr: 'شركة الاتصالات السعودية STC.',
        tags: ['stc', 'telecom', 'اتصالات'],
    },
    {
        id: 'client-mof',
        path: '/clients',
        category: 'Client',
        categoryAr: 'عميل',
        titleEn: 'Ministry of Finance',
        titleAr: 'وزارة المالية',
        bodyEn: 'Ministry of Finance of the Kingdom of Saudi Arabia.',
        bodyAr: 'وزارة المالية في المملكة العربية السعودية.',
        tags: ['ministry', 'finance', 'government', 'وزارة', 'مالية'],
    },
    {
        id: 'client-moh',
        path: '/clients',
        category: 'Client',
        categoryAr: 'عميل',
        titleEn: 'Ministry of Health',
        titleAr: 'وزارة الصحة',
        bodyEn: 'Ministry of Health of the Kingdom of Saudi Arabia.',
        bodyAr: 'وزارة الصحة في المملكة العربية السعودية.',
        tags: ['ministry', 'health', 'government', 'وزارة', 'صحة'],
    },
    {
        id: 'client-ng',
        path: '/clients',
        category: 'Client',
        categoryAr: 'عميل',
        titleEn: 'Saudi National Guard',
        titleAr: 'الحرس الوطني السعودي',
        bodyEn: 'Saudi National Guard — military client for electromechanical and civil works.',
        bodyAr: 'الحرس الوطني السعودي — عميل عسكري للأعمال الكهروميكانيكية والمدنية.',
        tags: ['national guard', 'military', 'armed forces', 'حرس وطني', 'عسكري'],
    },
    {
        id: 'client-mohe',
        path: '/clients',
        category: 'Client',
        categoryAr: 'عميل',
        titleEn: 'Ministry of Higher Education',
        titleAr: 'وزارة التعليم العالي',
        bodyEn: 'Ministry of Higher Education of the Kingdom of Saudi Arabia.',
        bodyAr: 'وزارة التعليم العالي في المملكة العربية السعودية.',
        tags: ['ministry', 'education', 'government', 'وزارة', 'تعليم'],
    },

    /* ── Contact ── */
    {
        id: 'contact',
        path: '/contact',
        category: 'Page',
        categoryAr: 'صفحة',
        titleEn: 'Contact Us',
        titleAr: 'تواصل معنا',
        bodyEn: 'Riyadh, Saudi Arabia. Phone: (011) 470-7003. Fax: (011) 470-5514. Email: info@capital-lights.com.',
        bodyAr: 'الرياض، المملكة العربية السعودية. هاتف: (011) 470-7003. فاكس: (011) 470-5514. البريد: info@capital-lights.com.',
        tags: ['contact', 'phone', 'email', 'address', 'riyadh', 'تواصل', 'هاتف'],
    },
];

/**
 * search(query, lang)
 * Returns ranked results for a given query string.
 * Scores: title match = 3pts, body match = 2pts, tag match = 1pt
 */
export function search(query, lang = 'en') {
    if (!query || query.trim().length < 2) return [];
    const q = query.toLowerCase().trim();
    const words = q.split(/\s+/);

    const scored = SEARCH_INDEX.map(item => {
        const titleField = lang === 'ar' ? item.titleAr : item.titleEn;
        const bodyField = lang === 'ar' ? item.bodyAr : item.bodyEn;
        const titleLow = titleField.toLowerCase();
        const bodyLow = bodyField.toLowerCase();
        const tagsLow = item.tags.join(' ').toLowerCase();

        let score = 0;
        for (const word of words) {
            if (titleLow.includes(word)) score += 3;
            if (bodyLow.includes(word)) score += 2;
            if (tagsLow.includes(word)) score += 1;
        }
        return { ...item, score };
    }).filter(item => item.score > 0);

    scored.sort((a, b) => b.score - a.score);
    return scored;
}

/**
 * highlight(text, query)
 * Returns an array of { text, highlight: bool } segments.
 */
export function highlight(text, query) {
    if (!query || !text) return [{ text, highlight: false }];
    const q = query.trim();
    const parts = text.split(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map(part => ({
        text: part,
        highlight: part.toLowerCase() === q.toLowerCase(),
    }));
}
