import {itemApi} from "./catalogApi.js";
import spinner from "./spinner.js";
import {addCard} from "./Card.js";

function Catalog(){
    const elem = document.createElement('div');
    elem.classList.add('item_component');
    let data = {};

    this.title = 'Product';

    this.ren = async (id) => {
        elem.innerHTML = '';
        let spin = spinner();
        elem.append(spin);

        let localCard = localStorage.getItem('card');
        localCard = JSON.parse(localCard);

        data = await itemApi(id);
        elem.innerHTML = '';

        let productCard = document.createElement('div');
        productCard.classList.add('card_item');
        let img = document.createElement('img');
        img.classList.add('item_img');
        img.setAttribute('src', data.image);
        let desc = document.createElement('p');
        desc.innerText = data.description;
        let category = document.createElement('p');
        category.innerText = data.category;
        let title = document.createElement('h2');
        title.classList.add('card_title');
        title.innerText = data.title;
        let priceCard = document.createElement('p');
        priceCard.classList.add('card_price');
        priceCard.innerText = data.price;
        let btnAdd = document.createElement('button');
        if (localCard.some(data => data.id === +id)){
            btnAdd.innerText = 'Added';
            btnAdd.disabled = true;
        }else{
            btnAdd.innerText = 'Add';
        }
        elem.append(title, category, img, desc, priceCard, btnAdd);
        // console.log(data);
        // Добавить кнопку "В корзину"

        btnAdd.addEventListener('click', () =>{
            if (addCard(data)){
                btnAdd.innerText = 'Added';
                btnAdd.disabled = true;
            }
        })

        // return elem;
    }

    // render();

    // elem.append(container);




    this.render = (id) => {
        this.ren(id)
        return elem;
    }
}

let product = new Catalog();

export default product;