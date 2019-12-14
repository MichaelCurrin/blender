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

const FOOD_NAMES = Object.keys(foodLookup).sort();

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

function setup(elIds) {
	for (const elId of elIds) {
		let selector = document.getElementById(elId);

		for (name of FOOD_NAMES) {
			let opt = document.createElement('option');
			opt.setAttribute('value', name);
			opt.text = name;
			selector.appendChild(opt);
		}
	}
}

window.onload = function() {
	setup([ 'foodInput1', 'foodInput2' ]);
};
