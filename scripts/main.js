const openIcon = document.getElementById('icon-open');
const closeIcon = document.getElementById('icon-close');
const navMenu = document.getElementById('menu');
const links = document.getElementsByClassName('nav_item');


openIcon.addEventListener('click', () => {
	navMenu.classList.add('show-menu')
	closeIcon.classList.toggle('show')
	openIcon.classList.toggle('hide')
});

closeIcon.addEventListener('click', () => {
	navMenu.classList.remove('show-menu')
	closeIcon.classList.toggle('show')
	openIcon.classList.toggle('hide')
});


for(let i = 0; i < links.length; i++) {
	links[i].addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
		closeIcon.classList.toggle('show')	
		openIcon.classList.toggle('hide')
	})
};