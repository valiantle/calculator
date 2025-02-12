function add() {
    let number1 = parseFloat(document.getElementById("Num1").value);
    let number2 = parseFloat(document.getElementById("Num2").value);
    let summe = number1 + number2;
    document.getElementById("result").innerText = "Ergebnis: " + summe;
}
function mult() {
    let number1 = parseFloat(document.getElementById("Num1").value);
    let number2 = parseFloat(document.getElementById("Num2").value);
    let multres = number1 * number2;
    document.getElementById("result").innerText = "Ergebnis: " + multres;
}
function sub() {
    let number1 = parseFloat(document.getElementById("Num1").value);
    let number2 = parseFloat(document.getElementById("Num2").value);
    let subres = number1 - number2;
    document.getElementById("result").innerText = "Ergebnis: " + subres;
}
function divide() {
    let number1 = parseFloat(document.getElementById("Num1").value)
    let number2 = parseFloat(document.getElementById("Num2").value)
    let divres = number1 / number2;
    document.getElementById("result").innerText = "Ergebnis: " + divres;
}