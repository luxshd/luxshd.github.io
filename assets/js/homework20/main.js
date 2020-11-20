
    
    //Массив хранит значение температуры за 90 дней зимы

    let winterDays = [-48, -46, 48, 27, -20, -35, 43, 4, 9, 10, 41, -46, -4, 0, -38, -49, 25, -46, -48, -23, -25, -22, 12, 38, 19, -20, 26, 4, 19, 23, 26, -41, 4, -13, -9, -11, -7, 38, 27, 41, 14, -35, -38, -44, -44, -22, -24, 29, -32, 41, 7, -25, 3, 27, -45, 10, 48, 8, -34, -49, 17, -16, 41, -11, -50, -6, -34, 20, 14, -18, 39, -28, -33, -27, -48, 40, -37, -44, 0, 46, 36, -34, -50, 8, -3, 26, 40, 10, -36, 24];

    //д/з №1
    freezingCounter = 0;

    isCold = true;
    coldDaysArray = [];
    coldDaysCounter = 0;

    for(let i = 0; i < winterDays.length; i++){

        if(!isCold ){
            if(coldDaysCounter != 0){
                coldDaysArray.push(coldDaysCounter);
            }
            coldDaysCounter = 0;
        }

        if(winterDays[i] < 0){
            isCold = true;
            coldDaysCounter++;
        } else {
            isCold = false;
        }

        if((winterDays[i] >= 0) && ((winterDays[i+1]) < 0)){
            freezingCounter++;
        }

    }

    let maxColdDaysCount = coldDaysArray[0];

    for(let day of coldDaysArray){
        if(day > maxColdDaysCount){
            maxColdDaysCount = day;
        }
    }

    console.log(`Было ${freezingCounter} замерзаний.`);
    console.log(`Самый длинный период заморозков составил ${maxColdDaysCount} дней.`);

    // Вывод данных в HTML

    //Задание 1
    //Показ массива температур
    let december = document.querySelector('.december');
    let january = document.querySelector('.january');
    let february = document.querySelector('.february');
    let monthDay = 1;
    let backgroundPic = '';

    for(let i = 0; i < winterDays.length; i++){

        if (i < 31){
            let div = document.createElement('div');
            if(winterDays[i] < 0){
                div.classList.add('cold');
            } else {
                div.classList.add('warm');
            }
            
            div.innerHTML = `<span>${monthDay}</span><p class="temp">${winterDays[i]}&deg;C</p>`;
            december.appendChild(div);
            monthDay++;
            if(monthDay == 32){
                monthDay = 1;
            }
        } else if (i < 62){
            let div = document.createElement('div');
            if(winterDays[i] < 0){
                div.classList.add('cold');
            } else {
                div.classList.add('warm');
            }

            div.innerHTML = `<span>${monthDay}</span><p class="temp">${winterDays[i]}&deg;C</p>`;
            january.appendChild(div);
            monthDay++;
            if(monthDay == 32){
                monthDay = 1;
            }
        } else if (i < 91){
            let div = document.createElement('div');
            if(winterDays[i] < 0){
                div.classList.add('cold');
            } else {
                div.classList.add('warm');
            }

            div.innerHTML = `<span>${monthDay}</span><p class="temp">${winterDays[i]}&deg;C</p>`;
            february.appendChild(div);
            monthDay++;
            
        }
        
    }

    //Показ кол-ва замерзаний
    let freeze = document.getElementById('freeze');
    freeze.innerHTML = `<i class="fas fa-snowflake text-primary"></i> &nbsp;Количество замерзаний: <b>${freezingCounter}</b>`;

    //Показ самого длинного периода
    let freezePeriod = document.getElementById('freezePeriod');
    freezePeriod.innerHTML = `<i class="fas fa-temperature-low text-primary"></i> &nbsp;Самый длинный период заморозков: <b>${maxColdDaysCount}</b> дней.`;

    //д/з №2
    function getCryptoValues(){
        let bitCoinPrices = [];
        let arrayLength = 30;

        for(let i = 0; i < arrayLength; i++){
            let someNumber = Math.random();
            someNumber = someNumber * 100 + 1;
            someNumber = Math.round(someNumber);
            bitCoinPrices.push(someNumber);
        }

        let bestDeffs = [];
        let buyingDays = [];
        let sellingDays = [];
        let index = 0;
        let indexBuy = 0;
        let indexSell = 0;
        let maxProfit = 0;

        for(let i = 0; i < bitCoinPrices.length; i++){

            let deff = 0;
            let maxDeff = 0;
            let buyingDay = 0;
            let sellingDay = 0;

            for(let j = i + 1; j < bitCoinPrices.length; j++){
                if(bitCoinPrices[j] > bitCoinPrices[i]){
                    deff = bitCoinPrices[j] - bitCoinPrices[i];
                }

                if(deff > maxDeff){
                    maxDeff = deff;
                    buyingDay = i;
                    sellingDay = j;
                }
            }

            if(maxDeff != 0){
                bestDeffs.push(maxDeff);
                buyingDays.push(buyingDay);
                sellingDays.push(sellingDay);
            }
        }

        for(let i = 0; i < bestDeffs.length; i++){
            if(bestDeffs[i] > maxProfit){
                maxProfit = bestDeffs[i];
                index = i;
            }
        }

        indexBuy = buyingDays[index] + 1;
        indexSell = sellingDays[index] + 1;

        //Вывод в html
        console.log(bitCoinPrices);
        let hw2 = document.querySelector('.monthCrypto');

        for(let i = 0; i < bitCoinPrices.length; i++){
            if(i == 0){
                hw2.innerHTML = '';
            }
            let div = document.createElement('div');
            if(i == (indexBuy - 1)){
                div.classList.add('buy-day');
            }
            if(i == (indexSell - 1)){
                div.classList.add('sell-day');
            }
            div.innerHTML = `<span>${i+1}</span><p><b>${bitCoinPrices[i]}$</b></p>`;

            hw2.appendChild(div);
        }

        //Показ дня покупки
        let buy = document.getElementById('buy');
        buy.innerHTML = `<i class="fas fa-shopping-cart text-success"></i>&nbsp;Выгоднее всего <b>купить</b> криптовалюту <b>${indexBuy}</b> числа.`;

        //Показ дня продажи
        let sell = document.getElementById('sell');
        sell.innerHTML = `<i class="fas fa-coins text-warning"></i>&nbsp;Выгоднее всего <b>продать</b> криптовалюту <b>${indexSell}</b> числа.`;
        
        //Показ прибыли
        let profit = document.getElementById('profit');
        profit.innerHTML = `<i class="fas fa-hand-holding-usd text-info"></i>&nbsp;Совершённая <b>сделка</b> принесёт <b>${maxProfit}$</b> прибыли.`;

        console.log(`Самая выгодная сделка: покупка - ${indexBuy} числа, продажа - ${indexSell}, прибыль - ${maxProfit}`);
        
    }
    

    