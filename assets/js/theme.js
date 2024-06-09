
var ourWorks1 = new Swiper(".ourWorks1", {
	freeMode: true,
	direction: "vertical",
	loop: true,
	allowTouchMove: true,
	autoplay: {
		delay: 0,
		disableOnInteraction: true,
		pauseOnMouseEnter: true,
		// pauseOnHover: true,
	},
	slidesPerView: 2,
	spaceBetween: 10,
	speed: 5000,
	breakpoints: {
		0: {
			spaceBetween: 10,
		},
		480: {
			spaceBetween: 15,
		},
		767: {
			spaceBetween: 20,
		},
		992: {
			spaceBetween: 20,
		}
	},
});
var ourWorks2 = new Swiper(".ourWorks2", {
	freeMode: true,
	direction: 'vertical',
	loop: true,
	allowTouchMove: true,
	autoplay: {
		delay: 0,
		disableOnInteraction: true,
		reverseDirection: true,
		pauseOnMouseEnter: true,
		// pauseOnHover: true,
	},
	slidesPerView: 2,
	spaceBetween: 10,
	speed: 5000,
	breakpoints: {
		0: {
			spaceBetween: 10,
		},
		480: {
			spaceBetween: 15,
		},
		767: {
			spaceBetween: 20,
		},
		992: {
			spaceBetween: 20,
		}
	},
});
var ourClients = new Swiper(".ourClients", {
	freeMode: true,
	loop: true,
	allowTouchMove: true,
	autoplay: {
		delay: 0,
		// disableOnInteraction: false,
		reverseDirection: true,
	},
	slidesPerView: 5.5,
	spaceBetween: 10,
	speed: 8000,
	// pauseOnMouseEnter: true,
	breakpoints: {
		0: {
			spaceBetween: 10,
		},
		480: {
			spaceBetween: 15,
		},
		767: {
			spaceBetween: 20,
		},
		992: {
			spaceBetween: 20,
		}
	},
});

/* $(".ourWorks1 .swiper-slide").mouseenter(function() {
    // ourWorks1.autoplay.stop();
    ourWorks1.stopAutoplay();
    // console.log('slider stopped');
  });

  $(".ourWorks1 .swiper-slide").mouseleave(function() {
    // ourWorks1.autoplay.start();
    ourWorks1.startAutoplay();
    // console.log('slider started again');
  });
$(".ourWorks2 .swiper-slide").mouseenter(function() {
    // ourWorks2.autoplay.stop();
    ourWorks2.stopAutoplay();
    // console.log('slider stopped');
  });

  $(".ourWorks2 .swiper-slide").mouseleave(function() {
    // ourWorks2.autoplay.start();
    ourWorks2.startAutoplay();
    // console.log('slider started again');
  }); */



  
  document.addEventListener("DOMContentLoaded", function() {
	gsap.registerPlugin(ScrollTrigger);
	const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
	const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")


	gsap.set(photos, {yPercent:101})

	const allPhotos = gsap.utils.toArray(".desktopPhoto")


	// create
	let mm = gsap.matchMedia();

	// add a media query. When it matches, the associated function will run
	mm.add("(min-width: 600px)", () => {

		// this setup code only runs when viewport is at least 600px wide
		// console.log("desktop")
			
		ScrollTrigger.create({
			trigger:".gallery",
			start:"top top",
			end:"bottom bottom",
			pin:".right",
			// immediateRender: false,
			preventOverlaps: true,
			toggleActions:"play none none reverse",
			markers:false
		})

		//create scrolltrigger for each details section
		//trigger photo animation when headline of each details section 
		//reaches 80% of window height
		details.forEach((detail, index)=> {

			let headline = detail.querySelector("h1")
			let animation = gsap.timeline()
			.to(photos[index], {yPercent:0})
			.set(allPhotos[index], {autoAlpha:0})
			ScrollTrigger.create({
				trigger:headline,
				start:"top 80%",
				end:"top 50%",
				animation:animation,
			immediateRender: false,
			preventOverlaps: true,
			toggleActions:"play none none reverse",
				scrub:true,
				markers:false
			})
		})
		
		
	
		return () => { // optional
			// custom cleanup code here (runs when it STOPS matching)
			console.log("mobile")
		};
	});
	/* window.addEventListener("resize", function() {
        ScrollTrigger.refresh();
	}); */
  })





//HEADER SECTION
var menuToggle = document.querySelector(".menuToggle");
var menuToggleClose = document.querySelector(".closeNav");

/* var menuBar = gsap.timeline();

menuBar.to('.bar-1', 0.5,{
	attr:{d: "M8,2 L2,8"},
	x:1,
	ease: Power2.easeInOut
}, 'start')

menuBar.to('.bar-2', 0.5,{
	autoAlpha: 0
}, 'start')

menuBar.to('.bar-3', 0.5,{
	attr:{d: "M8,8 L2,2"},
	x:1,
	ease: Power2.easeInOut
}, 'start')

menuBar.reverse(); */


var tl = gsap.timeline({ paused: true});

tl.to('.fullpage-menu', {
	duration:0,
	display: "block",
	ease: 'Expo.easeInOut',
});

tl.from('.menu-bg span', {
	duration:1,
	x:"100%",
	stagger: 0.1,
	ease: 'Expo.easeInOut'
});

tl.from('.main-menu li a', {
	duration:1.5,
	y:"100%",
	stagger: 0.2,
	ease: 'Expo.easeInOut'
} , "-=0.5");

tl.from('.social-links li', {
	duration:1,
	y:"-100%",
	opacity:0,
	stagger: 0.1,
	ease: 'Expo.easeInOut'
} , "-=0.5");

tl.reverse();

menuToggle.addEventListener('click', function(){
	// menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
});
menuToggleClose.addEventListener('click', function(){
	// menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
});




  	const gall = document.querySelectorAll('.clintList')
  	gall.forEach((galEl)=>{
		const triggerRef = document.querySelectorAll('.clients')
		const gallWidth = galEl.offsetWidth
		let ammountToScroll = gallWidth - window.innerWidth
		// console.dir(sectionRef.current);
		console.log(gallWidth, ammountToScroll)


		const pin = gsap.to(galEl, {
			x: - ammountToScroll,
			// x: - (gallWidth - ammountToScroll),
			// x: "-1920px",
			// translateX: - gallWidth,
			ease: 'none',
			// duration: 5,
			scrollTrigger: {
				trigger: triggerRef,
				// start: "top top",
				start: "top center",
				// end: "300 top",
				end: "+=" + ammountToScroll,
				// scrub: .8,
				scrub: true,
				pin: true,
				markers: true,
			}
		  })
	})



