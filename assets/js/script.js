// ===== SHOW MENU ===== //
const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close');

if(navToggle){
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu')
	})
}

if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
	})
}
// ===== end show menu ===== //

// ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	const navMenu = document.getElementById('nav-menu')

	navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
// ===== end remove menu mobile ===== //

// ===== SCROLL SECTIONS ACTIVE LINK ===== //
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
				sectionTop = current.offsetTop - 58,
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

	if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
// ===== end change background header ===== //

// ===== PORTFOLIO ===== //
const modalViews = document.querySelectorAll('.portfolio__modal'),
		modalBtns = document.querySelectorAll('.portfolio__button'),
		modalClose = document.querySelectorAll('.portfolio__modal-close'),
		portfolioButtonLink = document.querySelectorAll('.portfolio__button-link');

let modal = function(modalClick){
	modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((mb,i)=>{
	mb.addEventListener('click', ()=>{
		modal(i)
	})
})

modalClose.forEach((mc) =>{
	mc.addEventListener('click', ()=>{
		modalViews.forEach((mv) =>{
			mv.classList.remove('active-modal')
		})
	})
})

portfolioButtonLink.forEach((bc) =>{
	bc.addEventListener('click', ()=>{
		modalViews.forEach((bv) =>{
			bv.classList.remove('active-modal')
		})
	})
})
// ===== end portfolio ===== //

// ===== POP UP ===== //
const downloadButton = document.querySelector('.download__button'),
		popup = document.querySelector('.popup')

downloadButton.addEventListener('click', ()=>{
	popup.style.display = 'flex';

	setTimeout(() =>{
		popup.style.display = 'none';
	}, 2500)
})
// ===== end pop up ===== //

// ===== SCROLL UP ===== //
function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');

	if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
// ===== end scroll up ===== //

// ===== DARK LIGHT THEME ===== //
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme){
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)

	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})
// ===== end dark light theme ===== //

// ===== LANGUAGES ===== //
const navLanguages = document.querySelector('.nav__languages'),
		languageButton = document.querySelectorAll('.language__button');

// 1. Home Section
const profileGreeting = document.querySelector('.profile__greeting');

// 2. About Section
const aboutParagraph1 = document.querySelector('.about__paragraph1'),
		aboutParagraph2 = document.querySelector('.about__paragraph2'),
		aboutParagraph3 = document.querySelector('.about__paragraph3');

// 3. Contact Section
const contactDescription = document.querySelector('.contact__description');

languageButton.forEach(el =>{
	el.addEventListener('click', ()=>{
		navLanguages.querySelector('.active-language').classList.remove('active-language');
		el.classList.add('active-language');

		const attr = el.getAttribute('language');
		// 1. Home Section
		profileGreeting.textContent = data[attr].profile__greeting;

		// 2. About Section
		aboutParagraph1.textContent = data[attr].about__paragraph1;
		aboutParagraph2.textContent = data[attr].about__paragraph2;
		aboutParagraph3.textContent = data[attr].about__paragraph3;

		// 3. Contact Section
		contactDescription.textContent = data[attr].contact__description;
	});
});

var data = {
	// ENGLISH //
	"english":{
		// 1. Home Section
		"profile__greeting" : "Hello, I'm",

		// 2. About Section
		"about__paragraph1" : "Hey! My name is Nelly Yusnita. I'm a Freelance Junior Frontend Developer based in Indonesia. I love working on fun little projects especially for individuals and small businesses during my free time.",
		"about__paragraph2" : "I provide custom designs at afforable prices. Frequently your website is the first impression your customers will get, so make sure it’s a good one. Since my time is split between a few different things, I’m not able to take on every project I’d like to, but I'm always looking for fun work.",
		"about__paragraph3" : "Take a look at my portfolio below, if you think I'd be a good match send me an email or message on my social media. Here are a few technologies I’ve been working with recently:",

		// 3. Contact Section
		"contact__description" : "If you have a project that you want to carry out, do not hesitate and tell me what it is, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you."
	},
	// end english //

	// INDONESIA //
	"indonesia":{
		// 1. Home Section
		"profile__greeting" : "Halo, Saya",

		// 2. About Section
		"about__paragraph1" : "Hai! nama saya Nelly Yusnita. Saya seorang freelance Frontend Developer dari Indonesia. Saya suka mengerjakan proyek kecil yang menyenangkan terutama untuk individu dan bisnis kecil di waktu luang saya.",
		"about__paragraph2" : "Saya menyediakan desain khusus dengan harga terjangkau. Seringkali website Anda adalah kesan pertama yang akan didapatkan pelanggan Anda, jadi pastikan Anda punya website yang bagus. Karena waktu saya terbagi antara beberapa hal yang berbeda, saya tidak dapat mengerjakan setiap proyek yang saya inginkan, tetapi saya selalu mencari pekerjaan yang menyenangkan.",
		"about__paragraph3" : "Lihatlah portofolio saya di bawah ini, jika menurut Anda saya cocok, kirimkan saya email atau pesan di media sosial saya. Berikut adalah beberapa teknologi yang telah saya kerjakan baru-baru ini:",

		// 3. Contact Section
		"contact__description" : "Jika Anda memiliki proyek yang ingin Anda laksanakan, jangan ragu dan beri tahu saya apa itu, kotak masuk saya selalu terbuka. Apakah Anda memiliki pertanyaan atau hanya ingin menyapa, saya akan mencoba yang terbaik untuk menghubungi Anda kembali."
	}
	// end indonesia //
}
// ===== end languages ===== //

const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	// reset: true
});

sr.reveal(`.profile__border, .section__subtitle, .about__img, .contact__description`);
sr.reveal(`.section__title, .contact__button`, {delay: 150});

// Home //
sr.reveal(`.profile__greeting`, {delay: 150});
sr.reveal(`.profile__name`, {delay: 200});
sr.reveal(`.profile__profession`, {delay: 250});
sr.reveal(`.profile__buttons`, {delay: 300});
sr.reveal(`.home__social`, {delay: 350, origin: 'left'});
sr.reveal(`.home__scroll`, {delay: 350, origin: 'right'});

// About //
sr.reveal(`.social__media-link`, {interval: 100, origin: 'top'});
sr.reveal(`.about__content`, {delay: 150});
// ===== end scroll reveal animation ===== //

