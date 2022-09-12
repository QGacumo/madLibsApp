"use strict";


//Total questions
let numberOfQuestions = 4;

//Questions stored in array
let questions = `Enter a`;
let questionArray = [
    `${questions} surname of the father of the computer?`, 
    `${questions} mechanical device that Charles invented`, 
    `${questions} type of engine`,
    `${questions} type of card that is used in inputting data in early computers`, 
    `${questions} type of memory`,
];

//Question counter default state
let questionCounter = 0;

//Logic functions
let userInputs = [];
for(let i = numberOfQuestions; i >= 0; i--){
    userInputs.push(prompt(questionArray[questionCounter] + `..${i}  questions left)`));
    questionCounter ++;
}

//Alert the logic is done
alert("All done! you're story is ready to go!");

//Original story variable
let originalStory = `<h2>In 1837, Charles ${userInputs[0]} proposed the first general mechanical ${userInputs[1]}, the ${userInputs[2]} Engine.</h2>
<h2>The Analytical Engine contained an ALU (Arithmetic Logic Unit),</h2>
<h2>basic flow control, ${userInputs[3]} (inspired by the Jacquard Loom), and ${userInputs[4]} memory</h2>`;

document.write(originalStory);

/*for debugging copy of originalStory:

In 1837, Charles Babbage proposed the first general mechanical computer, the Analytical Engine. The Analytical Engine contained an ALU (Arithmetic Logic Unit), basic flow control, punch cards (inspired by the Jacquard Loom), and integrated memory.
*/