const COLORS = {
	red: [ 'apple', 'cherry', 'cranberry', 'grape' ],
	orange: [ 'orange', 'carrot', 'apricot', 'squash', 'butternut', 'pumpkin' ],
	yellow: [ 'lemon', 'mango', 'pineapple', 'papaya', 'banana', 'sweetcorn' ],
	green: [ 'avocado', 'cucumber', 'kiwi', 'lime', 'pea', 'spinach', 'pear', 'broccoli', 'brussels sprouts' ],
	blue: [ 'blueberry', 'berry' ],
	purple: [ 'olive', 'beetroot' ],
	pink: [ 'peach', 'watermelon', 'grapefruit', 'guava' ]
};

let fruitLookup = {};
for (const [ name, fruitsList ] of Object.entries(COLORS)) {
	for (const fruit of fruitsList) {
		fruitLookup[fruit] = name;
	}
}

function colorOf(fruit) {
	let color = fruitLookup[fruit.toLowerCase()];
	if (typeof color == 'undefined') {
		return null;
	}
	return color;
}

function getInputColor(elId) {
	let fruitInputValue = document.getElementById(elId).value;
	let color = colorOf(fruitInputValue);

	return color;
}

function updateSplat(elId, colorValue) {
	let splat = document.getElementById(elId);
	splat.getSVGDocument().getElementsByTagName('g')[0].setAttribute('fill', colorValue);

	if (splat.classList.contains('hidden')) {
		splat.classList.remove('hidden');
	}
}

function blend() {
	let pairs = [
		{
			input: 'fruitInput1',
			splat: 'splat1'
		},
		{
			input: 'fruitInput2',
			splat: 'splat2'
		}
	];
	for (pair of pairs) {
		let colorValue = getInputColor(pair.input);
		if (colorValue) {
			updateSplat(pair.splat, colorValue);
		}
	}
}

function listenForEnterButton(elIds) {
	for (const elId of elIds) {
		var fruitInput = document.getElementById(elId);

		fruitInput.addEventListener('keyup', function(event) {
			if (event.keyCode === 13) {
				event.preventDefault();
				document.getElementsByTagName('button')[0].click();
			}
		});
	}
}
