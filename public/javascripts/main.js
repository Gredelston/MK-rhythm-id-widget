var beatOptions = ["q","ee","ssss"];

function generateRhythm() {
	var masterRhythm = new Array();
	var numOptions = beatOptions.length;
	var newIndex;

	for (var i = 0; i<4; i++) {
		newIndex = Math.floor( Math.random()*numOptions );
		masterRhythm.push( beatOptions[newIndex] )
	}
	return [masterRhythm];
}

function isCorrect(x,y) {
	/* Takes in two arrays (normally userRhythm and masterRhythm),
	 * and returns true iff they are equivalent.
	 */
	return !(x<y || y<x);
}

function renderRhythm(userRhythm) {
	/* Draws the user's rhythm in the "soFar" span.
	 * Currently, display is only in plaintext.
	 * Later, this will be replaced with proper musical notation.
	 */
	$('#soFar').text(userRhythm);
}

$(function () {
	/* The main function for processing user input.
	 * The user's rhythms will be stored in a stack,
	 * where each element represents one beat.
	 * The user can select different beat options to push them;
	 * press backspace to pop the most recent beat;
	 * play what they have so far accumulated;
	 * repeat the given rhythm;
	 * ask for a new rhythm;
	 * or give up.
	 */

	var userRhythm = new Array();
	var masterRhythm = generateRhythm();
	$('#answer').text(masterRhythm);
	var locked = false;

	console.log("loaded"); // sanity check

	$('.addRhythm').click(function() {
		if (locked)
			return;
		if (userRhythm[3] == undefined)
			userRhythm.push($(this).attr("rhythm"));
		renderRhythm(userRhythm);
		if ( isCorrect(userRhythm, masterRhythm) )
		{
			$('#smileyface').text(":)");
			locked = true;
		} else if (userRhythm.length == 4) {
			$('#smileyface').text(":(")
		}
	});

	$('#playButton').click(function() {
		/* Play back the userRhythm. */
	})

	$('#newButton').click(function() {
		/* Generate a new masterRhythm. */
		masterRhythm = generateRhythm();
		$('#answer').text(masterRhythm);
		userRhythm = new Array();
		renderRhythm(userRhythm);
		$('#smileyface').text('')
		locked = false;
	})

	$('#repeatButton').click(function() {
		/* Play back the masterRhythm. */
	}) 

	$('#giveupButton').click(function() {
		/* Provide the answer to the user. */
		renderRhythm(masterRhythm);
		locked = true;
	})

	$('#backspace').click(function() {
		/* Remove the most recently added beat from userRhythm. */
		if (locked)
			return;
		userRhythm.pop();
		renderRhythm(userRhythm);
		$('#smileyface').text("")
	});

});