document.addEventListener('DOMContentLoaded', () => {
			const sectionLogo = document.querySelectorAll('.section__logo'),
				  refillBtn = document.querySelectorAll('.ref'),
				  updateBtn = document.querySelectorAll('.upt'),
				  repairBtn = document.querySelectorAll('.rep'),
				  tradeBtn = document.querySelectorAll('.trd'),
				  contactsBtn = document.querySelector('.contacts'),
				  mainSection = document.querySelector('.main'),
				  introSection = document.querySelector('.intro'),
				  abilSection = document.querySelector('.abil'),
				  refillSection = document.querySelector('.refill'),
				  updateSection = document.querySelector('.update'),
				  repairSection = document.querySelector('.repair'),
				  tradeSection = document.querySelector('.trade'),
				  mapSection = document.querySelector('.map');

			function hideSection(section) {
				section.style.display = 'none';
			} 

			function showSection(section) {
				section.style.display = 'block';

			}

			sectionLogo.forEach(btn => {
				btn.addEventListener('click', () => {
					refillSection.classList.remove('refill_animated-show');
					refillSection.classList.add('refill_animated-fade');
					setTimeout(hideSection, 800, refillSection);

					mapSection.classList.remove('map_animated-show');
					mapSection.classList.add('map_animated-fade');
					setTimeout(hideSection, 800, mapSection);

					updateSection.classList.remove('update_animated-show');
					updateSection.classList.add('update_animated-fade');
					setTimeout(hideSection, 800, updateSection);

					repairSection.classList.remove('repair_animated-show');
					repairSection.classList.add('repair_animated-fade');
					setTimeout(hideSection, 800, repairSection);

					tradeSection.classList.remove('trade_animated-show');
					tradeSection.classList.add('trade_animated-fade');
					setTimeout(hideSection, 800, tradeSection);

					mainSection.classList.remove('main_animated-fade');
					mainSection.classList.add('main_animated-show');
					setTimeout(showSection, 800, mainSection);

					introSection.classList.remove('intro_animated-fade');
					introSection.classList.add('intro_animated-show');
					setTimeout(showSection, 800, introSection);

					abilSection.classList.remove('abil_animated-fade');
					abilSection.classList.add('abil_animated-show');
					setTimeout(showSection, 800, abilSection);
				});
			});

			refillBtn.forEach(btn => {
				btn.addEventListener('click', () => {
					mainSection.classList.remove('main_animated-show');
					mainSection.classList.add('main_animated-fade');

					mapSection.classList.remove('map_animated-show');
					mapSection.classList.add('map_animated-fade');
					setTimeout(hideSection, 800, mapSection);
					

					introSection.classList.remove('intro_animated-show');
					introSection.classList.add('intro_animated-fade');
					

					abilSection.classList.remove('abil_animated-show');
					abilSection.classList.add('abil_animated-fade');
					

					updateSection.classList.remove('update_animated-show');
					updateSection.classList.add('update_animated-fade');
					

					repairSection.classList.remove('repair_animated-show');
					repairSection.classList.add('repair_animated-fade');
					

					tradeSection.classList.remove('trade_animated-show');
					tradeSection.classList.add('trade_animated-fade');
					

					refillSection.classList.remove('refill_animated-fade');
					refillSection.classList.add('refill_animated-show');

					setTimeout(hideSection, 800, introSection);
					setTimeout(hideSection, 800, abilSection);
					setTimeout(hideSection, 800, updateSection);
					setTimeout(hideSection, 800, repairSection);
					setTimeout(hideSection, 800, tradeSection);
					setTimeout(hideSection, 800, mainSection);
					setTimeout(showSection, 800, refillSection);
				});
			});

			updateBtn.forEach(btn => {
				btn.addEventListener('click', () => {
					mainSection.classList.remove('main_animated-show');
					mainSection.classList.add('main_animated-fade');
					setTimeout(hideSection, 800, mainSection);

					introSection.classList.remove('intro_animated-show');
					introSection.classList.add('intro_animated-fade');
					setTimeout(hideSection, 800, introSection);

					mapSection.classList.remove('map_animated-show');
					mapSection.classList.add('map_animated-fade');
					setTimeout(hideSection, 800, mapSection);

					abilSection.classList.remove('abil_animated-show');
					abilSection.classList.add('abil_animated-fade');
					setTimeout(hideSection, 800, abilSection);

					refillSection.classList.remove('refill_animated-show');
					refillSection.classList.add('refill_animated-fade');
					setTimeout(hideSection, 800, refillSection);

					repairSection.classList.remove('repair_animated-show');
					repairSection.classList.add('repair_animated-fade');
					setTimeout(hideSection, 800, repairSection);

					tradeSection.classList.remove('trade_animated-show');
					tradeSection.classList.add('trade_animated-fade');
					setTimeout(hideSection, 800, tradeSection);

					updateSection.classList.remove('update_animated-fade');
					updateSection.classList.add('update_animated-show');
					setTimeout(showSection, 800, updateSection);

					mapSection.classList.remove('map_animated-show');
					mapSection.classList.add('map_animated-fade');
					setTimeout(hideSection, 800, mapSection);
				});
			});

			repairBtn.forEach(btn => {
				btn.addEventListener('click', () => {
					mainSection.classList.remove('main_animated-show');
					mainSection.classList.add('main_animated-fade');
					setTimeout(hideSection, 800, mainSection);

					introSection.classList.remove('intro_animated-show');
					introSection.classList.add('intro_animated-fade');
					setTimeout(hideSection, 800, introSection);

					abilSection.classList.remove('abil_animated-show');
					abilSection.classList.add('abil_animated-fade');
					setTimeout(hideSection, 800, abilSection);

					updateSection.classList.remove('update_animated-show');
					updateSection.classList.add('update_animated-fade');
					setTimeout(hideSection, 800, updateSection);

					mapSection.classList.remove('map_animated-show');
					mapSection.classList.add('map_animated-fade');
					setTimeout(hideSection, 800, mapSection);

					refillSection.classList.remove('refill_animated-show');
					refillSection.classList.add('refill_animated-fade');
					setTimeout(hideSection, 800, refillSection);

					tradeSection.classList.remove('trade_animated-show');
					tradeSection.classList.add('trade_animated-fade');
					setTimeout(hideSection, 800, tradeSection);

					repairSection.classList.remove('repair_animated-fade');
					repairSection.classList.add('repair_animated-show');
					setTimeout(showSection, 800, repairSection);
				});
			});

			tradeBtn.forEach(btn => {
				btn.addEventListener('click', () => {
					mainSection.classList.remove('main_animated-show');
					mainSection.classList.add('main_animated-fade');
					setTimeout(hideSection, 800, mainSection);

					mapSection.classList.remove('map_animated-show');
					mapSection.classList.add('map_animated-fade');
					setTimeout(hideSection, 800, mapSection);

					introSection.classList.remove('intro_animated-show');
					introSection.classList.add('intro_animated-fade');
					setTimeout(hideSection, 800, introSection);

					abilSection.classList.remove('abil_animated-show');
					abilSection.classList.add('abil_animated-fade');
					setTimeout(hideSection, 800, abilSection);

					updateSection.classList.remove('update_animated-show');
					updateSection.classList.add('update_animated-fade');
					setTimeout(hideSection, 800, updateSection);

					repairSection.classList.remove('repair_animated-show');
					repairSection.classList.add('repair_animated-fade');
					setTimeout(hideSection, 800, repairSection);

					refillSection.classList.remove('refill_animated-show');
					refillSection.classList.add('refill_animated-fade');
					setTimeout(hideSection, 800, refillSection);

					tradeSection.classList.remove('trade_animated-fade');
					tradeSection.classList.add('trade_animated-show');
					setTimeout(showSection, 800, tradeSection);
				});
			});

			contactsBtn.addEventListener('click', function(event) {
				event.preventDefault();
				refillSection.classList.remove('refill_animated-show');
				refillSection.classList.add('refill_animated-fade');
				setTimeout(hideSection, 800, refillSection);

				mapSection.classList.remove('map_animated-fade');
				mapSection.classList.add('map_animated-show');
				setTimeout(showSection, 800, mapSection);

				updateSection.classList.remove('update_animated-show');
				updateSection.classList.add('update_animated-fade');
				setTimeout(hideSection, 800, updateSection);

				repairSection.classList.remove('repair_animated-show');
				repairSection.classList.add('repair_animated-fade');
				setTimeout(hideSection, 800, repairSection);

				tradeSection.classList.remove('trade_animated-show');
				tradeSection.classList.add('trade_animated-fade');
				setTimeout(hideSection, 800, tradeSection);

				mainSection.classList.remove('main_animated-show');
				mainSection.classList.add('main_animated-fade');
				setTimeout(hideSection, 800, mainSection);

				introSection.classList.remove('intro_animated-show');
				introSection.classList.add('intro_animated-fade');
				setTimeout(hideSection, 800, introSection);

				abilSection.classList.remove('abil_animated-show');
				abilSection.classList.add('abil_animated-fade');
				setTimeout(hideSection, 800, abilSection);
			});
		});