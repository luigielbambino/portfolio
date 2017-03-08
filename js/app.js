$( document ).ready(function() {   
    tileSizing();
});


function tileSizing(){
	xArea = $("#tile-container").width();
	yArea = $("#tile-container").height();
	xColumns = 5;
	cubeSize = (xArea / xColumns);
	yRows = yArea / cubeSize;

	stringA = "Sides size: "+ cubeSize;

	console.log(stringA);

	$(".tile-area").css({"width": cubeSize, "height": cubeSize});

	appendTile(xColumns, yRows);
}


function appendTile(xColumns, yRows){
	var currentCubes = Math.round($(".tile-area").length);
	var xColumns = xColumns;
	var maxCubes = Math.round(xColumns * yRows);

	console.log(currentCubes, maxCubes);
	printCubes = maxCubes - currentCubes -1;

	console.log(printCubes);

	if (currentCubes < maxCubes) {
		for (var i = 0; i < printCubes; i++) {
			$("#tile-container").append("<div class='tile-area tile-blue'></div>");
		};
	};

}


function sideSize(area){
	var areaSize = area;
	var i = 0;
	var side = 0;
	
	while (side < areaSize) {
		i++;
		side = i * i;
	}
	side = i - 1;

	return side;
}