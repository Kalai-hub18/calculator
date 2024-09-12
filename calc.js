// Function to display values in the input
function displayValue(value) {
    let display = document.querySelector('input[name="display"]');
    if (display) {
        display.value += value;
        console.log("Current display value: ", display.value); // Debugging
    } else {
        console.error("Display element not found.");
    }
}

// Function to clear the display
function clearDisplay() {
    let display = document.querySelector('input[name="display"]');
    if (display) {
        display.value = '';
        console.log("Display cleared."); // Debugging
    } else {
        console.error("Display element not found.");
    }
}

// Function to toggle the sign of the current value in the display
function toggleSign() {
    let display = document.querySelector('input[name="display"]');
    if (display && display.value) {
        display.value = display.value.charAt(0) === '-' ? display.value.slice(1) : '-' + display.value;
        console.log("Toggled sign. Current value: ", display.value); // Debugging
    } else {
        console.error("Display element not found or value is empty.");
    }
}

// Function to delete the last character from the display
function deleteLast() {
    let display = document.querySelector('input[name="display"]');
    if (display && display.value) {
        display.value = display.value.slice(0, -1);
        console.log("Deleted last character. Current value: ", display.value); // Debugging
    } else {
        console.error("Display element not found or value is empty.");
    }
}

// Function to calculate the result
function calculateResult() {
    let display = document.querySelector('input[name="display"]');
    if (display) {
        try {
            display.value = eval(display.value);
            console.log("Calculation successful. Result: ", display.value); // Debugging
        } catch (e) {
            display.value = 'Error';
            console.error("Calculation error: ", e); // Debugging
        }
    } else {
        console.error("Display element not found.");
    }
}
