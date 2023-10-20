//get HTML element row
const rowElem = document.querySelector(".row");
//Initialization grid global variable
let grid = "";

//Start for loop
for (let i = 0; i <= 100; i++) {
//Initialization local variables one for the class and one for the message
    let msg = "";
    let classIn = "";

    //Check if i is divisible for 3  
    if (i % 3 === 0) {
        //Writing Fizz in the classIn variable
        classIn = "Fizz";
        //Writing classIn in the msg variable
        msg = classIn;
    }

    //Check if i is also divisible for 5
    if (i % 5 === 0) {
        //Writing Buzz in the classIn variable
        classIn += "Buzz";
        //Writing classIn in the msg variable
        msg = classIn;
    }

    //Check if i is not divisible for 3 and 5
    if ((i % 3 !== 0) && (i % 5 !== 0) ) {
        //Writing i in the msg variable
        msg = i;
    }
    
    //Preparing the grid
    grid += `<div class="ms_square border mx-2 ${classIn}">${msg}</div>`;
}

//Writing the grid in the HTML document
rowElem.innerHTML = grid;