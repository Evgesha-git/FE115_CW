import FotoFind from "./fotoFind.js";

export default class FotoUI extends FotoFind{
    constructor(max) {
        super();
        this._max = +max;
        this.init();
    }

    init(){
        let container = document.createElement('div');
        container.classList.add('container');
        let title = document.createElement('h1');
        title.innerText = 'Фотогалерея';

        let formFind = document.createElement('form');

        let text = document.createElement('input');
        text.setAttribute('type', 'text');

        let perPage = document.createElement('select');
        let options = this.createSelect(this._max)
        options.forEach(option => {
            perPage.append(option);
        });

        let find = document.createElement('button');
        find.setAttribute('type', 'submit');
        find.innerText = 'Поиск';

        let containerFind = document.createElement('div');
        containerFind.setAttribute('class', 'container_find')
        this._containerFind = containerFind;

        formFind.append(text, perPage, find);

        formFind.addEventListener('submit', e => this.find(e, text.value, perPage.value))

        container.append(title, formFind, containerFind);

        document.body.append(container);
    }

    createSelect(m){
        let options = [];
        for (let i = 0; i <= m; i += 5){
            let option = document.createElement('option');
            option.setAttribute('value', `${i}`);
            i === 0 ? option.innerText = '1' : option.innerText = i.toString();
            options.push(option);
        }
        return options
    }

    async find(e, text, perPage){
        e.preventDefault();
        console.log(text);
        console.log(perPage);
        await this.api(text, +perPage)

        this.render()
    }

    render(){
        this._containerFind.innerHTML = '';
        let fotos = this.getFotos();
        console.log(fotos)

        fotos.forEach(foto => {
            let div = document.createElement('div');
            div.classList.add('img');

            let img = document.createElement('img');
            img.setAttribute('src', foto.url);
            img.setAttribute('title', foto.titleData);

            div.append(img);

            this._containerFind.append(div);
        });
    }
}