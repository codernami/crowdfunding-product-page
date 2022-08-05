/* 
******************************
DISPLAY MENU NAV MOBILE
***************************** */

const iconMenu = document.getElementById('icon-menu');
const navMenu = document.getElementById('menu');
const links = document.getElementsByClassName('nav_item');
const header = document.getElementById('header');


let isMenuOpen = false;

iconMenu.addEventListener('click', () => {	
	isMenuOpen = !isMenuOpen;

	if(isMenuOpen) {
		navMenu.classList.add('show-menu');
		navMenu.classList.remove('hide-menu');
		header.classList.add('add-opacity');
		iconMenu.src= "./styles/assets/images/icon-close-menu.svg";
		closeMenu();
	} else {
		navMenu.classList.add('hide-menu');
		navMenu.classList.remove('show-menu');
		header.classList.remove('add-opacity');
		iconMenu.src= "./styles/assets/images/icon-hamburguer.svg";
	}
	
});

function closeMenu() {
	for(let i = 0; i < links.length; i++) {
		links[i].addEventListener('click', () => {
			navMenu.classList.remove('show-menu');
			navMenu.classList.add('hide-menu');
		
			header.classList.remove('add-opacity');
			iconMenu.src= "./styles/assets/images/icon-hamburguer.svg";
		})
	}
};


/* 
******************************
DISPLAY BOOKMARKED 
(according to media queries)
***************************** */

const btnBookmark= document.getElementById('btn-bookmark');
const svgCircle = document.getElementsByClassName('circle')[0];
const svgInnerCircle = document.getElementsByClassName('inner-circle')[0];
const spanBookmark = document.getElementById('span-bookmark');

let mediaQuery = window.matchMedia("(min-width: 768px)");


function mediaSelected(mediaQuery) {
	let bookmarked = false;

	btnBookmark.addEventListener('click', () => {
		bookmarked = !bookmarked;

		// > 768px
		if (mediaQuery.matches) { // > 768
			if (bookmarked) {
				btnBookmark.style.width= '185px';
				svgCircle.style.fill = 'hsl(176, 72%, 28%)';
				svgInnerCircle.style.fill = 'white';
				spanBookmark.textContent = "Bookmarked";
				spanBookmark.style.fontWeight = 'bold';
				spanBookmark.style.color = 'hsl(176, 72%, 28%)';
			

			} else {
				btnBookmark.style.width= '170px';
				svgCircle.style.fill = '#2F2F2F';
				svgInnerCircle.style.fill = '#B1B1B1';
				spanBookmark.textContent = "Bookmark"
				spanBookmark.style.color = 'black';
				spanBookmark.style.fontWeight = 'normal';
	
			}
		
		} else { // < 768 px
			if (bookmarked) {
				svgCircle.style.fill = 'hsl(176, 72%, 28%)';
				svgInnerCircle.style.fill = 'white';
			} else {
				svgCircle.style.fill = '#2F2F2F';
				svgInnerCircle.style.fill = '#B1B1B1';
			}		
		}
	});
}
mediaSelected(mediaQuery)
mediaQuery.addListener(mediaSelected)
