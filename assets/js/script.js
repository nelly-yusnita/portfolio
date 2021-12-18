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
const aboutDescription = document.querySelector('.about__description');

// Qualification //
const qualificationSection = document.querySelector('.qualification__section');
const qualificationTab1 = document.querySelector('.qualification__tab1');
const qualificationTab2 = document.querySelector('.qualification__tab2');
const qualificationSubtitle1 = document.querySelector('.qualification__content .qualification__data:first-child .qualification__subtitle');
const qualificationMajor = document.querySelector('.qualification__content .qualification__data:nth-child(2) .qualification__title');
const qualificationSubtitle2 = document.querySelector('.qualification__content .qualification__data:nth-child(2) .qualification__subtitle');
const qualificationSubtitle3 = document.querySelector('.qualification__content .qualification__data:nth-child(3) .qualification__subtitle');
const qualificationYear = document.querySelector('.qualification__content:nth-child(2) .qualification__data .qualification__year');
const qualificationTitle = document.querySelector('.qualification__content:nth-child(2) .qualification__data:nth-child(2) .qualification__title');

// Contact //
const contactSection = document.querySelector('.contact__section');
const contactDescription = document.querySelector('.contact__description');
const contactNotes = document.querySelector('.contact__notes');

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
		aboutDescription.textContent = data[attr].about__description;

		// Qualification
		qualificationSection.textContent = data[attr].qualification__section;
		qualificationTab1.textContent = data[attr].qualification__tab1;
		qualificationTab2.textContent = data[attr].qualification__tab2;
		qualificationSubtitle1.textContent = data[attr].qualification__subtitle1;
		qualificationMajor.textContent = data[attr].qualification__major;
		qualificationSubtitle2.textContent = data[attr].qualification__subtitle2;
		qualificationSubtitle3.textContent = data[attr].qualification__subtitle3;
		qualificationYear.textContent = data[attr].qualification__year;
		qualificationTitle.textContent = data[attr].qualification__title;

		// Contact
		contactSection.textContent = data[attr].contact__section;
		contactDescription.textContent = data[attr].contact__description;
		contactNotes.textContent = data[attr].contact__notes;
	});
});

var data = {
	"english":{
		// Home //
		"home__subtitle": "Hello, My name is",
		"home__button": "Contact Me",

		// About //
		"about__section" : "About Me",
		"about__title": "Hey! My name is Nelly. I am a freelance frontend developer based in Medan, Indonesia.",
		"about__description": "I love working on fun little projects especially for individuals and small businesses during my free time. I am open to projects at the moment. Take a look at my portfolio below, if you think I'd be a good match send me an email or message on my social media.",

		// Qualification
		"qualification__section": "Qualification",
		"qualification__tab1": "Education",
		"qualification__tab2": "Work",
		"qualification__major": "Economics Education Department",
		"qualification__subtitle1": "Progate - Course",
		"qualification__subtitle2": "State University of Medan",
		"qualification__subtitle3": "Medan - Course",
		"qualification__year": "2021 - Now",
		"qualification__title": "Economy Teacher",

		// Contact
		"contact__section": "Contact Me",
		"contact__description": "If you have a project that you want to carry out, do not hesitate and tell me what it is, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
		"contact__notes": "Click button fo find me, or click email button to copy my email address."
	},
	"indonesia":{
		// Home //
		"home__subtitle": "Halo, Nama Saya",
		"home__button": "Kontak Saya",

		// About //
		"about__section" : "Tentang",
		"about__title": "Hai! Nama Saya Nelly. Saya seorang freelance frontend developer dari Medan, Indonesia.",
		"about__description": "Saya suka mengerjakan proyek kecil yang menyenangkan terutama untuk individu dan bisnis kecil selama waktu luang saya. Saya terbuka untuk proyek saat ini. Lihatlah portofolio saya di bawah ini, jika menurut Anda saya cocok, kirimkan saya email atau pesan di media sosial saya.",

		// Qualification
		"qualification__section": "Kualifikasi",
		"qualification__tab1": "Pendidikan",
		"qualification__tab2": "Pekerjaan",
		"qualification__major": "Pendidikan Ekonomi",
		"qualification__subtitle1": "Progate - Kursus",
		"qualification__subtitle2": "Universitas Negeri Medan",
		"qualification__subtitle3": "Medan - Kursus",
		"qualification__year": "2021 - Sekarang",
		"qualification__title": "Guru Ekonomi",

		// Contact
		"contact__section": "Kontak",
		"contact__description": "Kalau kamu punya proyek yang ingin terlaksanakan, jangan ragu dan beri tahu saya apa itu, kamu dapat menghubungi saya kapan saja. Apakah kamu memiliki pertanyaan atau hanya ingin menyapa, saya akan mencoba yang terbaik untuk menghubungi kamu kembali!",
		"contact__notes": "Klik tombol agar dapat menghubungi saya, atau klik tombol email untuk menyalin alamat email saya."

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



