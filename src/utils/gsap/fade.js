import gsap from "gsap";

export function fadeIn(element) {
    gsap.to(element, {
        duration: 1,
        opacity: 1,
        ease: 'power4.out',
        stagger: {
            amount: .3
        }
    });
};

export function fadeOut(element) {
    gsap.to(element, {
        duration: 1,
        opacity: 0,
        ease: 'power4.out'
    });
};