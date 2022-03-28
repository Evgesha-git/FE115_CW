import {catalogData} from "./catalogApi.js";

function Catalog(){
    const elem = document.createElement('div');
    elem.classList.add('catalog_component');
    elem.innerHTML = `<h1>Catalog</h1>`
    const container = document.createElement('div');
    container.classList.add('catalog_container');
    let data = []; //Есть два варианта, либо использовать локальное храниище, либо использовать прелоадер

    const render = async (data) => {
        data = await catalogData();
        data.forEach(data => {
            let productCard = document.createElement('div');
            productCard.classList.add('card');
            let imgLinc = document.createElement('a');
            imgLinc.setAttribute('href', `#catalog/${data.id}`);
            let img = document.createElement('img');
            img.classList.add('card_img');
            img.setAttribute('src', data.image);
            imgLinc.append(img);
            let titleLinc = document.createElement('a');
            titleLinc.setAttribute('href', `#catalog/${data.id}`);
            titleLinc.innerText = data.title;
            let title = document.createElement('h2');
            title.classList.add('card_title');
            title.append(titleLinc)
            let priceCard = document.createElement('p');
            priceCard.classList.add('card_price');
            priceCard.innerText = data.price;
            productCard.append(imgLinc, title, priceCard);
            container.append(productCard);
            // console.log(data);
            // Добавить кнопку "В корзину"
        })
    }

    render(data);

    elem.append(container)

    this.init = () => {
        return elem;
    }
}

export default new Catalog().init()