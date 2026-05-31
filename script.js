'use strict';

/* ==========================================
   Translations (i18n)
   All visible text in both English and Arabic.
   Elements in the HTML use data-i18n="key" to
   reference entries here; applyLang() swaps them.
   ========================================== */

const i18n = {
  en: {
    skip: 'Skip to main content',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_experience: 'Experience',
    nav_contact: 'Contact',
    hero_badge: 'Available for opportunities',
    hero_greeting: "Hi, I'm Mohamed 👋",
    hero_name: 'Mohamed Elkamary',
    hero_role: 'Senior Frontend Engineer',
    hero_tagline: 'Architecting scalable SaaS platforms with Next.js, React, and TypeScript.',
    hero_cta_projects: 'View Projects',
    hero_cta_contact: 'Get in Touch',
    about_label: 'About',
    about_heading: 'About Me',
    about_p1: 'Senior Frontend Engineer with 5+ years of experience architecting production-grade SaaS platforms using Next.js, React, and TypeScript.',
    about_p2: 'Currently leading frontend architecture for a SaaS product suite — including dashboards, marketing websites, and embeddable widget libraries used across multiple client sites.',
    about_p3: 'Passionate about clean architecture, performance optimization, accessibility, and design systems. I focus on writing code that other engineers will thank me for later.',
    stat_years: 'Years Experience',
    stat_companies: 'Companies',
    stat_projects: 'Projects Shipped',
    skills_label: 'Stack',
    skills_heading: 'Tech Stack',
    skill_cat_frameworks: 'Frameworks & Libraries',
    skill_cat_languages: 'Languages',
    skill_cat_styling: 'Styling',
    skill_cat_state: 'State Management',
    skill_cat_arch: 'Architecture',
    skill_cat_tools: 'Tools & Process',
    projects_label: 'Work',
    projects_heading: 'Featured Projects',
    proj1_title: 'Wittify.ai SaaS Platform',
    proj1_role: 'Architecture Lead',
    proj1_desc: 'Integrated product suite including dashboard, marketing website, and embeddable chat widget library.',
    proj2_title: 'Jobzella Job Marketplace',
    proj2_role: 'Senior FE Engineer',
    proj2_desc: 'Responsive job listings and admin dashboard serving job seekers and recruiters across MENA.',
    proj3_title: 'Aqar Map Real Estate Platform',
    proj3_role: 'Frontend Engineer',
    proj3_desc: 'Interactive maps and admin dashboard for Egyptian and Saudi real estate markets.',
    proj4_title: 'Fekretak Sherketak (GAFI)',
    proj4_role: 'Frontend Engineer',
    proj4_desc: "Course booking, consultation scheduling, and user dashboards for Egypt's entrepreneurship initiative.",
    exp_label: 'Career',
    exp_heading: 'Experience',
    exp1_role: 'Senior Frontend Engineer',
    exp1_period: 'Feb 2025 – Present',
    exp1_location: 'Cairo, Egypt · Hybrid',
    exp1_b1: 'Leading frontend architecture for a multi-product SaaS suite, including dashboards, marketing sites, and an embeddable widget library.',
    exp1_b2: 'Established component systems and coding standards adopted across the entire frontend team.',
    exp1_b3: 'Drove performance optimization initiatives reducing Core Web Vitals scores and improving user engagement.',
    exp2_role: 'Senior Frontend Engineer',
    exp2_period: 'Jan 2024 – Feb 2025',
    exp2_location: 'Egypt · Remote',
    exp2_b1: 'Built and maintained responsive job listing platform and recruiter admin dashboard for MENA markets.',
    exp2_b2: 'Integrated complex REST APIs and improved data-fetching patterns with React Query.',
    exp2_b3: 'Refactored legacy codebase to TypeScript, significantly reducing runtime errors and improving DX.',
    exp3_role: 'Frontend Engineer',
    exp3_period: 'Feb 2023 – Jan 2024',
    exp3_location: 'Egypt',
    exp3_b1: 'Developed multiple client-facing web applications including the GAFI Fekretak Sherketak initiative.',
    exp3_b2: 'Implemented real estate map interfaces and admin dashboards for Aqar Map.',
    exp3_b3: 'Collaborated closely with design and product teams to deliver pixel-perfect, accessible UIs.',
    exp4_role: 'Frontend Engineer',
    exp4_period: 'Jan 2021 – Jan 2023',
    exp4_location: 'Egypt',
    exp4_b1: 'Built production React applications from the ground up, contributing across the full frontend stack.',
    exp4_b2: 'Gained deep experience with state management, component architecture, and API integration.',
    exp4_b3: 'Delivered responsive, cross-browser-compatible interfaces meeting demanding client specifications.',
    contact_label: 'Contact',
    contact_heading: "Let's Build Something Great",
    contact_description: "Open to connecting with engineers, product builders, and teams working on ambitious SaaS products. Whether you have a role in mind, a project idea, or just want to connect — my inbox is open.",
    contact_email_label: 'Email',
    contact_phone_label: 'Phone',
    contact_download_cv: 'Download CV',
    footer_copy: '© 2026 Mohamed Elkamary. Built with care.',
  },
  ar: {
    skip: 'انتقل إلى المحتوى الرئيسي',
    nav_about: 'عني',
    nav_skills: 'المهارات',
    nav_projects: 'المشاريع',
    nav_experience: 'الخبرات',
    nav_contact: 'تواصل',
    hero_badge: 'متاح للفرص الجديدة',
    hero_greeting: 'أهلاً، أنا محمد 👋',
    hero_name: 'محمد القمري',
    hero_role: 'مهندس واجهات أمامية أول',
    hero_tagline: 'بناء منصات SaaS قابلة للتطوير باستخدام Next.js وReact وTypeScript.',
    hero_cta_projects: 'استعرض المشاريع',
    hero_cta_contact: 'تواصل معي',
    about_label: 'عني',
    about_heading: 'من أنا',
    about_p1: 'مهندس واجهات أمامية أول بخبرة تزيد عن 5 سنوات في تصميم منصات SaaS باستخدام Next.js وReact وTypeScript.',
    about_p2: 'أقود حاليًا هندسة الواجهة الأمامية لمجموعة منتجات SaaS — تشمل لوحات التحكم والمواقع التسويقية ومكتبات الويدجت المدمجة.',
    about_p3: 'شغوف بالبنية النظيفة، وتحسين الأداء، وإمكانية الوصول، وأنظمة التصميم. أكتب كودًا يشكر عليه المهندسون لاحقًا.',
    stat_years: 'سنوات خبرة',
    stat_companies: 'شركات',
    stat_projects: 'مشاريع مُنجزة',
    skills_label: 'التقنيات',
    skills_heading: 'المهارات التقنية',
    skill_cat_frameworks: 'الأطر والمكتبات',
    skill_cat_languages: 'لغات البرمجة',
    skill_cat_styling: 'التنسيق',
    skill_cat_state: 'إدارة الحالة',
    skill_cat_arch: 'الهندسة البرمجية',
    skill_cat_tools: 'الأدوات والعمليات',
    projects_label: 'الأعمال',
    projects_heading: 'أبرز المشاريع',
    proj1_title: 'منصة Wittify.ai',
    proj1_role: 'قائد الهندسة الأمامية',
    proj1_desc: 'مجموعة منتجات متكاملة تشمل لوحة التحكم والموقع التسويقي ومكتبة ويدجت الدردشة المدمجة.',
    proj2_title: 'سوق وظائف Jobzella',
    proj2_role: 'مهندس أمامي أول',
    proj2_desc: 'منصة إعلانات وظيفية متجاوبة ولوحة تحكم للمسؤولين تخدم باحثي العمل والمُوظِّفين في منطقة الشرق الأوسط.',
    proj3_title: 'منصة عقار ماب للعقارات',
    proj3_role: 'مهندس واجهات أمامية',
    proj3_desc: 'خرائط تفاعلية ولوحة تحكم للإدارة لأسواق العقارات في مصر والمملكة العربية السعودية.',
    proj4_title: 'فكرتك شركتك (هيئة الاستثمار)',
    proj4_role: 'مهندس واجهات أمامية',
    proj4_desc: 'حجز دورات، وجدولة استشارات، ولوحات مستخدمين لمبادرة ريادة الأعمال المصرية.',
    exp_label: 'المسيرة المهنية',
    exp_heading: 'الخبرات',
    exp1_role: 'مهندس واجهات أمامية أول',
    exp1_period: 'فبراير 2025 – حتى الآن',
    exp1_location: 'القاهرة، مصر · عمل مختلط',
    exp1_b1: 'قيادة هندسة الواجهة الأمامية لمجموعة منتجات SaaS متعددة تشمل لوحات التحكم والمواقع التسويقية ومكتبة ويدجت مدمجة.',
    exp1_b2: 'وضع أنظمة المكونات ومعايير الكتابة البرمجية المعتمدة عبر الفريق.',
    exp1_b3: 'قيادة مبادرات تحسين الأداء وتحسين مقاييس Core Web Vitals.',
    exp2_role: 'مهندس واجهات أمامية أول',
    exp2_period: 'يناير 2024 – فبراير 2025',
    exp2_location: 'مصر · عن بُعد',
    exp2_b1: 'بناء وصيانة منصة إعلانات وظيفية متجاوبة ولوحة تحكم لأسواق الشرق الأوسط.',
    exp2_b2: 'دمج REST APIs معقدة وتحسين أنماط جلب البيانات باستخدام React Query.',
    exp2_b3: 'إعادة كتابة قاعدة الكود القديمة بـ TypeScript، مما قلل أخطاء وقت التشغيل بشكل ملحوظ.',
    exp3_role: 'مهندس واجهات أمامية',
    exp3_period: 'فبراير 2023 – يناير 2024',
    exp3_location: 'مصر',
    exp3_b1: 'تطوير تطبيقات ويب للعملاء بما فيها مبادرة فكرتك شركتك.',
    exp3_b2: 'تنفيذ واجهات الخرائط العقارية ولوحات التحكم الإدارية لمنصة عقار ماب.',
    exp3_b3: 'التعاون مع فرق التصميم والمنتج لتسليم واجهات سهلة الوصول.',
    exp4_role: 'مهندس واجهات أمامية',
    exp4_period: 'يناير 2021 – يناير 2023',
    exp4_location: 'مصر',
    exp4_b1: 'بناء تطبيقات React للإنتاج من الصفر والمساهمة في كامل مكدس الواجهة الأمامية.',
    exp4_b2: 'اكتساب خبرة عميقة في إدارة الحالة وهيكلة المكونات ودمج APIs.',
    exp4_b3: 'تسليم واجهات متجاوبة ومتوافقة مع المتصفحات وفق مواصفات العملاء.',
    contact_label: 'تواصل',
    contact_heading: 'هيا نبني شيئًا رائعًا',
    contact_description: 'أرحب بالتواصل مع المهندسين وأصحاب المنتجات والفرق العاملة على منتجات SaaS طموحة. سواء كان لديك دور في ذهنك، أو فكرة مشروع، أو تريد التواصل فقط — بريدي الإلكتروني مفتوح.',
    contact_email_label: 'البريد الإلكتروني',
    contact_phone_label: 'الهاتف',
    contact_download_cv: 'تحميل السيرة الذاتية',
    footer_copy: '© 2026 محمد القمري. صُنع بعناية.',
  },
};


