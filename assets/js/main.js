const EL_IDS = [
	{
		input: 'foodInput1',
		splat: 'splat1'
	},
	{
		input: 'foodInput2',
		splat: 'splat2'
	}
];

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
const DEFAULT_COLOR = 'rgba(0, 0, 0, 0.0)';

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
		return DEFAULT_COLOR;
	}
	return color;
}

function getInputColor(elId) {
	let foodInputValue = document.getElementById(elId).value;
	let color = colorOf(foodInputValue);

	return color;
}

/** Set splat's color using user input otherwise make it hidden. */
function updateSplat(elId, colorValue) {
	let splat = document.getElementById(elId);

	svg = splat.getSVGDocument();
	svg.getElementsByTagName('g')[0].setAttribute('fill', colorValue);
}

function blend() {
	for (const pair of EL_IDS) {
		let colorValue = getInputColor(pair.input);
		updateSplat(pair.splat, colorValue);
	}
}

function initialize() {
	for (const pair of EL_IDS) {
		let dropList = document.getElementById(pair.input);
		for (name of FOOD_NAMES) {
			let option = document.createElement('option');
			option.setAttribute('value', name);
			option.text = name;
			dropList.appendChild(option);
		}

		updateSplat(pair.splat, DEFAULT_COLOR);
	}
}

window.onload = initialize;
