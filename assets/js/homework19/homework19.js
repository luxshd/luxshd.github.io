function from1to100(){

    let parent = document.querySelector('#content');
    parent.innerHTML = '';

    for(let i = 1; i <= 100; i++){
        console.log(i);
        let li = document.createElement('li');
        li.innerHTML = i;
        parent.appendChild(li);
    }
}

function from21to57(){

    let parent = document.querySelector('#content');
    parent.innerHTML = '';

    for(let i = 27; i <= 57; i++){
        console.log(i);

        let li = document.createElement('li');
        li.innerHTML = i;
        parent.appendChild(li);
    }
}

function evenFrom0to100(){

    let parent = document.querySelector('#content');
    parent.innerHTML = '';

    for(let i = 0; i <= 100; i = i + 2){
        console.log(i);

        let li = document.createElement('li');
        li.innerHTML = i;
        parent.appendChild(li);
    }
}

let i = 1;

function summFrom1to100(){

    let parent = document.querySelector('#content');
    parent.innerHTML = '';

    let count = 0;
    while(i <= 100){
        count = count + i;
        console.log(count);
        i++;

        let li = document.createElement('li');
        li.innerHTML = count;
        parent.appendChild(li);
    }
}

function simpleNumbers(){

    let parent = document.querySelector('#content');
    parent.innerHTML = '';

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

            let li = document.createElement('li');
            li.innerHTML = `Число ${i} простое.`;
            parent.appendChild(li);
        } else {
            console.log(`Число ${i} сложное.`);

            let parent = document.querySelector('#content');
            let li = document.createElement('li');
            li.innerHTML = `Число ${i} сложное.`;
            parent.appendChild(li);
        }
    }
}