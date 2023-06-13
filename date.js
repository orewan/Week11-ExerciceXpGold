const datePrompt = require('date-prompt')


function enterTheBirthday(){
datePrompt('When is your birthday?')
.then(isoStr => console.log('Submitted with', isoStr))
.catch(isoStr => console.log('Aborted with', isoStr))
}

let yourBirthday = enterTheBirthday();

const today = new Date();
// Enter the date manually inside the code
// const birthDate = new Date("June 10, 1980, 10:15:00");

const minuteDay = 1000*60;


let diffDay = today-yourBirthday;
let diffMinute = Math.floor(diffDay/minuteDay);


module.exports = function (){
    
    this.info = () =>{
       console.log(" You live " + diffMinute + " minute until today " + " and you are born on the date : "+ yourBirthday );
    }
}




/***********
 *  
 * 
The code without module  date-prompt

const today = new Date();
// Enter the date manually inside the code
// const birthDate = new Date("June 10, 1980, 10:15:00");
//let diffDay = today-birthDate;
//let diffMinute = Math.floor(diffDay/minuteDay);
module.exports = function (){
    this.info = () =>{
       console.log(" You live " + diffMinute + " minute until today " + " and you are born on the date : "+ birthDate );
    }
}

*/


/**
 *  Amodule to enter the date is npm install date-prompt
*/

