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

function blend() {
	let fruitInput = document.getElementById('fruitInput').value;
	let color = colorOf(fruitInput);
	if (!color) {
		window.alert(`Not a valid color!\n${fruitInput}`);
	}
	let splat = document.getElementsByClassName('splat')[0];
	splat.style.display = 'block';
	splat.getSVGDocument().getElementsByTagName('g')[0].setAttribute('fill', color);
}
