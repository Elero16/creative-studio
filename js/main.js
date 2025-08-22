// Анимации при скролле
gsap.registerPlugin(ScrollTrigger);

// Анимация заголовков секций
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// Анимация карточек услуг
gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%'
        },
        y: 100,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power2.out'
    });
});

// Параллакс-эффект для плавающих элементов
gsap.utils.toArray('.floating-element').forEach((element, i) => {
    gsap.to(element, {
        scrollTrigger: {
            trigger: '.hero',
            scrub: true
        },
        y: (i + 1) * 50,
        ease: 'none'
    });
});

// Инициализация Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});

// Анимация портфолио при наведении
gsap.utils.toArray('.portfolio-item').forEach(item => {
    const img = item.querySelector('.portfolio-img');
    const overlay = item.querySelector('.portfolio-overlay');
    
    item.addEventListener('mouseenter', () => {
        gsap.to(img, {
            scale: 1.1,
            duration: 0.5,
            ease: 'power2.out'
        });
        
        gsap.to(overlay, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(img, {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out'
        });
        
        gsap.to(overlay, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Анимация героя
gsap.from('.hero h1', {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.hero p', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
});

gsap.from('.cta-button', {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: 'power3.out'
});
