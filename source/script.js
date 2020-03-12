// References to field elements
var input = document.getElementById('text-field');
var defaultObjectOpactiy = '.4';
var selectedObjectOpacity = '1';
var svgImage = document.getElementById("svg-image");
var svgDoc;
var svgObjects;

function clickObject(id) {
    input.value = id; // set the value of the input box
    setAnswer(input.value); // update the field's current answer
    highlightSelectedObject(); // highlight selected Object
}

function highlightSelectedObject() {
    setAllColorsToDefault(); // set all the colors to default
    var currentObject = svgDoc.getElementById(input.value); // get reference to selected element
    
    if (currentObject) { // check if element exists
        currentObject.style.opacity = selectedObjectOpacity; // set the opacity of the selected object to selectedObjectOpacity
    }
}

function setAllColorsToDefault() {
    for (var i = 0; i < svgObjects.length; i++) { // go through each object
        svgObjects[i].style.opacity = defaultObjectOpactiy; // set the opacity to defaultObjectOpactiy
    }
}

function setClickableObjects() {
    for (var i = 0; i < svgObjects.length; i++) { // go through each object
        svgObjects[i].onclick = function() { // add a click event listener
            clickObject(this.id); 
        }
    }
}

svgImage.style.opacity = 0; // hide the svg until it's done loading

// we need to wait for the SVG to load in order to access the IDs of the objects it contains
svgImage.addEventListener('load', function() {
    svgDoc = svgImage.contentDocument; // access the svg shadow doc
    svgObjects = svgDoc.querySelector('svg').querySelectorAll('[id]'); // create an array of all objects within the svg file that have an id attribute
    highlightSelectedObject(); // highlight the selected object (if one exists)
    setClickableObjects(); // make all the objects clickable
    svgImage.style.opacity = 1; // show the svg
}, true);

// Define what happens when the user attempts to clear the response
function clearAnswer() {
    input.value = '';
    setAllColorsToDefault();
} 

// Save the user's response (update the current answer)
input.oninput = function() {
    setAnswer(input.value);
    highlightSelectedObject();
};

// check for standard appearance options and apply them
if ( fieldProperties.APPEARANCE.includes("numbers_phone") === true ) {
    input.type = "tel";
} else if ( fieldProperties.APPEARANCE.includes("numbers_decimal") === true ) {
    input.pattern = "[0-9]*";
    input.inputmode = "numeric";
} else if ( fieldProperties.APPEARANCE.includes("numbers") === true ) {
    input.type = "number";
} 
