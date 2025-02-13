function addNum(number) {
    let currentValue = document.getElementById("output1").innerText;
    let newValue = currentValue + number;
    document.getElementById("output1").innerText = newValue;
}

function delNum(number) {
    let currentValue = document.getElementById("output1").innerText;     //slice(left, right)
    let newValue = currentValue.slice(0, -1);
    document.getElementById("output1").innerText = newValue;
   
}

function clearRow() {
    let currentValue = "";
    document.getElementById("output1").innerText = currentValue;
}

function clearAll() {
    let currentValue = "";
    let newValue = "";
    document.getElementById("output1").innerText = currentValue;
    document.getElementById("output2").innerText = newValue;
}


//MOVING VARIATIONS MOVING VARIATIONS MOVING VARIATIONS MOVING VARIATIONS
//OK thing is that when you + you dont actually plus but add to number inside first string symbol like + - * / etc and then 
// move this coop to higher string THE END, atleast with this massive
function movePlus() {
    let outputRow1 = document.getElementById("output1").innerText;
    outputRow1 = outputRow1 + "+";
    document.getElementById("output2").innerText = outputRow1;
    document.getElementById("output1").innerText = "";
}
function moveMin() {
    let outputRow1 = document.getElementById("output1").innerText;
    outputRow1 = outputRow1 + "-";
    document.getElementById("output2").innerText = outputRow1;
    document.getElementById("output1").innerText = "";
}
function moveMul() {
    let outputRow1 = document.getElementById("output1").innerText;
    outputRow1 = outputRow1 + "*";
    document.getElementById("output2").innerText = outputRow1;
    document.getElementById("output1").innerText = "";
}
function moveDiv() {
    let outputRow1 = document.getElementById("output1").innerText;
    outputRow1 = outputRow1 + "/";
    document.getElementById("output2").innerText = outputRow1;
    document.getElementById("output1").innerText = "";
}




//FINAL OUTPUTS = ...//FINAL OUTPUTS = ...//FINAL OUTPUTS = ...//FINAL OUTPUTS = ...//FINAL OUTPUTS = ...

                    //DIRECT OUTPUTS
                    //easy one i dont need to work with both outputs and /*-+ selector just math metod and done.

function moveSqu() {
    let outputRow1 = parseFloat(document.getElementById("output1").innerText);
    let result = Math.sqrt(outputRow1);
    document.getElementById("output1").innerText = result;
}

                    //Selective OUTPUTS
//lost like 5-6 houers on that part just by trying to find logical concept that can make
//selection from my output without using to much code that we didnt learn yet// btw one of the best solutions i
//found was switch+case+break, but it was kinda far for me idc better will learn it later with class T_T
function searchFor() {
    let outputRow2 = document.getElementById("output2").innerText; 
    if (outputRow2.includes('+')) {
        functionplus ();
    } else if (outputRow2.includes('-')) {
        functionminus ()
    } else if (outputRow2.includes('*')) {
        functionmult()
    } else if (outputRow2.includes('/')) {
        functiondiv()
    }
}



function functionplus() {
    let outputRow1 = parseFloat(document.getElementById("output1").innerText);//задаем данные как циферки
    let outputRow2 = document.getElementById("output2").innerText;//this string is special it have a symbol inside that we wana get out
    let finalRow2 = outputRow2.slice(0, -1)                 //NAN кароче без этого фул не работает т.к. в строке есть символ что приводит к возникновению 21:14 btw
    finalRow2 = parseFloat(finalRow2);                      //when symbol is out we translate that what is left to numbers
    let summ = finalRow2 + outputRow1;                      //then summ is finaly made
    document.getElementById("output1").innerText = summ;    //then in main output we give summ as a text
    document.getElementById("output2").innerText = "";      //and in secondary output we clear space from numbers left.
}
function functionminus() {
    let outputRow1 = parseFloat(document.getElementById("output1").innerText);
    let outputRow2 = document.getElementById("output2").innerText;
    let finalRow2 = outputRow2.slice(0, -1)                 
    finalRow2 = parseFloat(finalRow2);                      
    let summ = finalRow2 - outputRow1;                      
    document.getElementById("output1").innerText = summ;    
    document.getElementById("output2").innerText = "";
}
function functionmult() {
    let outputRow1 = parseFloat(document.getElementById("output1").innerText);
    let outputRow2 = document.getElementById("output2").innerText;
    let finalRow2 = outputRow2.slice(0, -1)                 
    finalRow2 = parseFloat(finalRow2);                      
    let summ = finalRow2 * outputRow1;                      
    document.getElementById("output1").innerText = summ;    
    document.getElementById("output2").innerText = "";
}
function functiondiv() {
    console.log()
    let outputRow1 = parseFloat(document.getElementById("output1").innerText);
    let outputRow2 = document.getElementById("output2").innerText;
    let finalRow2 = outputRow2.slice(0, -1);
    if (outputRow1 === 0) {
        document.getElementById("output1").innerText = "M-M-M- nah nah nah!"
        let hidenmsg = "I am smarty-panty(noob)";
        hidenmsg = hidenmsg.slice(0, -6);
        console.log(hidenmsg); //btw still dont remamber basic stuff and had to look bakwards at leson examples to remamber how to console.log XD
    } else {
        let summ = finalRow2 / outputRow1;                      
        document.getElementById("output1").innerText = summ;    
        document.getElementById("output2").innerText = "";
    }
}