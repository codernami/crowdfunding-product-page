const openIcon = document.getElementById('icon-open');
const closeIcon = document.getElementById('icon-close');
const navMenu = document.getElementById('menu');
const links = document.getElementsByClassName('nav_item');
const glassContainer = document.getElementById('glass-container');

// user clicks hamburguer menu button > open menu nav
openIcon.addEventListener('click', () => {
	navMenu.classList.add('show-menu')
	closeIcon.classList.toggle('show')
	openIcon.classList.toggle('hide')
	glassContainer.classList.add('add-opacity')
});

// user clicks hamburguer menu button > close menu nav
closeIcon.addEventListener('click', () => {
	navMenu.classList.remove('show-menu')
	navMenu.classList.add('hide-menu')
	closeIcon.classList.toggle('show')
	openIcon.classList.toggle('hide')
	glassContainer.classList.remove('add-opacity')
});


// user selects links > close menu nav
for(let i = 0; i < links.length; i++) {
	links[i].addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
		navMenu.classList.add('hide-menu')
		closeIcon.classList.toggle('show')	
		openIcon.classList.toggle('hide')
		glassContainer.classList.remove('add-opacity')
	})
};
