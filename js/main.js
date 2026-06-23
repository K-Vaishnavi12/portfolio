/* ============================================================
   KATULA VAISHNAVI — PORTFOLIO JS
   ============================================================ */

/* Prevent browser scroll-restoration from jumping mid-page on load */
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

(function () {
    'use strict';

    /* ---------- NAV scroll state ---------- */
    const nav = document.querySelector('.nav');
    const onScroll = () => {
        if (!nav) return;
        if (window.scrollY > 8) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Smooth scroll for in-page anchors ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const id = a.getAttribute('href');
            if (!id || id === '#') return;
            const el = document.querySelector(id);
            if (!el) return;
            e.preventDefault();
            const top = el.getBoundingClientRect().top + window.scrollY - 70;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    /* ---------- Reveal on scroll ---------- */
    const revealEls = document.querySelectorAll(
        '.hero-intro, .hero-h, .hero-lede, .hero-meta, .hero-easter, .hero-cta, .hero-links, ' +
        '.status-block, ' +
        '.sec-intro, ' +
        '.prose, .exp-item, .work-item, .skill-row, .cert, .edu-item, ' +
        '.contact-h, .contact-sub, .contact-email, .contact-links'
    );
    revealEls.forEach((el, i) => {
        el.classList.add('reveal');
        // gentle stagger for hero elements only
        if (el.closest('.hero')) {
            el.style.transitionDelay = (i * 80) + 'ms';
        }
    });

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(en => {
                if (en.isIntersecting) {
                    en.target.classList.add('in');
                    io.unobserve(en.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(el => io.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('in'));
    }

    /* ---------- Toast helper ---------- */
    const toast = document.getElementById('toast');
    let toastTimer = null;
    function showToast(msg) {
        if (!toast) return;
        toast.textContent = msg;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 3400);
    }

    /* ---------- Resume fallback (missing PDF) ---------- */
    const resumeLink = document.getElementById('resumeLink');
    if (resumeLink) {
        resumeLink.addEventListener('click', async (e) => {
            try {
                const res = await fetch(resumeLink.href, { method: 'HEAD' });
                if (!res.ok) throw new Error('not found');
            } catch (err) {
                e.preventDefault();
                showToast('Resume coming soon — drop assets/resume.pdf into the folder.');
            }
        });
    }

    /* ---------- Year stamp in footer (auto) ---------- */
    const yearEls = document.querySelectorAll('[data-year]');
    yearEls.forEach(el => { el.textContent = new Date().getFullYear(); });

    /* ---------- Console love letter ---------- */
    const css1 = 'font-family:Georgia,serif;font-size:18px;color:#D2533B;font-style:italic;';
    const css2 = 'font-family:monospace;font-size:11px;color:#6B6356;';
    console.log('%cKatula Vaishnavi — built with care.', css1);
    console.log('%cAgentic AI · Hyderabad · github.com/K-Vaishnavi12', css2);

})();
