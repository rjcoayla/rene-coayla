/**
 * Lumivox Interactions — IBM MX-inspired
 * - Header scroll state
 * - Mobile hamburger menu
 * - Scroll-based fade-up animations
 * - News panel pagination (auto-rotate + dot navigation)
 * - Accordion with image switching
 */

const translations = {
    en: {
        navAbout: "About",
        navServices: "Services",
        navSectors: "Sectors",
        navInsights: "Insights",
        navLetsTalk: "Let's Talk",
        heroEyebrow: "ARKHE Strategic Intelligence",
        heroTitle: "Modern solutions,<br>real results.",
        heroBody: "Architecture of data-driven decisions",
        heroCta1: "Request Strategic Diagnosis &nbsp;→",
        heroCta2: "View Professional Profile &nbsp;→",
        newsTitle: "Latest Updates",
        aboutEyebrow: "Architect of Strategic Intelligence",
        aboutBody: "I am a strategic intelligence specialist focused on digital systems, data-driven decision making, and modern organizational optimization. My mission is to architect systems that bring clarity and precision to complex institutional environments.",
        svcHeading: "What I Do",
        svcSub: "Providing specialized consulting to engineer strategic advantages through data, scalable processes, and intelligent frameworks.",
        whoIHelp: "Who I Help - Sector:",
        sector1: "Public Institutions",
        sector2: "Private Companies",
        sector3: "Industrial & Mining Sector",
        sector4: "Growing Organizations Seeking Modernization",
        insightHeadline: "Testimonials & Professional Validation",
        insightSub: "Perspectives and objective feedback from industry leaders and professionals.",
        contactHeading: "Let’s Build Strategic Intelligence Together",
        contactBtn: "Schedule Strategic Conversation &nbsp;→",
        svc1Title: "Strategic Data & Intelligence Consulting",
        svc1Prob: "<strong>Problem:</strong> Disconnected data silos and lack of unified strategy.",
        svc1Ben: "<strong>Benefit:</strong> Aligns data assets directly with institutional goals.",
        svc1Out: "<strong>Outcome:</strong> A cohesive ecosystem that empowers proactive leadership.",
        svc2Title: "Dashboard & Monitoring System Design",
        svc2Prob: "<strong>Problem:</strong> Complex, hard-to-read metrics delaying critical responses.",
        svc2Ben: "<strong>Benefit:</strong> Transforms raw data into clear, intuitive visual control panels.",
        svc2Out: "<strong>Outcome:</strong> Real-time, actionable insights at a glance for executives.",
        svc3Title: "Digital Process Optimization",
        svc3Prob: "<strong>Problem:</strong> Inefficient, manual workflows draining resources and time.",
        svc3Ben: "<strong>Benefit:</strong> Streamlines operations using modern, robust digital frameworks.",
        svc3Out: "<strong>Outcome:</strong> Scalable, automated processes that radically increase agility.",
        svc4Title: "Applied AI for Decision Support",
        svc4Prob: "<strong>Problem:</strong> Uncertainty and risk in high-stakes institutional scenarios.",
        svc4Ben: "<strong>Benefit:</strong> Leverages algorithmic intelligence to predict trends and mitigate risks.",
        svc4Out: "<strong>Outcome:</strong> Data-backed confidence and precision in every strategic move.",
        svc5Title: "Institutional & Business Strategic Diagnosis",
        svc5Prob: "<strong>Problem:</strong> Lack of clarity on organizational maturity and structural gaps.",
        svc5Ben: "<strong>Benefit:</strong> Provides a comprehensive audit of your strategic and technical standing.",
        svc5Out: "<strong>Outcome:</strong> A prioritized, actionable roadmap for targeted modernization.",
        svcCtaTitle: "Ready to Transform?",
        svcCtaBody: "Let's discuss how we can architect your organization's intelligence.",
        svcCtaBtn: "Schedule Conversation"
    },
    es: {
        navAbout: "Acerca de",
        navServices: "Servicios",
        navSectors: "Sectores",
        navInsights: "Perspectivas",
        navLetsTalk: "Hablemos",
        heroEyebrow: "ARKHE Inteligencia Estratégica",
        heroTitle: "Soluciones modernas,<br>resultados reales.",
        heroBody: "Arquitectura de decisiones basadas en datos",
        heroCta1: "Solicitar Diagnóstico Estratégico &nbsp;→",
        heroCta2: "Ver Perfil Profesional &nbsp;→",
        newsTitle: "Últimas Actualizaciones",
        aboutEyebrow: "Arquitecto de Inteligencia Estratégica",
        aboutBody: "Soy un especialista en inteligencia estratégica enfocado en sistemas digitales, toma de decisiones basada en datos y optimización organizacional moderna. Mi misión es diseñar sistemas que aporten claridad y precisión a entornos institucionales complejos.",
        svcHeading: "Lo Que Hago",
        svcSub: "Proveyendo consultoría especializada para diseñar ventajas estratégicas a través de datos, procesos escalables y marcos inteligentes.",
        whoIHelp: "A Quién Ayudo - Sector:",
        sector1: "Instituciones Públicas",
        sector2: "Empresas Privadas",
        sector3: "Sector Industrial y Minero",
        sector4: "Organizaciones en Crecimiento Buscando Modernización",
        insightHeadline: "Testimonios y Validación Profesional",
        insightSub: "Perspectivas y retroalimentación objetiva de líderes y profesionales de la industria.",
        contactHeading: "Construyamos Inteligencia Estratégica Juntos",
        contactBtn: "Agendar Conversación Estratégica &nbsp;→",
        svc1Title: "Consultoría Estratégica en Datos e Inteligencia",
        svc1Prob: "<strong>Problema:</strong> Silos de datos desconectados y falta de estrategia unificada.",
        svc1Ben: "<strong>Beneficio:</strong> Alinea activos de datos directamente con metas institucionales.",
        svc1Out: "<strong>Resultado:</strong> Un ecosistema cohesivo que empodera el liderazgo proactivo.",
        svc2Title: "Diseño de Dashboards y Sistemas de Monitoreo",
        svc2Prob: "<strong>Problema:</strong> Métricas complejas que retrasan respuestas críticas.",
        svc2Ben: "<strong>Beneficio:</strong> Transforma datos crudos en paneles visuales claros e intuitivos.",
        svc2Out: "<strong>Resultado:</strong> Análisis procesables en tiempo real para ejecutivos.",
        svc3Title: "Optimización de Procesos Digitales",
        svc3Prob: "<strong>Problema:</strong> Flujos ineficientes manuales que consumen tiempo y recursos.",
        svc3Ben: "<strong>Beneficio:</strong> Agiliza operaciones usando marcos digitales modernos.",
        svc3Out: "<strong>Resultado:</strong> Procesos automatizados escalables que aumentan radicalmente la agilidad.",
        svc4Title: "IA Aplicada para Soporte de Decisiones",
        svc4Prob: "<strong>Problema:</strong> Incertidumbre y riesgo en escenarios institucionales de alto impacto.",
        svc4Ben: "<strong>Beneficio:</strong> Usa inteligencia algorítmica para predecir tendencias y mitigar riesgos.",
        svc4Out: "<strong>Resultado:</strong> Confianza respaldada por datos y precisión en cada movimiento estratégico.",
        svc5Title: "Diagnóstico Estratégico Institucional y Empresarial",
        svc5Prob: "<strong>Problema:</strong> Falta de claridad en madurez y brechas estructurales.",
        svc5Ben: "<strong>Beneficio:</strong> Otorga una auditoría de tu posición estratégica y técnica.",
        svc5Out: "<strong>Resultado:</strong> Hoja de ruta priorizada para modernización enfocada.",
        svcCtaTitle: "¿Listo para Transformar?",
        svcCtaBody: "Hablemos sobre cómo podemos estructurar la inteligencia de tu organización.",
        svcCtaBtn: "Agendar Conversación"
    }
};

