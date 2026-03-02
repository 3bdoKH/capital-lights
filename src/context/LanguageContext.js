import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    dir: 'ltr',
    lang: 'en',
    /* ── Nav ── */
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      clients: 'Clients',
      contact: 'Contact',
      toggle: 'عربي',
    },
    /* ── Hero ── */
    hero: {
      badge: 'Electromechanical Contracting',
      slide1: { title: 'Powering Saudi Arabia Since 1967', subtitle: 'Decades of excellence in electromechanical and civil contracting.' },
      slide2: { title: 'SR 250M+ Projects Delivered', subtitle: 'A proven track record of landmark projects across the Kingdom.' },
      slide3: { title: 'Grade I Classified Contractor', subtitle: 'Classified by the Contractors\' Classification Committee – the highest grade.' },
      slide4: { title: 'SR 150M+ Annual Execution', subtitle: 'We handle large-scale electricity projects every year with precision.' },
      slide5: { title: 'Trusted by Leading Clients', subtitle: 'A proud member of the Riyadh Chamber of Commerce and Industry.' },
      cta: 'Explore Our Projects',
      learnMore: 'Learn More',
    },
    /* ── About Snapshot (home) ── */
    about: {
      tag: 'Who We Are',
      title: 'A Legacy of Excellence in Electromechanical Contracting',
      body: "Established in 1967 as Capital Lights Electromechanical Contracting Establishment, we have grown into Adhwa' Al Asima Electromechanical Co. — a Grade I classified company executing electricity projects worth over SR 150 million annually across the Kingdom of Saudi Arabia.",
      cta: 'Read Our Full Story',
      stat1val: '1967', stat1lab: 'Year Established',
      stat2val: '250M+', stat2lab: 'SR Projects Delivered',
      stat3val: '150M+', stat3lab: 'SR Annual Projects',
      stat4val: 'Grade I', stat4lab: 'Classification',
    },
    /* ── About Page (full) ── */
    aboutPage: {
      heroTitle: 'About Us',
      heroSubtitle: 'Over five decades of trust, precision, and electromechanical excellence in the Kingdom.',
      profileTag: 'Company Profile',
      profileTitle: 'Who We Are',
      profile1: "Capital Lights Electromechanical Contracting Establishment was established in 1387 (1967) to carry out electromechanical and civil work contracts. The Establishment started operations and managed to build a good reputation in the contracting sector in the Kingdom with the onset of early development take off in the country.",
      profile2: "The Establishment carried out projects with a value exceeding SR 250 million up to 1405 (1985). With the increase in the Establishment operations it was converted into a limited liability company under the name \"Adhwa' Al Asima Electromechanical Co.\"",
      profile3: "The Company is still participating in execution of electricity projects in the Kingdom and the average value of annual projects it executes is above SR 150 million. The Company is classified in the field of electromechanical contracting by the Contractors' Classification Committee in the I Grade and is also a member of Riyadh Chamber of Commerce and Industry.",
      visionTag: 'Our Vision',
      visionTitle: 'Vision & Mission',
      vision: 'To be the leading electromechanical contractor in the Kingdom of Saudi Arabia, recognized for technical excellence, reliable delivery and long-term client partnerships.',
      mission: 'To execute electromechanical and civil projects with the highest standards of quality, safety and professionalism — delivering value to our clients and contributing to the growth of the Kingdom.',
      timelineTag: 'Our Journey',
      timelineTitle: 'Milestones',
      milestones: [
        { year: '1967', labelEn: 'Foundation', descEn: 'Established as Capital Lights Electromechanical Contracting Establishment in Riyadh.' },
        { year: '1975', labelEn: 'Rapid Growth', descEn: 'Significant expansion of workforce and project portfolio during Saudi Arabia\'s development boom.' },
        { year: '1985', labelEn: 'SR 250M Milestone', descEn: 'Total project value exceeded SR 250 million, establishing us as a major contracting name.' },
        { year: '1990', labelEn: 'LLC Conversion', descEn: "Converted to \"Adhwa' Al Asima Electromechanical Co.\" — a limited liability company." },
        { year: '2000', labelEn: 'Grade I Classification', descEn: 'Awarded the highest Grade I classification by the Contractors\' Classification Committee.' },
        { year: 'Today', labelEn: 'SR 150M+ Annually', descEn: 'Executing over SR 150 million in electricity and electromechanical projects every year.' },
      ],
      certTag: 'Credentials',
      certTitle: 'Classification & Memberships',
      certs: [
        { labelEn: 'Grade I Classification', descEn: 'Classified in the highest grade by the Contractors\' Classification Committee of Saudi Arabia.' },
        { labelEn: 'Riyadh Chamber of Commerce', descEn: 'Active member of the Riyadh Chamber of Commerce and Industry.' },
        { labelEn: 'SR 150M+ Annual Portfolio', descEn: 'Average annual project execution value exceeds SR 150 million.' },
        { labelEn: '57+ Years Experience', descEn: 'Over five decades of continuous operations and project delivery across the Kingdom.' },
      ],
      galleryTag: 'Gallery',
      galleryTitle: 'Our Projects in Pictures',
    },
    /* ── Services (home preview) ── */
    services: {
      tag: 'What We Do',
      title: 'Our Core Services',
      desc: 'From high-voltage installations to full civil works, our integrated capabilities cover the full spectrum of electromechanical and general contracting.',
      items: [
        { icon: 'EL', title: 'Electrical Works', desc: 'High & medium voltage installations, substation construction, and power distribution systems.' },
        { icon: 'ME', title: 'Mechanical Works', desc: 'HVAC, fire-fighting systems and full mechanical utility installations.' },
        { icon: 'CV', title: 'General Construction', desc: 'Structural construction, civil foundations, and infrastructure development.' },
        { icon: 'PS', title: 'Power Systems', desc: 'Switchgear, transformers, generators, and UPS systems supply and installation.' },
        { icon: 'LT', title: 'Lighting Solutions', desc: 'Street lighting, industrial lighting and smart lighting control systems.' },
        { icon: 'OM', title: 'Maintenance & O&M', desc: 'Preventive and corrective maintenance contracts for electrical networks.' },
      ],
      cta: 'All Services',
    },
    /* ── Services Page (full detail) ── */
    servicesPage: {
      heroTitle: 'Our Services',
      heroSubtitle: 'Comprehensive electromechanical, civil and maintenance contracting — Grade I classified since 1967.',
      introTag: 'What We Offer',
      introTitle: 'Integrated Contracting Capabilities',
      introDesc: 'From initial scoping to final handover, Capital Lights delivers end-to-end electromechanical and civil contracting services across the Kingdom of Saudi Arabia.',
      services: [
        {
          code: 'EL', title: 'Electrical Works',
          desc: 'Full-spectrum electrical contracting from high-voltage transmission to low-voltage distribution, powering infrastructure across the Kingdom.',
          bullets: ['High & medium voltage (HV/MV) installations', 'Substation construction & commissioning', 'Power distribution panels & cabling', 'Earthing & lightning protection systems', 'Emergency power & backup systems'],
        },
        {
          code: 'ME', title: 'Mechanical Works',
          desc: 'Complete mechanical system design and installation for commercial, industrial and government facilities.',
          bullets: ['HVAC systems — supply, install & commission', 'Plumbing & sanitary systems', 'Fire-fighting & suppression systems', 'Compressed air & piping networks', 'Mechanical utility infrastructure'],
        },
        {
          code: 'CV', title: 'General Construction',
          desc: 'Turnkey civil and construction works aligned with the Kingdom\'s infrastructure expansion programmes.',
          bullets: ['Structural & reinforced concrete works', 'Foundations & earthworks', 'Road & external infrastructure works', 'Masonry, block work & plastering', 'Pre-construction planning & scheduling'],
        },
        {
          code: 'PS', title: 'Power Systems',
          desc: 'Supply, installation and commissioning of complete power system equipment for industrial and utility clients.',
          bullets: ['MV/LV switchgear panels', 'Power & distribution transformers', 'Diesel generators — supply & install', 'UPS & battery backup systems', 'Power factor correction equipment'],
        },
        {
          code: 'LT', title: 'Lighting Solutions',
          desc: 'Smart and conventional lighting systems for roads, facilities and industrial sites across the Kingdom.',
          bullets: ['Street & road lighting networks', 'Industrial & warehouse lighting', 'Architectural & facade lighting', 'Smart lighting control systems', 'Lighting panel boards & wiring'],
        },
        {
          code: 'PL', title: 'Plumbing & Sanitary',
          desc: 'Professional plumbing, drainage and sanitary system installation for all building types.',
          bullets: ['Water supply & distribution piping', 'Drainage & sewage systems', 'Sanitary fixtures installation', 'Hot & cold water systems', 'Pump rooms & boosters'],
        },
        {
          code: 'PT', title: 'Painting & Finishing',
          desc: 'High-quality interior and exterior painting, protective coatings and surface treatment works.',
          bullets: ['Interior & exterior painting', 'Protective & anti-corrosion coatings', 'Epoxy floor coatings', 'Surface preparation & priming', 'Industrial structure painting'],
        },
        {
          code: 'OM', title: 'Maintenance & O&M',
          desc: 'Long-term operation and maintenance contracts keeping electrical assets running safely and efficiently.',
          bullets: ['Preventive maintenance schedules', 'Corrective & emergency maintenance', 'Electrical network O&M contracts', 'Testing & inspection services', 'Spare parts supply & management'],
        },
      ],
      ctaTitle: 'Need a Tailored Service?',
      ctaDesc: 'Our team is ready to discuss your project requirements and provide a competitive proposal.',
      ctaBtn: 'Contact Us',
    },
    /* ── Projects ── */
    projects: {
      tag: 'Our Work',
      title: 'Featured Projects',
      desc: 'A selection of landmark projects we have successfully delivered across the Kingdom.',
      cta: 'View All Projects',
    },
    /* ── Clients ── */
    clients: {
      tag: 'Our Partners',
      title: 'Trusted by the Best',
      desc: 'We are proud to have earned the trust of leading government and private sector organizations in Saudi Arabia.',
    },
    /* ── CTA Banner ── */
    cta: {
      title: 'Ready to Start Your Next Project?',
      desc: 'Contact our team today and let\'s discuss how Capital Lights can deliver excellence on your next electromechanical project.',
      btn: 'Get In Touch',
    },
    /* ── Footer ── */
    footer: {
      tagline: 'Capital Lights Co. for Electro-mechanics Contracting Establishment was established in 1387(1967) to carry out electromechanical and civil work contracts.',
      company: "Adhwa' Al Asima Electromechanical Co.",
      headquarters: 'Corporate Headquarters',
      quickLinks: 'Quick Links',
      contact: 'Contact Us',
      location: 'Location on Maps',
      address: 'Riyadh, Kingdom of Saudi Arabia',
      phone: '(011) 470-7003',
      fax: '(011) 470-5514',
      email: 'info@capital-lights.com',
      rights: "© 2024 Adhwa' Al Asima Electromechanical Co. All rights reserved.",
      member: 'Member of Riyadh Chamber of Commerce',
    },
  },

  ar: {
    dir: 'rtl',
    lang: 'ar',
    nav: {
      home: 'الرئيسية',
      about: 'عن الشركة',
      services: 'خدماتنا',
      projects: 'المشاريع',
      clients: 'العملاء',
      contact: 'تواصل معنا',
      toggle: 'English',
    },
    hero: {
      badge: 'مقاولات كهروميكانيكية',
      slide1: { title: 'نضيء المملكة منذ عام 1967', subtitle: 'عقود من التميز في مقاولات الكهرباء والأعمال الميكانيكية والمدنية.' },
      slide2: { title: 'مشاريع تجاوزت 250 مليون ريال', subtitle: 'سجل حافل بمشاريع بارزة في أرجاء المملكة العربية السعودية.' },
      slide3: { title: 'مقاول مصنف الدرجة الأولى', subtitle: 'مصنفون من قِبل هيئة تصنيف المقاولين في أعلى درجات التصنيف.' },
      slide4: { title: 'مشاريع سنوية تفوق 150 مليون ريال', subtitle: 'ننفذ مشاريع الكهرباء الكبرى بدقة احترافية عالية.' },
      slide5: { title: 'ثقة العملاء الكبار', subtitle: 'أعضاء فخورون في غرفة تجارة وصناعة الرياض.' },
      cta: 'استعرض مشاريعنا',
      learnMore: 'اعرف المزيد',
    },
    about: {
      tag: 'من نحن',
      title: 'إرث من التميز في مجال المقاولات الكهروميكانيكية',
      body: 'تأسست الشركة عام 1967م تحت مسمى مؤسسة أضواء العاصمة للمقاولات الكهروميكانيكية، ثم تحولت إلى شركة أضواء العاصمة للمقاولات الكهروميكانيكية ذ.م.م — مصنّفة درجة أولى، تنفذ مشاريع كهربائية تتجاوز قيمتها 150 مليون ريال سنوياً في أرجاء المملكة العربية السعودية.',
      cta: 'اقرأ قصتنا كاملة',
      stat1val: '1967', stat1lab: 'عام التأسيس',
      stat2val: '+250م', stat2lab: 'ريال مشاريع منجزة',
      stat3val: '+150م', stat3lab: 'ريال مشاريع سنوية',
      stat4val: 'الأولى', stat4lab: 'درجة التصنيف',
    },
    /* ── About Page (full) AR ── */
    aboutPage: {
      heroTitle: 'عن الشركة',
      heroSubtitle: 'أكثر من خمسة عقود من الثقة والدقة والتميز في مجال المقاولات الكهروميكانيكية بالمملكة.',
      profileTag: 'نبذة عن الشركة',
      profileTitle: 'من نحن',
      profile1: 'تأسست مؤسسة أضواء العاصمة للمقاولات الكهروميكانيكية عام 1387هـ (1967م) لتنفيذ عقود الأعمال الكهروميكانيكية والمدنية، وبدأت عملياتها وتمكنت من بناء سمعة طيبة في قطاع المقاولات في المملكة في بداية مرحلة التنمية المبكرة.',
      profile2: 'نفّذت المؤسسة مشاريع تجاوزت قيمتها 250 مليون ريال حتى عام 1405هـ (1985م)، وبتزايد أعمالها تحوّلت إلى شركة ذات مسؤولية محدودة تحت مسمى "شركة أضواء العاصمة للمقاولات الكهروميكانيكية".',
      profile3: 'لا تزال الشركة تشارك في تنفيذ مشاريع الكهرباء في المملكة، ويتجاوز متوسط قيمة مشاريعها السنوية 150 مليون ريال. وهي مصنّفة في مجال المقاولات الكهروميكانيكية من الدرجة الأولى لدى هيئة تصنيف المقاولين، وعضو في غرفة تجارة وصناعة الرياض.',
      visionTag: 'رؤيتنا',
      visionTitle: 'الرؤية والرسالة',
      vision: 'أن نكون المقاول الكهروميكانيكي الرائد في المملكة العربية السعودية، معروفين بالتميز التقني والتسليم الموثوق وشراكات العملاء طويلة الأمد.',
      mission: 'تنفيذ مشاريع الكهروميكانيك والأعمال المدنية بأعلى معايير الجودة والسلامة والاحترافية، وتحقيق قيمة مضافة لعملائنا والإسهام في نمو المملكة.',
      timelineTag: 'مسيرتنا',
      timelineTitle: 'أبرز المحطات',
      milestones: [
        { year: '1967', labelEn: 'التأسيس', descEn: 'تأسست مؤسسة أضواء العاصمة للمقاولات الكهروميكانيكية في الرياض.' },
        { year: '1975', labelEn: 'نمو متسارع', descEn: 'توسع ملحوظ في الكوادر والمشاريع في عهد طفرة التنمية السعودية.' },
        { year: '1985', labelEn: 'إنجاز 250 مليون ريال', descEn: 'تجاوزت قيمة المشاريع المنجزة 250 مليون ريال سعودي.' },
        { year: '1990', labelEn: 'تحوّل إلى شركة', descEn: 'تحوّلت إلى شركة أضواء العاصمة للمقاولات الكهروميكانيكية ذ.م.م.' },
        { year: '2000', labelEn: 'تصنيف الدرجة الأولى', descEn: 'حصلت على أعلى تصنيف (الدرجة الأولى) من هيئة تصنيف المقاولين.' },
        { year: 'اليوم', labelEn: 'أكثر من 150 مليون سنوياً', descEn: 'تنفّذ الشركة مشاريع كهروميكانيكية سنوية تتجاوز 150 مليون ريال.' },
      ],
      certTag: 'اعتمادات',
      certTitle: 'التصنيف والعضويات',
      certs: [
        { labelEn: 'تصنيف الدرجة الأولى', descEn: 'مصنّفة بأعلى درجة من قِبل هيئة تصنيف المقاولين في المملكة.' },
        { labelEn: 'غرفة تجارة الرياض', descEn: 'عضو فاعل في غرفة تجارة وصناعة الرياض.' },
        { labelEn: 'محفظة سنوية +150م ريال', descEn: 'متوسط قيمة المشاريع المنفّذة سنوياً يتجاوز 150 مليون ريال.' },
        { labelEn: '+57 عاماً من الخبرة', descEn: 'أكثر من خمسة عقود من العمليات المتواصلة وتسليم المشاريع في المملكة.' },
      ],
      galleryTag: 'معرض الصور',
      galleryTitle: 'مشاريعنا بالصور',
    },

    services: {
      tag: 'ما نقدمه',
      title: 'خدماتنا الأساسية',
      desc: 'من التركيبات الكهربائية عالية الجهد إلى الأعمال المدنية الكاملة، تغطي قدراتنا المتكاملة الطيف الكامل من مقاولات الكهروميكانيك.',
      items: [
        { icon: 'EL', title: 'الأعمال الكهربائية', desc: 'تركيبات الجهد العالي والمتوسط، وإنشاء المحطات، وأنظمة توزيع الطاقة.' },
        { icon: 'ME', title: 'الأعمال الميكانيكية', desc: 'التكييف والسباكة وأنظمة الإطفاء والتركيبات الميكانيكية.' },
        { icon: 'CV', title: 'الأعمال المدنية', desc: 'البناء الإنشائي والأساسات المدنية وتطوير البنى التحتية.' },
        { icon: 'PS', title: 'أنظمة الطاقة', desc: 'توريد وتركيب لوحات التوزيع والمحولات والمولدات وأنظمة UPS.' },
        { icon: 'LT', title: 'حلول الإضاءة', desc: 'إنارة الطرق والإضاءة الصناعية وأنظمة التحكم الذكي في الإضاءة.' },
        { icon: 'OM', title: 'الصيانة وتشغيل الأصول', desc: 'عقود الصيانة الوقائية والتصحيحية لشبكات الكهرباء.' },
      ],
      cta: 'كل الخدمات',
    },
    /* ── Services Page AR ── */
    servicesPage: {
      heroTitle: 'خدماتنا',
      heroSubtitle: 'مقاولات كهروميكانيكية ومدنية وصيانة متكاملة — مصنّفون درجة أولى منذ 1967م.',
      introTag: 'ما نقدمه',
      introTitle: 'قدرات مقاولات متكاملة',
      introDesc: 'من مرحلة الدراسة الأولية حتى التسليم النهائي، تقدم أضواء العاصمة خدمات مقاولات كهروميكانيكية ومدنية متكاملة في أرجاء المملكة العربية السعودية.',
      services: [
        {
          code: 'EL', title: 'الأعمال الكهربائية',
          desc: 'مقاولات كهربائية متكاملة من الجهد العالي إلى الجهد المنخفض، تغذي البنية التحتية في أرجاء المملكة.',
          bullets: ['تركيبات الجهد العالي والمتوسط', 'إنشاء المحطات وتكليفها', 'لوحات توزيع الطاقة والكابلات', 'أنظمة التأريض والحماية من الصواعق', 'أنظمة الطاقة الاحتياطية والطوارئ'],
        },
        {
          code: 'ME', title: 'الأعمال الميكانيكية',
          desc: 'تصميم وتنفيذ أنظمة ميكانيكية متكاملة للمنشآت التجارية والصناعية والحكومية.',
          bullets: ['أنظمة التكييف — توريد وتركيب وتشغيل', 'أنظمة السباكة والصرف الصحي', 'أنظمة الإطفاء والإخماد', 'شبكات الهواء المضغوط والأنابيب', 'البنية التحتية الميكانيكية'],
        },
        {
          code: 'CV', title: 'الإنشاءات العامة',
          desc: 'أعمال مدنية وإنشائية متكاملة تتوافق مع برامج التوسع في البنية التحتية بالمملكة.',
          bullets: ['الأعمال الإنشائية والخرسانة المسلحة', 'الأساسات وأعمال الحفر', 'أعمال الطرق والبنية التحتية الخارجية', 'أعمال البناء بالطوب والمونة والتشطيب', 'التخطيط وجدولة مرحلة ما قبل الإنشاء'],
        },
        {
          code: 'PS', title: 'أنظمة الطاقة',
          desc: 'توريد وتركيب وتشغيل معدات أنظمة الطاقة الكاملة للعملاء الصناعيين والخدميين.',
          bullets: ['لوحات محولات التوزيع MV/LV', 'محولات الطاقة والتوزيع', 'المولدات الديزلية — توريد وتركيب', 'أنظمة UPS والبطاريات الاحتياطية', 'معدات تصحيح معامل القدرة'],
        },
        {
          code: 'LT', title: 'حلول الإضاءة',
          desc: 'أنظمة إضاءة ذكية واعتيادية للطرق والمنشآت والمواقع الصناعية.',
          bullets: ['شبكات إنارة الشوارع والطرق', 'إضاءة صناعية ومستودعات', 'الإضاءة المعمارية وواجهات المباني', 'أنظمة التحكم الذكي في الإضاءة', 'لوحات ومحولات الإضاءة'],
        },
        {
          code: 'PL', title: 'السباكة والصرف الصحي',
          desc: 'تركيب محترف لأنظمة السباكة والصرف والصحي لجميع أنواع المباني.',
          bullets: ['أنابيب إمداد وتوزيع المياه', 'أنظمة الصرف الصحي والمجاري', 'تركيب التجهيزات الصحية', 'أنظمة المياه الساخنة والباردة', 'غرف المضخات والمعززات'],
        },
        {
          code: 'PT', title: 'الدهانات والتشطيبات',
          desc: 'أعمال دهانات داخلية وخارجية عالية الجودة وطلاءات وقائية وأعمال معالجة الأسطح.',
          bullets: ['الدهانات الداخلية والخارجية', 'الطلاءات الواقية ومضادة التآكل', 'طلاءات الإيبوكسي للأرضيات', 'تحضير الأسطح والطلاء التمهيدي', 'دهانات الهياكل الصناعية'],
        },
        {
          code: 'OM', title: 'الصيانة وتشغيل الأصول',
          desc: 'عقود تشغيل وصيانة طويلة الأمد تضمن عمل الأصول الكهربائية بأمان وكفاءة.',
          bullets: ['جداول الصيانة الوقائية', 'الصيانة التصحيحية والطوارئ', 'عقود تشغيل وصيانة شبكات الكهرباء', 'خدمات الاختبار والفحص', 'توريد وإدارة قطع الغيار'],
        },
      ],
      ctaTitle: 'تحتاج خدمة مخصصة؟',
      ctaDesc: 'فريقنا جاهز لمناقشة متطلبات مشروعك وتقديم عرض تنافسي.',
      ctaBtn: 'تواصل معنا',
    },

    projects: {
      tag: 'أعمالنا',
      title: 'مشاريع مميزة',
      desc: 'مجموعة مختارة من المشاريع البارزة التي نفذناها بنجاح في المملكة.',
      cta: 'عرض جميع المشاريع',
    },
    clients: {
      tag: 'شركاؤنا',
      title: 'ثقة أفضل المؤسسات',
      desc: 'نفخر بثقة كبرى المؤسسات الحكومية والقطاع الخاص في المملكة العربية السعودية.',
    },
    cta: {
      title: 'مستعد لبدء مشروعك القادم؟',
      desc: 'تواصل مع فريقنا اليوم ودعنا نناقش كيف يمكن لأضواء العاصمة أن تحقق التميز في مشروعك الكهروميكانيكي القادم.',
      btn: 'تواصل معنا',
    },
    footer: {
      tagline: 'تأسست شركة أضواء العاصمة للمقاولات الكهروميكانيكية عام 1387هـ (1967م) لتنفيذ عقود الأعمال الكهروميكانيكية والمدنية في المملكة العربية السعودية.',
      company: 'شركة أضواء العاصمة للمقاولات الكهروميكانيكية',
      headquarters: 'المقر الرئيسي',
      quickLinks: 'روابط سريعة',
      contact: 'تواصل معنا',
      location: 'الموقع على الخريطة',
      address: 'الرياض، المملكة العربية السعودية',
      phone: '(011) 470-7003',
      fax: '(011) 470-5514',
      email: 'info@capital-lights.com',
      rights: '© 2024 شركة أضواء العاصمة. جميع الحقوق محفوظة.',
      member: 'عضو في غرفة تجارة وصناعة الرياض',
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const toggle = () => setLang(prev => prev === 'en' ? 'ar' : 'en');
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      <div dir={t.dir} lang={t.lang}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLang() { return useContext(LanguageContext); }
