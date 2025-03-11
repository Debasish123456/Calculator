let screen = document.getElementById("screen");

function append(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = "";
}

function square() {
    screen.value = Math.pow(eval(screen.value), 2);
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        alert("Invalid Expression");
        screen.value = "";
    }
}
