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

	if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
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

