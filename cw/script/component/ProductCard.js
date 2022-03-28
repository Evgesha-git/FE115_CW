import {itemApi} from "./catalogApi.js";

function Catalog(){
    const elem = document.createElement('div');
    elem.classList.add('item_component');
    let data = {};

    this.render = async (id) => {
        elem.innerHTML = '';
        data = await itemApi(id);

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

        elem.append(title, category, img, desc, priceCard)
        // console.log(data);
        // Добавить кнопку "В корзину"


        return elem;
    }

    // render();

    // elem.append(container);

    // this.init = () => {
    //     return elem;
    // }
}

export default new Catalog()