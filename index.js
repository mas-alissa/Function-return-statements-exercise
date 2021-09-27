function checkNumber(number){
if(number > 100){
  return true ;
} else{
   return false;
}
}

checkNumber(101);

function bouncer (maxnum,age,currentnum){
if(maxnum == 10){
     console.log("It's too busy now, come back later");
} else if(age < 18){
     console.log("this is a club for adults");
} else if(currentnum < 10){
     console.log("come in")
} else {
     console.log("not possible")
}
}

bouncer(9,18,9);

function calcAverage(num1,num2,num3,num4,num5){
  return  Math.round(num1+num2+num3+num4+num5/5)
}
calcAverage(10,10,10,8,9);