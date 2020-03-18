import gsap from 'gsap'

//OPEN MENU

export const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
        duration: .8,
        height: 0,
        transformOrigin: 'right top',
        skewY: 2,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.1
        }
    })
}

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
    gsap.to([node1, node2], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
            amount: 0.07
        }
    });
};

//STAGGER THE LINKS TO APPER

export const staggerText = (node1, node2, node3, node4) => {
    gsap.from([node1, node2, node3, node4], {
        duration: 0.8,
        opacity: 0,
        delay: .1,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.5
        }
    })
}

// FADE UP FOR THE ADDITIONAL ON OUR MENU

export const fadeInUp = (node) => {
    gsap.from(node, {
        y: 60,
        duration: 1,
        delay: .2,
        opacity: 0,
        ease: 'power3.inOut'
    })
}

//HOVER ON THE LINK

export const handleHover = e => {
    gsap.to(e.target, {
        duration: 0.3,
        y: 3,
        skewX: 4,
        ease: "power3.inOut"
    })
}

//HOVER OFF THE LINK

export const handleHoverExit = e => {
    gsap.to(e.target, {
        duration: 0.3,
        y: -3,
        skewX: 0,
        ease: "power3.inOut"
    })
}

// ADD VIDEO IMAGE WHEN U HOVER ON

export const handleVideo = (city, target) => {
    gsap.to(target, {
        duration: 0,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        background: `url(${city}) center center`,
    })
    gsap.to(target, {
        duration: .4,
        opacity: 1,
        ease: 'power3.inOut'
    })
    gsap.from(target, {
        duration: .4,
        skewY: 2,
        transformOrigin: 'right top'
    })
}

// REMOVE VIDEO IMAGE WHEN U HOVER ON

export const handleVideoReturn = target => {
    gsap.to(target, {
        duration: .4,
        opacity: 0
    })
}

export const pageTransition = (node1, node2) => {
    gsap.to([node1, node2], 1.4, {
        duration: .8,
        height: 0,
        transformOrigin: 'right top',
        skewY: 15,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.2
        }
    })
}