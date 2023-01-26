gsap.registerPlugin(ScrollTrigger);

let d1200 = gsap.matchMedia();
let d1300 = gsap.matchMedia();
let d1550 = gsap.matchMedia();
let d1700 = gsap.matchMedia();

/** WIDTH FROM 1200 **/
d1200.add("(min-width: 1200px)", () =>{

/* CONNECT */
gsap.to(".connect_img", {
    x:750,
    y:100,
    duration: 1.5,
    scrollTrigger: ".connect"
})

gsap.to(".connect_content", {
    x:-500,
    y:200,
    duration: 1.5,
    scrollTrigger: ".connect"
})

/* CONTROL */
gsap.to(".control_img", {
    x:-750,
    y:100,
    duration: 1.5,
    scrollTrigger: ".control"
})

gsap.to(".control_content", {
    x:550,
    y:100,
    duration: 1.5,
    scrollTrigger: ".control"
})

/* REASON */
gsap.to(".reason_img", {
    x:750,
    y:100,
    duration: 1.5,
    scrollTrigger: ".reason"
})

gsap.to(".reason_content", {
    x:-500,
    y:200,
    duration: 1.5,
    scrollTrigger: ".reason"
})

/* ARTIST */
gsap.to(".artist_img", {
    x:-500,
    y:200,
    duration: 1.5,
    scrollTrigger: ".artist"
})

gsap.to(".artist_content", {
    x:550,
    y:100,
    duration: 1.5,
    scrollTrigger: ".artist"
})

/* JOIN */
gsap.to(".join_img", {
    x:750,
    y:200,
    duration: 1.5,
    scrollTrigger: ".join"
})

gsap.to(".join_content", {
    x:-500,
    y:200,
    duration: 1.5,
    scrollTrigger: ".join"
})

})

/** WIDTH FROM 1300 **/

d1300.add("(max-width: 1300px)", () =>{

    /* CONNECT */
    gsap.to(".connect_img", {
        x:750,
        y:100,
        duration: 1.5,
        scrollTrigger: ".connect"
    })
    
    gsap.to(".connect_content", {
        x:-500,
        y:200,
        duration: 1.5,
        scrollTrigger: ".connect"
    })
    
    /* CONTROL */
    gsap.to(".control_img", {
        x:-750,
        y:100,
        duration: 1.5,
        scrollTrigger: ".control"
    })
    
    gsap.to(".control_content", {
        x:550,
        y:100,
        duration: 1.5,
        scrollTrigger: ".control"
    })
    
    /* REASON */
    gsap.to(".reason_img", {
        x:750,
        y:100,
        duration: 1.5,
        scrollTrigger: ".reason"
    })
    
    gsap.to(".reason_content", {
        x:-500,
        y:200,
        duration: 1.5,
        scrollTrigger: ".reason"
    })
    
    /* ARTIST */
    gsap.to(".artist_img", {
        x:-500,
        y:200,
        duration: 1.5,
        scrollTrigger: ".artist"
    })
    
    gsap.to(".artist_content", {
        x:550,
        y:100,
        duration: 1.5,
        scrollTrigger: ".artist"
    })
    
    /* JOIN */
    gsap.to(".join_img", {
        x:750,
        y:200,
        duration: 1.5,
        scrollTrigger: ".join"
    })
    
    gsap.to(".join_content", {
        x:-500,
        y:200,
        duration: 1.5,
        scrollTrigger: ".join"
    })
    
})

/** WIDTH FROM 1550 **/

d1550.add("(min-width: 1550px)", () =>{

    /* CONNECT */
    gsap.to(".connect_img", {
        x:850,
        y:100,
        duration: 1.5,
        scrollTrigger: ".connect"
    })
    
    gsap.to(".connect_content", {
        x:-560,
        y:200,
        duration: 1.5,
        scrollTrigger: ".connect"
    })
    
    /* CONTROL */
    gsap.to(".control_img", {
        x:-840,
        y:100,
        duration: 1.5,
        scrollTrigger: ".control"
    })
    
    gsap.to(".control_content", {
        x:640,
        y:100,
        duration: 1.5,
        scrollTrigger: ".control"
    })
    
    /* REASON */
    gsap.to(".reason_img", {
        x:850,
        y:100,
        duration: 1.5,
        scrollTrigger: ".reason"
    })
    
    gsap.to(".reason_content", {
        x:-560,
        y:200,
        duration: 1.5,
        scrollTrigger: ".reason"
    })
    
    /* ARTIST */
    gsap.to(".artist_img", {
        x:-610,
        y:200,
        duration: 1.5,
        scrollTrigger: ".artist"
    })
    
    gsap.to(".artist_content", {
        x:640,
        y:100,
        duration: 1.5,
        scrollTrigger: ".artist"
    })
    
    /* JOIN */
    gsap.to(".join_img", {
        x:850,
        y:200,
        duration: 1.5,
        scrollTrigger: ".join"
    })
    
    gsap.to(".join_content", {
        x:-560,
        y:200,
        duration: 1.5,
        scrollTrigger: ".join"
    })
    
})

/** WIDTH FROM 1700 **/

d1700.add("(min-width: 1700px)", () =>{

    /* CONNECT */
    gsap.to(".connect_img", {
        x:1000,
        y:100,
        duration: 1.5,
        scrollTrigger: ".connect"
    })
    
    gsap.to(".connect_content", {
        x:-640,
        y:200,
        duration: 1.5,
        scrollTrigger: ".connect"
    })
    
    /* CONTROL */
    gsap.to(".control_img", {
        x:-940,
        y:100,
        duration: 1.5,
        scrollTrigger: ".control"
    })
    
    gsap.to(".control_content", {
        x:800,
        y:100,
        duration: 1.5,
        scrollTrigger: ".control"
    })
    
    /* REASON */
    gsap.to(".reason_img", {
        x:1000,
        y:100,
        duration: 1.5,
        scrollTrigger: ".reason"
    })
    
    gsap.to(".reason_content", {
        x:-640,
        y:200,
        duration: 1.5,
        scrollTrigger: ".reason"
    })
    
    /* ARTIST */
    gsap.to(".artist_img", {
        x:-660,
        y:200,
        duration: 1.5,
        scrollTrigger: ".artist"
    })
    
    gsap.to(".artist_content", {
        x:800,
        y:100,
        duration: 1.5,
        scrollTrigger: ".artist"
    })
    
    /* JOIN */
    gsap.to(".join_img", {
        x:1000,
        y:200,
        duration: 1.5,
        scrollTrigger: ".join"
    })
    
    gsap.to(".join_content", {
        x:-640,
        y:200,
        duration: 1.5,
        scrollTrigger: ".join"
    })
    
})