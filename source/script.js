// Find the input element
var input = document.getElementById('text-field');

// Define what happens when the user attempts to clear the response
function clearAnswer() {
    input.innerHTML = '';
} 

// If the field is not marked readonly, then focus on the field and show the on-screen keyboard (for mobile devices)
function setFocus() {
    if(!fieldProperties.READONLY){
        input.focus();
        if (window.showSoftKeyboard) {
            window.showSoftKeyboard();
        }
    }
}

// Save the user's response (update the current answer)
input.oninput = function() {
    setAnswer(input.value);
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
