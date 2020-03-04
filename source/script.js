// References to field elements
var input = document.getElementById('text-field');
var defaultPathFill = "rgba(0,0,0,.4)";
var selectedPathFill = "#047CC2";
var textColor = "rgba(0,0,0,.4)";
var svgImage = document.getElementById("svg-image");
var svgDoc;
var svgPaths;

function clickPath(id) {
    input.value = id; // set the value of the input box
    setAnswer(input.value); // update the field's current answer
    setAllColorsToDefault(); // set all the colors to default
    setCurrentColorToSelected(id);
}

function setAllColorsToDefault() {
    svgDoc = svgImage.contentDocument;
    svgPaths = svgDoc.querySelectorAll('path');
    for (var i=0; i < this.svgPaths.length; i++) {
        svgPaths[i].setAttribute("fill", defaultPathFill);
    }
}

function setCurrentColorToSelected(id) {
    currentPath = svgDoc.getElementById(id);
    currentPath.setAttribute("fill", selectedPathFill);
}

function setClickablePaths() {
    svgDoc = svgImage.contentDocument;
    svgPaths = svgDoc.querySelectorAll('path');
    for (var i=0; i < this.svgPaths.length; i++) {
        currentPathId = svgPaths[i].id;
        svgPaths[i].onclick = function() {
            clickPath(currentPathId);
        }
    }
}

// we need to wait for the SVG to load in order to access the IDs of the paths
window.onload=function() {
    setAllColorsToDefault();
	setClickablePaths();
};

// Define what happens when the user attempts to clear the response
function clearAnswer() {
    input.innerHTML = '';
    setAllColorsToDefault();
} 

// Save the user's response (update the current answer)
input.oninput = function() {
    setAnswer(input.value);
    setAllColorsToDefault();
}

// check for standard appearance options and apply them
if ( fieldProperties.APPEARANCE.includes("numbers_phone") == true ) {
    input.type = "tel";
} else if ( fieldProperties.APPEARANCE.includes("numbers_decimal") == true ) {
    input.pattern = "[0-9]*";
    input.inputmode = "numeric";
} else if ( fieldProperties.APPEARANCE.includes("numbers") == true ) {
    input.type = "number";
} 
