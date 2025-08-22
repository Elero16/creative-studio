// Кастомный курсор
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
    
    gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3
    });
});

// Hover эффекты для кнопок
const buttons = document.querySelectorAll('.cta-button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(cursorFollower, {
            scale: 2,
            opacity: 0.3,
            duration: 0.3
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(cursorFollower, {
            scale: 1,
            opacity: 1,
            duration: 0.3
        });
    });
});
