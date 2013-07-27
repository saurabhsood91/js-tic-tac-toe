function init()
{
	alert('here');
	
	var mat = new Array(3);
	var turn = 0;

	for(i = 0; i < 3; i++) {
		mat[i] = new Array(3);
	}

	mat[0][0] = document.getElementById("first");
	mat[0][1] = document.getElementById("second");
	mat[0][2] = document.getElementById("third");
	mat[1][0] = document.getElementById("fourth");
	mat[1][1] = document.getElementById("fifth");
	mat[1][2] = document.getElementById("sixth");
	mat[2][0] = document.getElementById("seventh");
	mat[2][1] = document.getElementById("eigth");
	mat[2][2] = document.getElementById("ninth");

	/*mat[0][0].click = function() {
		if(mat[0][0].style == "unselected") {
			if(turn == 0)
				mat[0][0].class = "player_one_selected";
			else
				mat[0][0].class = "player_two_selected";
		}
	}

	mat[0][1].click = function() {
		if(mat[0][1].style == "unselected") {
			if(turn == 0)
				mat[0][1].class = "player_one_selected";
			else
				mat[0][1].class = "player_two_selected";
		}
	}

	mat[0][1].click = function() {
		if(mat[0][2].style == "unselected") {
			if(turn == 0)
				mat[0][2].class = "player_one_selected";
			else

				mat[0][2].class = "player_two_selected";
	}

	mat[1][0].click = function() {
		if(mat[1][0].style == "unselected") {
			if(turn == 0)
				mat[1][0].class = "player_one_selected";
			else
				mat[1][0].class = "player_two_selected";
		}
	}

	mat[1][1].click = function() {
		if(mat[1][1].class == "unselected") {
			if(turn == 0)
				mat[1][1].class = "player_one_selected";
			else
				mat[1][1].class = "player_two_selected";
		}
	}

	mat[1][2].click = function() {
		if(mat[1][2].class == "unselected") {
			if(turn == 0)
				mat[1][2].class = "player_one_selected";
			else
				mat[1][2].class = "player_two_selected";
		}
	}

	mat[2][0].click = function() {
		if(mat[2][0].class == "unselected") {
			if(turn == 0)
				mat[2][0].class = "player_one_selected";
			else
				mat[2][1].class = "player_two_selected";
		}
	}

	mat[2][1].click = function() {
		if(mat[2][1].class == "selected") {
			if(turn == 0)
				mat[2][1].class = "player_one_selected";
			else
				mat[2][1].class = "player_two_selected";
		}
	}

	mat[2][2].click = function() {
		if(mat[2][2].class == "selected") {
			if(turn == 0)
				mat[2][2].class = "player_one_selected";
			else
				mat[2][2].class = "player_two_selected";
		}
	}*/

	for(int i = 0; i < 3; i++) {
		for(int j = 0; j < 3; j++) {
			mat[i][j].onclick = function() {
				alert('Clicked');
				if(mat[i][j].class == "unselected") {
					if(turn == 0)
						mat[i][j].class = "player_one_selected";
					else
						mat[i][j].class = "player_two_selected";

					if(diagonalCheck(i,j)) {
						if(mat[0][0].class == "player_one_selected" ||
								mat[0][0].class == "player_two_selected") {
							//set all diagonal squares to black
						} else {
							//set all other diagonal squares to black
						}
					} else if(verticalCheck(j)) {
						for(int x = 0; x < 3; x++) {
							mat[x][j].class = "winner";
						}
					} else if(horizontalCheck(i)) {
						for(int x = 0; x < 3; x++) {
							mat[i][x].class = "winner";
						}
					}

				}
			}
		}
	}
}


function diagonalCheck(i,j)
{
	if(i == j) {
		return ((mat[0][0].class == mat[1][1].class == mat[2][2].class) ||
				(mat[2][0].class == mat[1][1].class == mat[0][2].class));
	}
}

function verticalCheck(j)
{
	return (mat[0][j].class == mat[1][j].class == mat[2][j].class);
}

function horizontalCheck(i)
{
	return (mat[i][0].class == mat[i][1].class == mat[i][2].class);
}
