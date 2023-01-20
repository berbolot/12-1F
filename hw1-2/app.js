
var month = Number(prompt('Введите ваше месяц'));
var day = Number(prompt('Введите число'));

if((day > 31 && month > 12)){
    console.log('произошла ощибка');
}else if((month == 12 && day >= 22) || (month == 01 && day <= 19)){
    console.log('ваш знак задиака Козерок');
}else if((month == 01 && day >= 20) || (month == 02 && day <= 18)){
    console.log('ваш знак задиака Водолей');
}else if((month == 02 && day >= 19  && day !== 29 && day !== 30 && day !== 31) || (month == 03 && day <= 20)){
    console.log('ваш знак задиака Рыбы');
}else if((month == 03 && day >= 21) || (month == 04 && day <= 19)){
    console.log('ваш знак задиака Овен');
}else if((month == 04 && day >= 20) || (month == 05 && day <= 20)){
    console.log('ваш знак задиака Телец');
}else{
    console.log('Произошла ощибка');
}
