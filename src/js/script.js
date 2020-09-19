document.addEventListener('DOMContentLoaded', () => {
			const sectionLogo = document.querySelectorAll('.section__logo'),
				  refillBtn = document.querySelectorAll('.menu__rect_blue'),
				  updateBtn = document.querySelectorAll('.menu__rect_yellow'),
				  repairBtn = document.querySelectorAll('.menu__rect_pink'),
				  tradeBtn = document.querySelectorAll('.menu__rect_black'),
				  mainSection = document.querySelector('.main'),
				  introSection = document.querySelector('.intro'),
				  abilSection = document.querySelector('.abil'),
				  refillSection = document.querySelector('.refill'),
				  updateSection = document.querySelector('.update'),
				  repairSection = document.querySelector('.repair'),
				  tradeSection = document.querySelector('.trade');

			function hideSection(section) {
				section.style.display = 'none';
			} 

			function showSection(section) {
				section.style.display = 'block';
			}

			sectionLogo.forEach(btn => {
				btn.addEventListener('click', () => {
					hideSection(refillSection);
					hideSection(updateSection);
					hideSection(repairSection);
					hideSection(tradeSection);
					showSection(mainSection);
					showSection(introSection);
					showSection(abilSection);
				});
			});
			
			refillBtn.forEach(btn => {
				btn.addEventListener('click', () => {
					hideSection(mainSection);
					hideSection(introSection);
					hideSection(abilSection);
					hideSection(updateSection);
					hideSection(repairSection);
					hideSection(tradeSection);
					showSection(refillSection);
					
				});
			});

			updateBtn.forEach(btn => {
				btn.addEventListener('click', () => {
					hideSection(mainSection);
					hideSection(introSection);
					hideSection(abilSection);
					hideSection(refillSection);
					hideSection(repairSection);
					hideSection(tradeSection);
					showSection(updateSection);
				});
			});

			repairBtn.forEach(btn => {
				btn.addEventListener('click', () => {
					hideSection(mainSection);
					hideSection(introSection);
					hideSection(abilSection);
					hideSection(updateSection);
					hideSection(refillSection);
					hideSection(tradeSection);
					showSection(repairSection);
				});
			});

			tradeBtn.forEach(btn => {
				btn.addEventListener('click', () => {
					hideSection(mainSection);
					hideSection(introSection);
					hideSection(abilSection);
					hideSection(updateSection);
					hideSection(repairSection);
					hideSection(refillSection);
					showSection(tradeSection);
				});
			});
		});