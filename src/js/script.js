document.addEventListener('DOMContentLoaded', () => {
	const refill = document.querySelector('.menu__rect_blue'),
		update = document.querySelector('.menu__rect_yellow'),
		mainSection = document.querySelector('.main'),
		introSection = document.querySelector('.intro'),
		abilSection = document.querySelector('.abil'),
		refillSection = document.querySelector('.refill'),
		updateSection = document.querySelector('.update'),
		footer = document.querySelector('.footer');

	function fadeSection(section) {
		section.style.display = 'none';
	}

	function showSection(section) {
		section.style.display = "block";
	}


	refill.addEventListener('click', () => {
		mainSection.classList.add('main_animated');
		introSection.classList.add('intro_animated');
		abilSection.classList.add('abil_animated');
		refillSection.classList.add('refill_animated');
		footer.classList.add('footer_animated');
		setTimeout(showSection, 800, refillSection);
		setTimeout(fadeSection, 800, mainSection);
		setTimeout(fadeSection, 800, introSection);
		setTimeout(fadeSection, 800, abilSection);
	});

	
	update.addEventListener('click', () => {
		mainSection.classList.add('main_animated');
		introSection.classList.add('intro_animated');
		abilSection.classList.add('abil_animated');
		updateSection.classList.add('refill_animated');
		footer.classList.add('footer_animated');
		setTimeout(showSection, 800, updateSection);
		setTimeout(fadeSection, 800, mainSection);
		setTimeout(fadeSection, 800, introSection);
		setTimeout(fadeSection, 800, abilSection);
	});
});