//Сохраняем исходные температуры в массив
let celTemps = [];
let tags = document.querySelectorAll('.temperature');
for(let tag of tags){
    celTemps.push(parseInt(tag.innerHTML));
}

//Функция обнуления классов
function removeSelect(){
    let selected = document.querySelectorAll('.selected');
    for(let tag of selected){
        tag.classList.remove('selected');
    }
}

//Функция пересчёта в цельсии
function cel(){
    if(cBtn.classList.contains('selected')){
        return;
    }

    removeSelect();
    cBtn.classList.add('selected');

    let temp;
    for(let i = 0; i < celTemps.length; i++){

        temp = Math.round(celTemps[i]);
        tags[i].innerHTML = temp + '° C';

    }
}

//Функция пересчёта в фаренгейты
function far(){
    if(fBtn.classList.contains('selected')){
        return;
    }

    removeSelect();
    fBtn.classList.add('selected');

    let temp;
    for(let i = 0; i < celTemps.length; i++){

        temp = Math.round(celTemps[i] * 1.8 + 32);
        tags[i].innerHTML = temp + '° F';

    }
}

//Функция пересчёта в кельвины
function kel(){
    if(kBtn.classList.contains('selected')){
        return;
    }

    removeSelect();
    kBtn.classList.add('selected');

    let temp;
    for(let i = 0; i < celTemps.length; i++){

        temp = Math.round(celTemps[i] + 273.15);
        tags[i].innerHTML = temp + '° K';

    }
}

