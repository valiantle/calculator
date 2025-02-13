let outputRow = "";

function addNum(number) {
    outputRow = outputRow + number;
    document.getElementById("Poutput").innerText = outputRow;
}
function delNum(number) {
    outputRow = outputRow.slice(0, -1);                                 //slice(start, end)
    document.getElementById("Poutput").innerText = outputRow;
    
}
function clearRow() {
    outputRow = outputRow.slice(0, 0);
    document.getElementById("Poutput").innerText = outputRow;
}

// function clearRow() {
//     document.getElementById("Poutput").innerText = "  ";
// }
// gg easy