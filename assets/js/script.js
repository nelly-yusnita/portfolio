// ===== SHOW MENU ===== //
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () =>{
	navMenu.classList.toggle('show-menu');
	menuButton.classList.toggle('close-menu')
})
// ===== end show menu ===== //

// ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	const navMenu = document.getElementById('nav-menu')

	navMenu.classList.remove('show-menu')
	menuButton.classList.remove('close-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
// ===== end remove menu mobile ===== //

/* ===== SCROLL SECTIONS ACTIVE LINK ===== */
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive);
// ===== end scroll sections active link ===== //

// ===== CHANGE BACKGROUND HEADER ===== //
function scrollHeader(){
	const header = document.getElementById('header')

	if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
// ===== end change background header ===== //

// ===== DARK LIGHT THEME ===== //
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)

	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})
// ===== end dark light theme ===== //

// ===== 
const navLanguages = document.querySelector('.nav__languages');
const languageButton = document.querySelectorAll('.language__button');

// Home //
const homeSubtitle = document.querySelector('.home__subtitle');
const homeButton = document.querySelector('.home__button');

// About //
const aboutSection = document.querySelector('.about__section');
const aboutTitle = document.querySelector('.about__title');

languageButton.forEach(el =>{
	el.addEventListener('click', ()=>{
		navLanguages.querySelector('.active-language').classList.remove('active-language');
		el.classList.add('active-language');

		const attr = el.getAttribute('language');

		// Home //
		homeSubtitle.textContent = data[attr].home__subtitle;
		homeButton.textContent = data[attr].home__button;

		// About
		aboutSection.textContent = data[attr].about__section;
		aboutTitle.textContent = data[attr].about__title;
	});
});

var data = {
	"english":{
		// Home //
		"home__subtitle": "Hello, My name is",
		"home__button": "Contact Me",

		// About //
		"about__section" : "About Me",
		"about__title": "Hey! My name is Nelly. I am a freelance frontend developer based in Medan, Indonesia."
	},
	"indonesia":{
		// Home //
		"home__subtitle": "Halo, Nama Saya",
		"home__button": "Kontak Saya",

		// About //
		"about__section" : "Tentang",
		"about__title": "Hai! Nama Saya Nelly. Saya seorang freelance frontend developer dari Medan, Indonesia."
	}
}
// ===== end languages ===== //

// ===== QUALIFICATION TABS ===== //
const tabs = document.querySelectorAll('[data-target]'),
		tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
	tab.addEventListener('click', () =>{
		const target = document.querySelector(tab.dataset.target)

		tabContents.forEach(tabContent =>{
			tabContent.classList.remove('qualification__active')
		})
		target.classList.add('qualification__active')

		tabs.forEach(tab =>{
			tab.classList.remove('qualification__active')
		})
		tab.classList.add('qualification__active')
	})
})
// ===== end qualification tabs ===== //

// ===== SHOW SCROLL UP ===== //
function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');
	
	if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
// ===== end show scroll up ===== //

// ===== GSAP ANIMATION ===== //
// Overlay //
TweenMax.to(".overlay__title", 2, {
   opacity: 0,
   y: -60,
   ease: Expo.easeInOut
})
TweenMax.to(".overlay__subtitle", 2, {
   delay: .3,
   opacity: 0,
   y: -60,
   ease: Expo.easeInOut
})
TweenMax.to(".overlay", 2, {
   delay: 1,
   height: "0",
   ease: Expo.easeInOut
})
// ===== end gsap animation ===== //



