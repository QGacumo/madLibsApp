"use strict";

let originalStory = `In 1837, Charles Babbage proposed the first general mechanical computer, the Analytical Engine. The Analytical Engine contained an ALU (Arithmetic Logic Unit), basic flow control, punch cards (inspired by the Jacquard Loom), and integrated memory`;

let userInputs = [0, 1, 2, 3];

console.log(`In 1837, Charles ${userInputs[0]} proposed the first general mechanical ${userInputs[1]}, the Analytical Engine. The ${userInputs[2]} Engine contained an ALU (Arithmetic Logic Unit), basic flow control, punch cards (inspired by the Jacquard Loom), and ${userInputs[3]} memory`)

let numberOfQuestions = 4;

//console.log(numberOfQuestions);

let questionArray =[
    "What is the surname of the inventor?", 
    "What device is a mechanical in the story?", 
    "What engine is determined in the story?", 
    "What memory is in the mechanical computer?"];

let questionCounter = 0;

for(let i = numberOfQuestions; i >= 0; i--){
    if (questionCounter >= 0) {
        console.log(questionArray.indexOf(questionCounter));
    }
}

console.log(questionCounter);



/*originalStory
In 1837, Charles Babbage proposed the first general mechanical computer, the Analytical Engine. The Analytical Engine contained an ALU (Arithmetic Logic Unit), basic flow control, punch cards (inspired by the Jacquard Loom), and integrated memory
*/