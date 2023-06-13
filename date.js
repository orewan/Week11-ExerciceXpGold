const today = new Date();           // the date of the day (change everyDay, Mon Jun 12 2023 )

// Set the date
const endDate = new Date("January 01, 2024 00:00:00"); // Mon Jan 01 2024  // same as (new Date("2024-01-01"))

// Difference between Days 
let diffHourDays = endDate.getTime() - today.getTime();

let oneDay = 1000*60*60*24;
let diffDay = Math.floor(diffHourDays / oneDay);

// Difference between Date in hour 
let hourDay = 1000*60*60;
let diffHour = Math.floor(diffHourDays / hourDay);


// Difference between Date in hour (24 hours)
let todayHour     = today.getHours();
let endDateHour   = endDate.getHours();

let diff_24_Hour =  24-(todayHour-endDateHour);

// Difference between Date in Minute
let todayMinute   = today.getMinutes();
let endDateMinute = endDate.getMinutes();

let diffMinute = 60-(todayMinute-endDateMinute);

// Difference between Date in Seconds
let todaySecond   = today.getSeconds();
let endDateSecond = endDate.getSeconds();

let diffSecond = 60-(todaySecond-endDateSecond);

//console.log("The fist January 2024 is in " + diffDay + " day(s) and " + diff_24_Hour +":"+ diffMinute+ ":" + diffSecond + " Hours  or " + diffHour + " Hour(s) until the day : " + endDate );

module.exports = function(){
    this.info = () =>{
    console.log("The fist January 2024 is in " + diffDay + " day(s) and " + diff_24_Hour +":"+ diffMinute+ ":" + diffSecond + " Hours  or " + diffHour + " Hour(s) until the day : " + endDate );
    }
};

//console.log(today.toDateString());
//console.log(endDate.toDateString());