function tenderGeneratorUa(){
    let tElements = ['tName', 'tOrder', 'tOrderAdress', 'tOrderName', 'tDate', 'tItem', 'markItUp'];

    let tName = document.querySelector('#tName').value;
    let tOrder = document.querySelector('#tOrder').value;
    let tOrderAdress = document.querySelector('#tOrderAdress').value;
    let tOrderName = document.querySelector('#tOrderName').value;
    let tDate = document.querySelector('#tDate').value;
    let tSplitedDate = tDate.split('-');
    tSplitedDate[1] = getMonthUa(tSplitedDate[1]);
    tSplitedDate.reverse();
    tDate = tSplitedDate.join(' ') + 'р.';
    let tItem = document.querySelector('#tItem').value;
    let markItUp = document.querySelector('#markItUp').value;

    let hyperText = 
    `
    <p><b>${tName}</b></p>

    <p>Замовник торгів:</p>

    <ol type="1">
    <li>${tOrder}</li>
    <li>Місцезнаходження: ${tOrderAdress}</li>
    <li>Відповідальний за проведення тендеру: ${tOrderName}</li>
    </ol>

    <p>Пропозиції приймаються <b>до 18:00 ${tDate}</b></p>

    <p><b>Предмет тендеру: </b>${tItem}</p>
    ${markItUp}
    `;

    let tenderDisplay = document.querySelector('#tenderDisplay');
    tenderDisplay.innerHTML = hyperText;
}

function tenderGeneratorRu(){
    let tElements = ['tName', 'tOrder', 'tOrderAdress', 'tOrderName', 'tDate', 'tItem', 'markItUp'];

    let tName = document.querySelector('#tName').value;
    let tOrder = document.querySelector('#tOrder').value;
    let tOrderAdress = document.querySelector('#tOrderAdress').value;
    let tOrderName = document.querySelector('#tOrderName').value;
    let tDate = document.querySelector('#tDate').value;
    let tSplitedDate = tDate.split('-');
    tSplitedDate[1] = getMonthRu(tSplitedDate[1]);
    tSplitedDate.reverse();
    tDate = tSplitedDate.join(' ') + 'р.';
    let tItem = document.querySelector('#tItem').value;
    let markItUp = document.querySelector('#markItUp').value;

    let hyperText = 
    `
    <p><b>${tName}</b></p>

    <p>Заказчик торгов:</p>

    <ol type="1">
    <li>${tOrder}</li>
    <li>Местонахождение: ${tOrderAdress}</li>
    <li>Ответственный за проведения тендера: ${tOrderName}</li>
    </ol>

    <p>Предложения принимаются <b>до 18:00 ${tDate}</b></p>

    <p><b>Предмет тендера: </b>${tItem}</p>
    ${markItUp}
    `;

    let tenderDisplay = document.querySelector('#tenderDisplay');
    tenderDisplay.innerHTML = hyperText;
}
function getMonthUa(month){
    switch (month){
        case '01':
            return('січня');
        
        case '02':
            return('лютого');
        
        case '03':
            return('березня');   
        
        case '04':
            return('квітня');

        case '05':
            return('травня');

        case '06':
            return('червня');

        case '07':
            return('липня');

        case '08':
            return('серпня');

        case '09':
            return('вересня');

        case '10':
            return('жовтня');

        case '11':
            return('листопада');

        case '12':
            return('грудня');
    }
}

function getMonthRu(month){
    switch (month){
        case '01':
            return('января');
        
        case '02':
            return('февраля');
        
        case '03':
            return('марта');   
        
        case '04':
            return('апреля');

        case '05':
            return('мая');

        case '06':
            return('июня');

        case '07':
            return('июля');

        case '08':
            return('августа');

        case '09':
            return('сентября');

        case '10':
            return('октября');

        case '11':
            return('ноября');

        case '12':
            return('декабря');
    }
}