/* ==========================================
   State
   ========================================== */

let currentLang = localStorage.getItem('lang') || 'en';


/* ==========================================
   Theme Management
   ========================================== */

const themeToggle = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

/**
 * Apply a theme, update the toggle icon, and persist the choice.
 * @param {'light'|'dark'} theme
 */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const isDark = theme === 'dark';
  iconSun.style.display = isDark ? 'none' : 'block';
  iconMoon.style.display = isDark ? 'block' : 'none';
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

// Sync the toggle icon with whatever theme was applied before first paint
applyTheme(document.documentElement.getAttribute('data-theme') || 'light');

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});


/* ==========================================
   Language Switching (EN / AR + RTL)
   ========================================== */

const langToggle = document.getElementById('lang-toggle');

/**
 * Switch the UI language, flip dir/lang on <html>, and re-render all
 * elements that carry a data-i18n attribute.
 * @param {'en'|'ar'} lang
 */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';
  langToggle.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'Switch to Arabic');

  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
}

applyLang(currentLang);

langToggle.addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'ar' : 'en');
});


/* ==========================================
   Mobile Menu
   ========================================== */

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
  mobileMenu.classList.toggle('open', !expanded);
});

// Close drawer when any nav link is tapped
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
  });
});


/* ==========================================
   Navbar Scroll Border
   ========================================== */

