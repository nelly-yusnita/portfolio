// ===== CHANGE BACKGROUND HEADER ===== //
function scrollHeader(){
	const header = document.getElementById('header')
	if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);
// ===== end change background header ===== //

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

// ===== PORTFOLIO ===== //
// const modalViews = document.querySelectorAll('.portfolio__modal'),
// 		modalBtns = document.querySelectorAll('.portfolio__button'),
// 		modalClose = document.querySelectorAll('.portfolio__modal-close'),
// 		portfolioButtonLink = document.querySelectorAll('.portfolio__button-link');

// let modal = function(modalClick){
// 	modalViews[modalClick].classList.add('active-modal');
// }

// modalBtns.forEach((mb,i)=>{
// 	mb.addEventListener('click', ()=>{
// 		modal(i)
// 	})
// })

// modalClose.forEach((mc) =>{
// 	mc.addEventListener('click', ()=>{
// 		modalViews.forEach((mv) =>{
// 			mv.classList.remove('active-modal')
// 		})
// 	})
// })

// portfolioButtonLink.forEach((bc) =>{
// 	bc.addEventListener('click', ()=>{
// 		modalViews.forEach((bv) =>{
// 			bv.classList.remove('active-modal')
// 		})
// 	})
// })
// ===== end portfolio ===== //

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

// ===== LANGUAGES ===== //
const navLanguages = document.querySelector('.nav__languages'),
		languageButton = document.querySelectorAll('.language__button');

// 1. Home Section
const homeSubtitle = document.querySelector('.home__subtitle'),
		homeProfession = document.querySelector('.home__profession');

// 2. About Section
const aboutTitle = document.querySelector('.about__title'),
		aboutDescription = document.querySelector('.about__description');

// 3. Contact Section
const contactClosing = document.querySelector('.contact__closing');

languageButton.forEach(el =>{
	el.addEventListener('click', ()=>{
		navLanguages.querySelector('.active-language').classList.remove('active-language');
		el.classList.add('active-language');

		const attr = el.getAttribute('language');
		// 1. Home Section
		homeSubtitle.textContent = data[attr].home__subtitle;
		homeProfession.textContent = data[attr].home__profession;

		// 2. About Section
		aboutTitle.textContent = data[attr].about__title;
		aboutDescription.textContent = data[attr].about__description;

		// 3. Contact Section
		contactClosing.textContent = data[attr].contact__closing;
	});
});

var data = {
	// ===== ENGLISH VERSION ===== //
	"english":{
		// 1. Home Section
		"home__subtitle" : "Hello, My name is",
		"home__profession" : "I'm a freelance Frontend Developer",

		// 2. About Section
		"about__title" : "Hey! My Name is Nelly Yusnita. I'm a Freelance Frontend Developer based in Medan.",
		"about__description" : "I love working on fun little projects especially for individuals and small businesses during my free time. I provide custom designs at afforable prices. Frequently your website is the first impression your customers will get, so make sure it’s a good one. Since my time is split between a few different things, I’m not able to take on every project I’d like to, but I'm always looking for fun work. Take a look at my portfolio below, if you think I'd be a good match send me an email or message on my social media.",

		// 3. Contact Section
		"contact__closing" : "If you have a project that you want to carry out, do not hesitate and tell me what it is, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!"
	},
	// ===== end english version ===== //

	// ===== INDONESIA VERSION ===== //
	"indonesia":{
		// 1. Home Section
		"home__subtitle" : "Halo, Nama Saya",
		"home__profession" : "Saya seorang freelance Frontend Developer",

		// 2. About Section
		"about__title" : "Hai, nama saya Nelly Yusnita. Saya seorang freelance Frontend Developer dari Medan.",
		"about__description" : "Saya suka mengerjakan proyek kecil yang menyenangkan terutama untuk individu dan bisnis kecil di waktu luang saya. Saya menyediakan desain khusus dengan harga terjangkau. Seringkali website Anda adalah kesan pertama yang akan didapatkan pelanggan Anda, jadi pastikan Anda punya website yang bagus. Karena waktu saya terbagi antara beberapa hal yang berbeda, saya tidak dapat mengerjakan setiap proyek yang saya inginkan, tetapi saya selalu mencari pekerjaan yang menyenangkan. Lihatlah portofolio saya di bawah ini, jika menurut Anda saya cocok, kirimkan saya email atau pesan di media sosial saya.",

		// 3. Contact Section
		"contact__closing" : "Jika Anda memiliki proyek yang ingin Anda laksanakan, jangan ragu dan beri tahu saya apa itu, kotak masuk saya selalu terbuka. Apakah Anda memiliki pertanyaan atau hanya ingin menyapa, saya akan mencoba yang terbaik untuk menghubungi Anda kembali!"
	}
	// ===== end indonesia version ===== //
}
// ===== end languages ===== //

// ===== AOS ANIMATE ===== //
// 1. home -> .home__subtitle, .home__title, .home__profession, .home__img

// 2. section__subtitle
const sectionSubtitle = document.querySelectorAll('.section__subtitle');
sectionSubtitle.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

// 3. section__title
const sectionTitle = document.querySelectorAll('.section__title');
sectionTitle.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 150;
});

// 4. about -> .about__img, .about__social, .about__data

// 5. portfolio -> .portfolio__container

// 6. contact -> .contact__title, .contact__card, .contact__form, .contact__closing

// 7. footer -> .footer__title, .footer__list, .footer__social

AOS.init({
	duration: 1500,
	once: true,  
});
// ===== end aos animate ===== //