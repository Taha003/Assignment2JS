//Q1:
// let x=prompt('Enter your input');
// document.write(x.toUpperCase());

//Q2:
// let y=prompt('Write your input');
// document.write(y.split(''));

//MEASURING LENGTHS AND EXTRACTING PARTS:

//Q1:
// let mob=prompt('Your favourite mobile phone');
// document.write(mob.length);

//Q2:
// let char=prompt('enter your value');
// let disp=char.charAt(char.length-1);
// document.write(disp);

//STRINGS:FINDING SEGMENTS
//Q1:
let txt='Pakistani';
let int=txt.includes('n');
document.write(int);

//Q2:
// let uName=prompt('Enter your username:')
// let sVar=['@','!'];

// for(i=0;i<sVar.length;i++){
//     if(uName.includes(sVar[i])){
//     alert('Enter valid username') 
//     break;
//     }
// }

//Q3;
var str='The quick brown fox jumps over the lazy dog';
var count=(str.match('the') || []).length;
document.write('<br>'+'This string contains'+count+' times the');

//STRINGS:REPLACING CHRACTERS
//Q1:
let city='Hyderabad';
let rep=city.replace('Hyder','Islam');
document.write('<br>'+rep);

//Q2:
var message = 'Ali and Sami are best friends. They play cricket and football together.'
let Y=message.replace(/and/g,'&');
document.write('<br>'+ Y);

//Q3:
// let roun=prompt('Enter your rounding number');
// document.write('<br>'+Math.round(roun));
// let flor=prompt('Enter your number');
// document.write('<br>'+Math.floor(flor));
// let cel=prompt('Enter your ceil');
// document.write('<br>'+Math.ceil(cel)); 

//Q4:
// let neg=+prompt('Enter your negative number');
// document.write('<br>'+neg);
// document.write('<br>'+Math.round(neg));
// document.write('<br>'+Math.floor(neg));
// document.write('<br>'+Math.ceil(neg));

//GENERATING RANDOM NUMBERS:
//Q1:
// let dice=Math.floor(Math.random()*6)+1;
// document.write('<br>'+ dice);

// //Q2:
// let toss=Math.floor(Math.random()*2)+1;
// document.write('<br>'+toss);

// if(toss==1){
//     document.write('<br>'+'Tails')

// }
// else{
//     document.write('<br>'+'Heads')
// }
// //Q3:
// let i=Math.floor(Math.random()*10)+1;
// let j=+prompt('enter your value');

// if(i==j){
//     document.write('<br>'+'Congratulations! numbers matched')
// }

//CONVERTING STRINGS TO INTEGERS AND DECIMALS:
//Q1:
// let weight=prompt('Enter your weight');
// let w1=parseInt(weight);
// let w2=parseFloat(weight);

// document.write('<br>'+w1);
// document.write('<br>'+w2+' kgs');

//CONVERTING STRING TO A NUMBER AND NUMBER TO STRING:
//Q1:
let str1='472';
let num=parseInt(str1);
document.write('<br>'+num);
document.write('<br>'+typeof(num));

//Q2:
let num1=35.36;
let str2=num1.toString();
let str3=str2.replaceAll('.','');
document.write('<br>'+str2);
document.write('<br>'+str3);

//STRINGS:FINDING A CHRACTER AT A LOCATION
//Q1:
let chrac='Pakistani';
let fnd=chrac.charAt(3);
document.write('<br>'+'The chracter at third index of Pakistani is '+fnd);

//CONTROLLING THE LENGTH OF DECIMALS:
let obtained=30;
let total=45;
let percentage=(obtained/total)*100;
document.write('<br>'+'The percentage is '+percentage.toFixed(2)+ "%");















