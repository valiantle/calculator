let outputRow = "";

function addNum(number) {
    outputRow = outputRow + number;
    document.getElementById("Poutput").innerText = outputRow;
}
function delNum(number) {
    outputRow = outputRow.slice(0, -1)
    document.getElementById("Poutput").innerText = outputRow;
    
}

function clearRow() {
    document.getElementById("Poutput").innerText = "";
}
// текст заменяется проблемо но не исчезает на совсем почемуто ????
// текст заменяется проблемо но не исчезает на совсем почемуто ????
