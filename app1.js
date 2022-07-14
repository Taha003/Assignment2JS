//chap 31-34
//Q1:
// let date=new Date();


// document.write('<br>'+date);
// //Q2:
// let m= ["January", "February", "March", "April", "May", "June",
// "July", "August", "September", "October", "November", "December"
// ];
// alert('The month is '+ m[date.getMonth()]);

// //Q3:
// let day=['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
// x=[day[date.getDay()]];
// alert('The day is ' + x);
// //Q4:
// if(x=='Sat'){
//     alert("It's a Fun day")
// }
// else if(x=='Sun'){
//     alert("It's a Fun day")
// }

//Q5:
// d=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
// 18,19,20,21,22,23,24,25,26,27,28,29,30,31]
// let d=date.getDate();
// let y=['The day of the month is '+d];
// alert(y);
// if(d<16){
//     alert('First fifteen days of month');
    
// }
// else{
//     alert('Last fifteen days of month');
// }

//Q6:
// function datDiff(d1,d2){
//     var diff=((d1.getTime()-d2.getTime())/1000);
//     diff/=60;
//     return Math.round(diff);
// }

// d1=new Date();
// d2=new Date('Jan-01-1970');
// console.log(datDiff(d1,d2)+' minutes');

// //Q7:
// let hrs=date.getHours();
// console.log(hrs);

// if(hrs<=12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }

// //Q8;
// function laterDate(latersDate,year){
//     let msg=`The last day of the ${year} is ${latersDate}`
//     return msg;
// }

// latersDate=new Date('Dec-31-2020');
// year='2020';

// console.log(laterDate(latersDate,year));

// //Q9:
// function dRamdan(stDate,enDate){
//     let daysDiff=((enDate.getTime()-stDate.getTime())/(1000*3600*24));
//     return (`The number of days past since ${stDate} are `+Math.round(daysDiff));

// }

// stDate=new Date('June-18-2015');
// enDate=new Date();

// console.log(dRamdan(stDate,enDate));

// //Q10:
// function sec(x1,x2){
//     let diffs=((x1.getTime()-x2.getTime())/1000);
//     return(`The number of seconds passed since ${x2} are `+Math.round(diffs));
// }

// x1=new Date();
// x2=new Date('01-01-2015');
// console.log(sec(x1,x2));

// //Q11:
// let getHours=date.getHours();
// console.log(getHours);
// let setHours=date.setHours(getHours-1);
// console.log(setHours);

// //Q12;
// let getDate=date.getFullYear();
// console.log(getDate);
// alert(getDate-100);
//Q13;
function birthYear(age,d){
    let birth='Your birth year is ' + (d-age);
    return birth;
}

d=date.getFullYear();
age=21;
alert(birthYear(age,d));

//Q14;
let name='Muhammad Taha';
let month='June';
let units=200;
let perUnit=30;
let lateCharge=1500;

function netAmount(dx){
    let net='The net amount payable is ' + (units*perUnit)+' Rs withhin the due date '+dx
    return net;    
}

dx=new Date('06/20/2020');
console.log('CONSUMER NAME: '+name);
console.log('BILLING MONTH: '+month);
console.log('UNITS CONSUMED: '+units);
console.log('PER UNIT CHARGE: '+perUnit);
console.log(netAmount(dx));

console.log('The gross payment after due date will be '+((units*perUnit)+lateCharge));



    





