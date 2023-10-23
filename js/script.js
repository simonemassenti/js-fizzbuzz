//get HTML element row
const rowElem = document.querySelector(".row");
//Initialize grid global variable
let grid = "";

//Start for loop
for (let i = 1; i <= 100; i++) {
    //Initialize local variables one for the class and one for the message
    let msg = "";
    let classIn = "";

    //Check if i is divisible for 3  
    if (i % 3 === 0) {
        //Write Fizz in the classIn variable
        classIn = "Fizz";
        //Write classIn in the msg variable
        msg = classIn;
    }

    //Check if i is also divisible for 5
    if (i % 5 === 0) {
        //Write Buzz in the classIn variable
        classIn += "Buzz";
        //Write classIn in the msg variable
        msg = classIn;
    }

    //Check if i is not divisible for 3 and 5
    if ((i % 3 !== 0) && (i % 5 !== 0) ) {
        //Write i in the msg variable
        msg = i;
    }
    
    //Prepare the grid
    grid += `<div class="ms_square border mx-2 ${classIn}">${msg}</div>`;
}

//Write the grid in the HTML document
rowElem.innerHTML = grid;