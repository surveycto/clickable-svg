// References to field elements
var input = document.getElementById('text-field');
var defaultObjectOpactiy = '.4';
var selectedObjectOpacity = '1';
var svgImage = document.getElementById("svg-image");
var svgDoc;
var svgObjects;
var svgObjectsType;

function clickObject(id) {
    input.value = id; // set the value of the input box
    setAnswer(input.value); // update the field's current answer
    highlightSelectedObject(); // highlight selected Object
}

function highlightSelectedObject() {
    setAllColorsToDefault(); // set all the colors to default
    var currentObject = svgDoc.getElementById(input.value); // get reference to selected element
    if (currentObject) { // check if element exists
        if (svgObjectsType == 'groups') {
            // if the svg contains groups of paths, then we need to set the color of each path within the selected group
            var groupPaths = currentObject.querySelectorAll('path');
            for (var i = 0; i < groupPaths.length; i++) {
                groupPaths[i].style.opacity = selectedObjectOpacity;
            }
        } else {
            currentObject.style.opacity = selectedObjectOpacity;
        }
        
    }
}

function setAllColorsToDefault() {
    if (svgObjectsType == 'groups') {
        // if the svg contains groups of paths, then we need to set the color of each path within each group
        for (var i = 0; i < svgObjects.length; i++) {
            var groupPaths = svgObjects[i].querySelectorAll('path');
            for (var i2 = 0; i2 < groupPaths.length; i2++) {
                groupPaths[i2].style.opacity = defaultObjectOpactiy;
            }
        }
    } else {
        // if the svg only contains paths, then we can set the color of the paths directly
        for (var i = 0; i < svgObjects.length; i++) {
            svgObjects[i].style.opacity = defaultObjectOpactiy;
        }
    }
}

function setClickableObjects() {
    for (var i = 0; i < svgObjects.length; i++) {
        svgObjects[i].onclick = function() {
            clickObject(this.id);
        }
    }
}
// hide the svg until it's done loading
svgImage.style.opacity = 0;

// we need to wait for the SVG to load in order to access the IDs of the objects it contains
svgImage.addEventListener('load', function() {
    svgDoc = svgImage.contentDocument;
    // check the svg image to see if it uses groups or paths as the identifiable objects in the image
    if (svgDoc.querySelector('g').hasAttribute('id')) { // if there is a <g> element with an ID, then it uses groups as the clickable objects
        svgObjectsType = 'groups';
        svgObjects = svgDoc.querySelectorAll('g');
    } else { // otherwise, it uses paths as the clickable objects
        svgObjectsType = 'paths';
        svgObjects = svgDoc.querySelectorAll('path');
    }
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
