let number = +prompt('Введите число : ');
let count = +prompt('Введите цифру для сдвига: ');
let number2 = number<0 ? number*(-1) : number;
for(i = count; i > 0; i--){
  let count2=0;
  for(j=number2; j>=1; j/=10){
    count2++;
  }
  let power = 10**(count2-1);
  number2=(number2-Math.floor(number2/power)*power)*10+Math.floor(number2/power);
}
alert(number2);