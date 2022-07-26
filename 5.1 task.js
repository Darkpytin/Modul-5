let OddOrEven = +prompt("Введите число");
if(typeof OddOrEven === "number" && !isNaN(OddOrEven)) {
    if (OddOrEven % 2 === 0) {
        console.log("Данное число чётное");
    } else {
        console.log("Данное число нечётное");}   
}
else {
    console.log("Упс, кажется, вы ошиблись");
}