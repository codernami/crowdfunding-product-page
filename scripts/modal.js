const btnSupport = document.getElementById("btn-support");
const modalSupport = document.getElementById("modal-support");
const closeModal = document.getElementById("close-modal");


// Display support modal with inner pledges modals
btnSupport.addEventListener("click", () => {
	modalSupport.style.display = "block";
	glassContainer.classList.add('glass-container');
	glassContainer.classList.add('glass-container-show-modal');	
});

closeModal.addEventListener("click", () => {
	modalSupport.style.display = "none";
	glassContainer.classList.remove('glass-container');
	glassContainer.classList.remove('glass-container-show-modal');
	// clean inner modal selected
})


// Display inner pledges modals
const radioButtons = document.querySelectorAll('input[name="pledge"]');
const modalPledge = document.getElementsByClassName('modal-pledge');
const displayPledges = document.getElementsByClassName("pledge-display");
const inputPledge = document.getElementsByClassName('pledge-selection__input');
const left = document.getElementsByClassName('left');

for (let i = 0; i < radioButtons.length; i++) {
	displayPledges[i].style.display= "none";

	radioButtons[i].addEventListener("click", () => {
		if (radioButtons[i].value == 'pledge0') {
			displayPledges[0].style.display= "block";
			modalPledge[0].style.border = '2px solid hsl(176, 50%, 47%)';
			displayThanksModal(0);

		} else {
			displayPledges[0].style.display= "none";
			modalPledge[0].style.border = '1px solid hsl(0, 2%, 63%)';
			
		}
		// Pledge 25
		if (radioButtons[i].value == 'pledge25') {
			displayPledges[1].style.display= "block";
			modalPledge[1].style.border = '2px solid hsl(176, 50%, 47%)';
			inputPledge[0].value = "$ 25";
			displayThanksModal(1);
		} else {
			displayPledges[1].style.display= "none";
			modalPledge[1].style.border = '1px solid hsl(0, 2%, 63%)';
		}

		if (radioButtons[i].value == 'pledge75') {
			displayPledges[2].style.display= "block";
			modalPledge[2].style.border = '2px solid hsl(176, 50%, 47%)';
			inputPledge[1].value = "$ 75";
			displayThanksModal(2);
		} else {
			displayPledges[2].style.display= "none";
			modalPledge[2].style.border = '1px solid hsl(0, 2%, 63%)';
		}

	});
	
};	

// DISPLAY THANKS MODAL
const btnContinue = document.getElementsByClassName("btn-continue");
const thanksModal = document.getElementById("modal-thanks");
const btnGotit = document.getElementById("btn-gotit");

function displayThanksModal(index) {
	btnContinue[index].addEventListener("click", () => {
		thanksModal.style.display = 'block';
		modalSupport.style.display = "none";
		displayPledges[index].style.display= "none";
	})

	btnGotit.addEventListener("click", () => {
		thanksModal.style.display = 'none';
		glassContainer.classList.remove('glass-container');
		glassContainer.classList.remove('glass-container-show-modal');	
	})
};

