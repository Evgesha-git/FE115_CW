function delivery() {
    let fieldName = null,
        fieldPhone = null,
        fieldEmail = null,
        filedDeliveryMethods = null,
        fieldDateCurrent = null,
        fiedDistA = null,
        fiedDistB = null,
        fiedDateDeparture = null,
        fiedDateDelivery = null;

    let dataArray = []


    let distances = [
        {
            a: 'Брест',
            b: 'Гомель',
            d: 531
        },
        {
            a: 'Брест',
            b: 'Гродно',
            d: 269
        },
        {
            a: 'Брест',
            b: 'Витебск',
            d: 614
        },
        {
            a: 'Брест',
            b: 'Минск',
            d: 345
        },
        {
            a: 'Брест',
            b: 'Могилев',
            d: 522
        },
        {
            a: 'Гомель',
            b: 'Гродно',
            d: 581
        },
        {
            a: 'Гомель',
            b: 'Витебск',
            d: 332
        },
        {
            a: 'Гомель',
            b: 'Минск',
            d: 302
        },
        {
            a: 'Гомель',
            b: 'Могилев',
            d: 177
        },
        {
            a: 'Гродно',
            b: 'Витебск',
            d: 294
        },
        {
            a: 'Гродно',
            b: 'Минск',
            d: 269
        },
        {
            a: 'Гродно',
            b: 'Могилев',
            d: 473
        },
        {
            a: 'Витебск',
            b: 'Минск',
            d: 269
        },
        {
            a: 'Витебск',
            b: 'Могилев',
            d: 167
        },
        {
            a: 'Минск',
            b: 'Могилев',
            d: 204
        },
    ]
    let prices = [
        {
            method: 'Самолет',
            price: 250
        },
        {
            method: 'Такси',
            price: 5
        },
        {
            method: 'Частный водитель',
            price: 30
        },
        {
            method: 'Пеший курьер',
            price: 1
        },
    ]

    function showForm() {
        let deliveryMethod = ['Самолет', 'Такси', 'Частный водитель', 'Пеший курьер'];
        let destinations = ['Брест', 'Гомель', 'Гродно', 'Витебск', 'Минск', 'Могилев'];

        let form = document.createElement('form');
        form.setAttribute('class', 'main_form');

        let fio = document.createElement('input');
        fio.setAttribute('type', 'text');
        fio.setAttribute('class', 'inputs');
        fio.setAttribute('placeholder', 'ФИО');
        fio.setAttribute('name', 'fio');
        fio.required = 'true';

        let phone = document.createElement('input');
        phone.setAttribute('type', 'tel');
        phone.setAttribute('class', 'inputs');
        phone.setAttribute('placeholder', 'Телефон');
        phone.setAttribute('name', 'phone');
        phone.required = 'true';

        let mail = document.createElement('input');
        mail.setAttribute('type','email');
        mail.setAttribute('class', 'inputs');
        mail.setAttribute('placeholder', 'Почтовый адресс');
        mail.setAttribute('name', 'mail');
        mail.required = 'true';

        let typeDelivery = document.createElement('select');
        typeDelivery.setAttribute('class', 'inputs');
        typeDelivery.setAttribute('name', 'typeDelivery');
        typeDelivery.required = 'true';

        let typeDeliveryOptions = createSelects(deliveryMethod);
        typeDeliveryOptions.map(option => {
            typeDelivery.append(option)
        })

        let now = document.createElement('input');
        now.setAttribute('type', 'datetime');
        now.disabled = true;
        now.setAttribute('class', 'inputs');
        now.setAttribute('name', 'now');
        let nowDay = new Date()
        now.value = `${nowDay.getFullYear()} / ${nowDay.getMonth() + 1} / ${nowDay.getDate()}, ${nowDay.getHours()}:${nowDay.getMinutes()}:${nowDay.getSeconds()}`

        let departure = document.createElement('select');
        departure.setAttribute('class', 'inputs');
        departure.setAttribute('name', 'departure');
        departure.required = 'true';

        let destination = document.createElement('select');
        destination.setAttribute('class', 'inputs');
        destination.setAttribute('name', 'destination');
        destination.required = 'true';

        let optionDestination = createSelects(destinations);
        let optionDeparture = createSelects(destinations);
        optionDeparture.map(option => {
            departure.append(option);
        })

        optionDestination.map(option => {
            destination.append(option);
        })

        let dateDeparture = document.createElement('input');
        dateDeparture.setAttribute('type', 'date');
        dateDeparture.setAttribute('class', 'inputs');
        dateDeparture.setAttribute('name', 'dateDeparture');
        dateDeparture.required = 'true';

        let dateDelivery = document.createElement('input');
        dateDelivery.setAttribute('type', 'date');
        dateDelivery.setAttribute('class', 'inputs');
        dateDelivery.setAttribute('name', 'dateDelivery');
        dateDelivery.required = 'true';

        let btn = document.createElement('button');
        btn.setAttribute('type', 'submit')
        btn.setAttribute('class', 'btn_submit')
        btn.innerText = 'Расчитать стоимость';
        form.addEventListener('submit', (e) => {
            formHandler(e, form, departure, destination)
        })

        form.append(fio, phone, mail, typeDelivery, now, departure, destination, dateDeparture, dateDelivery, btn);
        document.body.append(form);
    }

    function createSelects(data) {
        return data.map(elem => {
            let option = document.createElement('option');
            option.setAttribute('value', elem);
            option.innerText = elem;
            return option
        })
    }

    function formHandler(e, conteiner, dep, dest) {
        e.preventDefault();
        if (dep.value === dest.value) return
        [...conteiner.children].map((elem, i) => {
            if(elem.tagName !== 'BUTTON') dataArray[i] = elem.value;
        });
        [
            fieldName,
            fieldPhone,
            fieldEmail,
            filedDeliveryMethods,
            fieldDateCurrent,
            fiedDistA,
            fiedDistB,
            fiedDateDeparture,
            fiedDateDelivery,
        ] = dataArray;
        console.log(dataArray);
        let price = calculation();
        showCalculation(price)
    }

    function calculation(){
        let distA = fiedDistA,
            distB = fiedDistB,
            method = filedDeliveryMethods;
        let dist = distances.find(elem => {
            if ((elem.a === distA || elem.b === distA) && (elem.a === distB || elem.b === distB)){
                return elem;
            }
        })
        let coof = prices.find(elem => elem.method === method ? elem : null)
        return dist.d * coof.price
    }

    function showCalculation(price){
        if(document.body.lastChild.className !== 'price'){
            let priceFinaly = document.createElement('div');
            priceFinaly.setAttribute('class', 'price');
            priceFinaly.innerText = `Стоимость доставки ${price}`;

            document.body.append(priceFinaly)
        }else {
            document.body.lastChild.innerText = `Стоимость доставки ${price}`;
        }
    }

    showForm()
}

window.addEventListener('DOMContentLoaded', delivery)

