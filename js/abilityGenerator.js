/**
 * JQuery click event handler that fires when the cal abilities button is pressed.
 */
$(document).ready(function() {
	$('#calc-abilities').click(function() {
		// Roll Abilities
		var abilities = rollAbilities();

		// Display Results
		displayAssignedAbilities(abilities);
		displayOrderedAbilities(abilities);
	});
});

/**
 *  "Rolls 4d6" and drops the lowest
 *
 * @returns the value of a single character ability
 */
function rollAbility() {
	var roll = new Array();
	var ability = 0;
	var lowest = Number.MAX_SAFE_INTEGER;
	for (var ii = 0; ii < 4; ii++) {
		roll[ii] = Math.floor(Math.random() * 6 + 1);

		ability += roll[ii];

		if (roll[ii] < lowest) {
			lowest = roll[ii];
		}
	}

	return (ability -= lowest);
}

/**
 *  Runs rollAbility 6 times
 *
 * @returns an array of the 6 ability values generated.
 */
function rollAbilities() {
	var abilities = new Array();

	for (var ii = 0; ii < 6; ii++) {
		abilities[ii] = rollAbility();
	}

	return abilities;
}

/**
 * Builds a paragraph listing abilities as assigned to a specific stat
 *
 * @param {*} abilities
 */
function displayAssignedAbilities(abilities) {
	$('#assigned-abilities').html(
		'<p>Strength: ' +
			abilities[0] +
			' <br>' +
			'Dexterity: ' +
			abilities[1] +
			'<br>' +
			'Constitution: ' +
			abilities[2] +
			'<br>' +
			'Intelligence: ' +
			abilities[3] +
			'<br>' +
			'Wisdom: ' +
			abilities[4] +
			'<br>' +
			'Charisma: ' +
			abilities[5] +
			'</p>'
	);
}

/**
 * Builds a paragraph listing abilities in descending order.
 *
 * @param {*} abilities
 */
function displayOrderedAbilities(abilities) {
	abilities.sort(function(a, b) {
		return b - a;
	});

	$('#ordered-abilities').html(
		'<p>Roll 1: ' +
			abilities[0] +
			' <br>' +
			'Roll 2: ' +
			abilities[1] +
			'<br>' +
			'Roll 3: ' +
			abilities[2] +
			'<br>' +
			'Roll 4: ' +
			abilities[3] +
			'<br>' +
			'Roll 5: ' +
			abilities[4] +
			'<br>' +
			'Roll 6: ' +
			abilities[5] +
			'</p>'
	);

	/* Sets window focur to the calculated ability display */
	window.location.href = '#calculated-abilities';
}
