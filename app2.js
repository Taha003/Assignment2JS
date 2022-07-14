//Chap 35-39;
//Q1:
// function curDate(dy){
//     let currentDate='The current date is '+dy;
//     return currentDate;
//  }
// dy=new Date();
// document.write('<br>'+curDate(dy));

// //Q2:
// function greet(firstName,lastName){
//     let msg=`Hi! ${firstName} so/do ${lastName} how are you doing?`
//     return msg;
// }

// firstName='Muhammad Taha';
// lastName='Mhammad Imran';

// alert(greet(firstName,lastName));

// //Q3:
// function sum(num1,num2){
//     let add=`The addition of the two numbers ${num1} & ${num2} will result ${num1+num2}`
//     return add;
// }

// num1=2;
// num2=7;
// alert(sum(num1,num2));

//Q4:

// function calc(operator,value1,value2){
//     if(operator=='+'){
//         let i=('Your added value is '+(value1+value2))
//         {return i}
        
//     }
        
//     else if(operator=='-'){
//         let j=('your subracted value is '+(value1-value2))
//         {return j}
        
//     }
        
//     else if(operator=='*'){
//         let k=('your multiplication value is '+(value1*value2))
//         {return k}
//     }
    
//     else if(operator=='/'){
//         let l=('Your divided value is '+(value1/value2))
//         {return l}
//     }
// }
// operator=prompt('Enter your operator');
// value1=+prompt('Enter your first value');
// value2=+prompt('Enter your second value');
// alert(calc(operator,value1,value2));    

//Q5:
// function square(value){
//     let val='Your squared value is '+(value*value);
//     return val;

// }

// value=+prompt('Enter your value for squaring');
// alert(square(value));


// //Q6:
// function factorial(n){
//     result=1;
//     if(n==0 || n==1){
//         return result;
//     }
//     else{
//     for(var x=n;x>=1;x--){
//         result=x;
//     }
//     return result;
// }
// }

// n=+prompt('enter your value for factorial');
// alert('Your factorial of '+ n + ' is '+factorial(n));

// //Q7;

// function count(start,end){
    
//     for(var i=start;i<=end;i++){
//     return i;     
//     }
    
// }


// start=+prompt('Enter your starting value');
// end=+prompt('Enter your ending value');
// console.log(count(start,end));

//Q8:
// function tri(per,base){
//     let x=(Math.pow(per,2)+Math.pow(base,2));
//     let y=Math.sqrt(x);
//     return y.toFixed(2);
// }

// per=+prompt('Enter perpendicular length:');
// base=+prompt('Enter base length:');

alert('your hyp is '+tri(per,base));

//Q9:
// function area(width,height){
//     let res=width*height;
//     return res;
// }

// width=+prompt('Enter width of your rectangle');
// height=+prompt('Enter height if your rectangle');

// alert('Your area of rectangle is '+area(width,height));

//Q10:
// function palindrome(str){
//     let original=str;
//     var x=str.split("");
//     var y=x.reverse();
//     y=y.join("");

//     if(original==y){
//         alert(str + " is a palindrome")
//     }

//     else{
//         alert(str + " is not a palindrome")
//     }
// }

// str=prompt('enter your text');
// palindrome(str);

//Q11:
// function upperCase(string){
//     let upperCaseString=string.toUpperCase()
//     return upperCaseString;
// }

// string=prompt('Enter your string');
// alert(upperCase(string));
