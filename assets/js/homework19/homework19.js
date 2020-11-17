function from1to100(){
    for(let i = 1; i <= 100; i++){
        console.log(i);
    }
}

function from21to57(){
    for(let i = 27; i <= 57; i++){
        console.log(i);
    }
}

function evenFrom0to100(){
    for(let i = 0; i <= 100; i = i + 2){
        console.log(i);
    }
}

let i = 1;

function summFrom1to100(){
    let count = 0;
    while(i <= 100){
        count = count + i;
        console.log(count);
        i++;
    }
}

function simpleNumbers(){
    let isPrime = false;
    for(let i = 3; i <= 1000; i++){

        for(let j = 2; j <= i - 1; j++){
            if(i % j == 0){
                isPrime = false;
                break;
            } else {
                isPrime = true;
            }
        }

        if(isPrime == true){
            console.log(`Число ${i} простое.`);
        } else {
            console.log(`Число ${i} сложное.`);
        }
    }
}