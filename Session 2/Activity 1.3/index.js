count = 0;
increment = 1;

function increment_click() {
    count += increment;
    document.getElementById("total").innerHTML = `${count}`;
}

function clear_click() {
    count = 0;
    document.getElementById("total").innerHTML = `${count}`;
}