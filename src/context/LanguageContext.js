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
    /* ── About Snapshot ── */
    about: {
      tag: 'Who We Are',
      title: 'A Legacy of Excellence in Electromechanical Contracting',
      body: 'Established in 1967 as Capital Lights Electromechanical Contracting Establishment, we have grown into Adhwa\' Al Asima Electromechanical Co. — a Grade I classified company executing electricity projects worth over SR 150 million annually across the Kingdom of Saudi Arabia.',
      cta: 'Read Our Full Story',
      stat1val: '1967', stat1lab: 'Year Established',
      stat2val: '250M+', stat2lab: 'SR Projects Delivered',
      stat3val: '150M+', stat3lab: 'SR Annual Projects',
      stat4val: 'Grade I', stat4lab: 'Classification',
    },
    /* ── Services ── */
    services: {
      tag: 'What We Do',
      title: 'Our Core Services',
      desc: 'From high-voltage installations to full civil works, our integrated capabilities cover the full spectrum of electromechanical contracting.',
      items: [
        { icon: 'EL', title: 'Electrical Works', desc: 'High & medium voltage installations, substation construction, and power distribution systems.' },
        { icon: 'ME', title: 'Mechanical Works', desc: 'HVAC, plumbing, fire-fighting systems and mechanical utility installations.' },
        { icon: 'CV', title: 'Civil Works', desc: 'Structural construction, civil foundations, and infrastructure development.' },
        { icon: 'PS', title: 'Power Systems', desc: 'Switchgear, transformers, generators, and UPS systems supply and installation.' },
        { icon: 'LT', title: 'Lighting Solutions', desc: 'Street lighting, industrial lighting and smart lighting control systems.' },
        { icon: 'OM', title: 'Maintenance & O&M', desc: 'Preventive and corrective maintenance contracts for electrical networks.' },
      ],
      cta: 'All Services',
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
      tagline: 'Grade I Electromechanical Contractor — serving the Kingdom since 1967.',
      company: 'Adhwa\' Al Asima Electromechanical Co.',
      quickLinks: 'Quick Links',
      contact: 'Contact Us',
      address: 'Riyadh, Kingdom of Saudi Arabia',
      phone: '+966 11 000 0000',
      email: 'info@capital-lights.com',
      rights: '© 2024 Adhwa\' Al Asima Electromechanical Co. All rights reserved.',
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
      tagline: 'مقاول كهروميكانيك الدرجة الأولى — في خدمة المملكة منذ 1967م.',
      company: 'شركة أضواء العاصمة للمقاولات الكهروميكانيكية',
      quickLinks: 'روابط سريعة',
      contact: 'تواصل معنا',
      address: 'الرياض، المملكة العربية السعودية',
      phone: '+966 11 000 0000',
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
