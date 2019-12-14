// Keys are all valid CSS colors.
const COLORS = {
	brown: [ 'cherry' ],
	crimson: [ 'apple', 'cranberry', 'strawberry', 'raspberry', 'pomegranate', 'red pepper' ],

	darkorange: [ 'orange', 'carrot' ],
	orange: [ 'pawpaw', 'apricot', 'squash', 'butternut', 'pumpkin' ],

	lightgreen: [ 'green grape' ],
	darkgreen: [ 'spinach', 'cucumber' ],
	green: [ 'avocado', 'asparagus', 'pea', 'broccoli', 'brussels sprouts', 'lettuce', 'green pepper' ],

	yellowgreen: [ 'kiwi', 'lime', 'pear' ],

	gold: [ 'lemon', 'mango', 'pineapple', 'papaya', 'banana', 'sweetcorn', 'yellow pepper' ],
	papayawhip: [ 'papaya' ],

	darkblue: [ 'blueberry' ],

	purple: [ 'olive', 'beetroot' ],
	pink: [ 'peach', 'watermelon', 'grapefruit', 'guava' ],
	blueviolet: [ 'aubergine / eggplant' ],

	whitesmoke: [ 'cauliflower', 'potato' ],
	black: [ 'blackberry' ]
};

let foodLookup = {};
for (const [ name, foodsList ] of Object.entries(COLORS)) {
	for (const food of foodsList) {
		foodLookup[food] = name;
	}
}

function colorOf(food) {
	let color = foodLookup[food.toLowerCase()];
	if (typeof color == 'undefined') {
		return null;
	}
	return color;
}

function getInputColor(elId) {
	let foodInputValue = document.getElementById(elId).value;
	let color = colorOf(foodInputValue);

	return color;
}

/** Set color and show splat, or hide for no color. */
function updateSplat(elId, colorValue) {
	let splat = document.getElementById(elId);

	if (colorValue) {
		splat.getSVGDocument().getElementsByTagName('g')[0].setAttribute('fill', colorValue);

		if (splat.classList.contains('hidden')) {
			splat.classList.remove('hidden');
		}
	} else {
		if (!splat.classList.contains('hidden')) {
			splat.classList.add('hidden');
		}
	}
}

function blend() {
	let pairs = [
		{
			input: 'foodInput1',
			splat: 'splat1'
		},
		{
			input: 'foodInput2',
			splat: 'splat2'
		}
	];
	for (pair of pairs) {
		let colorValue = getInputColor(pair.input);
		updateSplat(pair.splat, colorValue);
	}
}

function listenForEnterButton(elIds) {
	for (const elId of elIds) {
		var foodInput = document.getElementById(elId);

		foodInput.addEventListener('keyup', function(event) {
			if (event.keyCode === 13) {
				event.preventDefault();
				document.getElementsByTagName('button')[0].click();
			}
		});
	}
}