let currentLang = 'es';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const btnEn = document.getElementById('btn-en');
    const btnEs = document.getElementById('btn-es');
    if (btnEn && btnEs) {
        btnEn.style.color = lang === 'en' ? 'var(--clr-gold)' : 'var(--clr-slate)';
        btnEs.style.color = lang === 'es' ? 'var(--clr-gold)' : 'var(--clr-slate)';
    }

    localStorage.setItem('arkhe_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {

    // Initialize language
    const storedLang = localStorage.getItem('arkhe_lang');
    if (storedLang && (storedLang === 'en' || storedLang === 'es')) {
        setLanguage(storedLang);
    } else {
        setLanguage('es'); // Default to Spanish if no preference or invalid
    }

    // Language switch buttons
    document.getElementById('btn-en')?.addEventListener('click', () => setLanguage('en'));
    document.getElementById('btn-es')?.addEventListener('click', () => setLanguage('es'));

    /* ─── 1. Header Scroll State ─────────────────────────── */
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });


    /* ─── 2. Hamburger / Mobile Nav ──────────────────────── */
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mainNav = document.getElementById('mainNav');

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('open');
            hamburgerBtn.setAttribute('aria-expanded', isOpen);
        });

        // Close on nav link click
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('open');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }


    /* ─── 3. Fade-Up Intersection Observer ──────────────── */
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px', threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


    /* ─── 4. News Panel — Rotation & Dots ───────────────── */
    const newsList = document.querySelectorAll('.news-item');
    const newsDots = document.querySelectorAll('.news-dot');
    let currentNews = 0;
    let newsTimer;

    function showNews(index) {
        newsList.forEach((item, i) => item.classList.toggle('active', i === index));
        newsDots.forEach((dot, i) => dot.classList.toggle('active', i === index));
        currentNews = index;
    }

    function nextNews() {
        showNews((currentNews + 1) % newsList.length);
    }

    function startNewsTimer() {
        newsTimer = setInterval(nextNews, 5000);
    }

    function resetNewsTimer() {
        clearInterval(newsTimer);
        startNewsTimer();
    }

    newsDots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showNews(i);
            resetNewsTimer();
        });
    });

    if (newsList.length) {
        showNews(0);
        startNewsTimer();
    }


    /* ─── 5. Accordion with Image Panel ─────────────────── */
    const accordionItems = document.querySelectorAll('.accordion-item');
    const accImages = document.querySelectorAll('.acc-img');

    function activateAccordion(item) {
        const targetImg = item.dataset.img;

        // Update accordion items
        accordionItems.forEach(i => {
            const isActive = i === item;
            i.classList.toggle('active', isActive);
            const icon = i.querySelector('.accordion-icon');
            if (icon) {
                // chevron up for active, down for inactive
                icon.querySelector('polyline').setAttribute(
                    'points',
                    isActive ? '18 15 12 9 6 15' : '6 9 12 15 18 9'
                );
            }
        });

        // Update images
        accImages.forEach(img => {
            img.classList.toggle('active', img.classList.contains(targetImg));
        });
    }

    accordionItems.forEach(item => {
        const btn = item.querySelector('.accordion-btn');
        if (btn) {
            btn.addEventListener('click', () => activateAccordion(item));
        }
    });


    /* ─── 6. Smooth Anchor Scroll ────────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = header ? header.getBoundingClientRect().height : 54;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

});
