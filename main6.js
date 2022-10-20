let b06 = document.getElementById("b06");

b06.onclick = function () {
    do {
        let a = +prompt('Введите первое число');
        let b = +prompt('Введите второе число');
        let i = prompt('Выберите знак - + / *');

        switch (i) {
            case '+':
                alert(a + b);
                break;
            case '-':
                alert(a - b);
                break;
            case '/':
                alert(a / b);
                break;
            case '*':
                alert(a * b);
            default:
                break;
        }

    } while (confirm('Хотите ли вы решить еще один пример?'));
}