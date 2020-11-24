function getBodyIndex(){
    let height = userHeight.value;
    let mass = userMass.value;
    let descriprion;

    let index = mass / (height ** 2);
    index = Math.round(index);

    if(index <= 16){
        descriprion = 'Выраженный дефицит массы тела';
    } else if(index <= 18.5){
        descriprion = 'Недостаточная (дефицит) масса тела';
    } else if(index <= 25){
        descriprion = 'Норма';
    } else if(index <= 30){
        descriprion = 'Избыточная масса тела (предожирение)';
    } else if(index <= 35){
        descriprion = 'Ожирение';
    } else if(index <= 40){
        descriprion = 'Ожирение резкое';
    } else if(index > 40){
        descriprion = 'Очень резкое ожирение';
    }

    indexValue.innerHTML = index;
    indexDescription.innerHTML = descriprion;
}