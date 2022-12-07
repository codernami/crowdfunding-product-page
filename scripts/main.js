/* 
******************************
DISPLAY MENU NAV MOBILE
***************************** */

const iconMenu = document.getElementById('icon-menu');
const navMenu = document.getElementById('menu');

const links = document.getElementsByClassName('menu__item');

const header = document.getElementById('header');
const glassContainer = document.getElementById('glass-container');


let isMenuOpen = false;

iconMenu.addEventListener('click', () => {	
	isMenuOpen = !isMenuOpen;

	if(isMenuOpen) {
		navMenu.classList.add('show-menu');
		navMenu.classList.remove('hide-menu');
		header.classList.add('add-opacity');
		glassContainer.classList.add('glass-container');	
		iconMenu.src= "./styles/assets/images/icon-close-menu.svg";
		closeMenu();
	} else {
		navMenu.classList.add('hide-menu');
		navMenu.classList.remove('show-menu');
		header.classList.remove('add-opacity');
		glassContainer.classList.remove('glass-container');	
		iconMenu.src= "./styles/assets/images/icon-hamburguer.svg";
	}
	
});

function closeMenu() {
	for(let i = 0; i < links.length; i++) {
		links[i].addEventListener('click', () => {
			navMenu.classList.remove('show-menu');
			navMenu.classList.add('hide-menu');
		
			header.classList.remove('add-opacity');
			glassContainer.classList.remove('glass-container');	
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

let mediaQuery = window.matchMedia("(min-width: 600px)");


function mediaSelected(mediaQuery) {
	let bookmarked = false;

	btnBookmark.addEventListener('click', () => {
		bookmarked = !bookmarked;

		// > 768px
		if (mediaQuery.matches) { // > 768
			if (bookmarked) {
				svgCircle.style.fill = 'hsl(176, 72%, 28%)';
				svgInnerCircle.style.fill = 'white';
				spanBookmark.textContent = "Bookmarked";
				spanBookmark.style.fontWeight = 'bold';
				spanBookmark.style.color = 'hsl(176, 72%, 28%)';
			

			} else {
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

/* 
******************************
STATS BAR
***************************** */
const mainStats = document.getElementById('current-stats');
const statsFullBar = document.getElementById('statsFullBar');

function getNumber() {
	const stats = mainStats.textContent;
	const str = stats.replace("$","");
	const number = parseInt(str);
	return number;
}

function progressFullBar(number){
	statsFullBar.style.width = `${number}%`;
}
progressFullBar(getNumber());

/* 
******************************
DISABLED REWARD CARD
***************************** */
const rewardCard = document.getElementsByClassName('card-reward');
const rewardLeft = document.getElementsByClassName('card-reward__left');
const rewardBtn = document.getElementsByClassName('btn-reward');

for(let i= 0; i < rewardCard.length; i++) {	
	if (rewardLeft[i].textContent == 0) {
		rewardCard[i].classList.add('disabled-card');
		rewardBtn[i].classList.add('disabled-btn');
		rewardBtn.disabled = true;
	}	
}
