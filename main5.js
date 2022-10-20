function chek(){
    let q1 = 0 , q2 = 0, q3 = 0;
 
    let num1;
 
    for(let i = 0; i < 10; i++)
    {
        num1 = parseInt(prompt("Введите " + (i+1) + " чисел= "))
 
        if(num1 > 0)
        {
            q1++;
        }else
        if(num1 === 0)
        {
            q3++;
        }else
        if(num1 < 0)
        {
            q2++;
        }
    }
 
    alert("Количество положительных: " + q1);
    
    alert("Количество отрицательных: " + q2);
     
    alert("Количество нулей: " + q3);
 
    return 0;
}