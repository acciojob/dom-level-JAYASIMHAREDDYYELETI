//your JS code here. If required.
function findLevel(){
	let count = 0;
	let currentElement = level;
	while (currentElement !== null) {
			currentElement = currentElement.parentNode;
		  count++
		}
	console.log(count,`The level of the element is:`)
}
findLevel();