function getBodyMassIndex(){
    let mass = +prompt('Введите вес (кг)');
    let height = +prompt('Введите рост (м)');

    let index = mass / (height ** 2);

    let resultText;

    if (index <= 16) {
        resultText = "Выраженный дефицит массы тела";
    } else if (index <= 18.5) {
        resultText = "Недостаточная (дефицит) масса тела";
    } else if (index <= 25) {
        resultText = "Норма";
    } else if (index <= 30) {
        resultText = "Избыточная масса тела (предожирение)";
    } else if (index <= 35) {
        resultText = "Ожирение";
    } else if (index <= 40) {
        resultText = "Ожирение резкое";
    } else if (index > 40) {
        resultText = "Очень резкое ожирение";
    }

    console.log(`Индекс массы тела: ${index}`);
    console.log(resultText);
}

function getYear(){
    let year = +prompt('Введите год');
    let isV = false;

    if (year % 4 == 0) {
        isV = true;
    }

    if (year % 100 == 0) {
        isV = false;
    }

    if (year % 400 == 0) {
        isV = true;
    }

    if(isV) {
        console.log(`${year}г. высокосный`);
    } else {
        console.log(`${year}г. не высокосный`);
    }
}