const navbar = document.getElementById('navbar');

const scrollHandler = () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
};

window.addEventListener('scroll', scrollHandler, { passive: true });
scrollHandler(); // run once on init to handle a pre-scrolled page


/* ==========================================
   Animations & Scroll Effects
   ========================================== */

// Checked once — shared by every animation branch below.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// --- Fade-in on scroll ---
if (!prefersReducedMotion) {
  // rootMargin bottom offset prevents elements triggering right at the viewport edge
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target); // fire once, then stop watching
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
} else {
  // Skip animation entirely — show all content immediately
  document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
}

// --- Stat card staggered reveal + count-up ---

/**
 * Animate a numeric element from 0 to `target` over `duration` ms.
 * Uses a cubic ease-out curve so the count decelerates near the end.
 * @param {HTMLElement} el       - element whose textContent will be updated
 * @param {number}      target   - final numeric value
 * @param {string}      suffix   - string appended after the number, e.g. "+"
 * @param {number}      duration - animation length in milliseconds
 */
function countUp(el, target, suffix, duration) {
  const startTime = performance.now();
  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
    el.textContent = Math.round(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const statCards = document.querySelectorAll('.stat-card');

if (!prefersReducedMotion) {
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const card = entry.target;
      const index = Array.from(statCards).indexOf(card);
      // Stagger each card 100ms after the previous one
      setTimeout(() => {
        card.classList.add('visible');
        const numEl = card.querySelector('.stat-number');
        const target = parseInt(card.dataset.count, 10);
        const suffix = card.dataset.suffix || '';
        countUp(numEl, target, suffix, 1000);
      }, index * 100);
      statObserver.unobserve(card);
    });
  }, { threshold: 0.2 });

  statCards.forEach(card => statObserver.observe(card));
} else {
  statCards.forEach(card => card.classList.add('visible'));
}


/* ==========================================
   Icons
   ========================================== */

// Render all data-lucide elements into inline SVGs.
// Must run after the DOM is ready, which it is since this file is deferred.
lucide.createIcons();
