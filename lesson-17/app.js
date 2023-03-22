let game = document.querySelector('.game'),
	res = document.querySelector('.res'),
	btnGame = document.querySelector('.new-game'),
	fields = document.querySelectorAll('.field'),
	step = false,
	count = 0,
	circle = `<svg class="circle"><use href="./symbol-defs.svg#icon-circle"></use></svg>`,
	cross = `<svg class="cross"><use href="./symbol-defs.svg#icon-cross"></use></svg>`;

function stepCross(target) {
	target.innerHTML = cross;
	target.classList.add('x');
	count++;
}
function stepZero(target) {
	target.innerHTML = circle;
	target.classList.add('o');
	count++;
}

function init(e) {
	if (!step) stepCross(e.target);
	else stepZero(e.target);
	step = !step;
	win();
}

function newGame() {
	step = false;
	count = 0;
	res.innerText = 'Win: ';
	fields.forEach(item => {
		item.innerHTML = '';
		item.classList.remove('x', 'o', 'active');
	});
	game.addEventListener('click', init);
}

function win() {
	let comb = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (let i = 0; i < comb.length; i++) {

		if (fields[comb[i][0]].classList.contains('x') &&
			fields[comb[i][1]].classList.contains('x') &&
			fields[comb[i][2]].classList.contains('x')) {
				fields[comb[i][0]].classList.add('active');
				fields[comb[i][1]].classList.add('active');
				fields[comb[i][2]].classList.add('active');
				res.innerText = 'Win: X';
				game.removeEventListener('click', init);
		}

		else if (fields[comb[i][0]].classList.contains('o') &&
			fields[comb[i][1]].classList.contains('o') &&
			fields[comb[i][2]].classList.contains('o')) {
				fields[comb[i][0]].classList.add('active');
				fields[comb[i][1]].classList.add('active');
				fields[comb[i][2]].classList.add('active');
				res.innerText = 'Win: O';
				game.removeEventListener('click', init);
		}

		else if (count == 9) {
			res.innerText = 'Draw';
			game.removeEventListener('click', init);
		}
	}
}

btnGame.addEventListener('click', newGame);
game.addEventListener('click', init);