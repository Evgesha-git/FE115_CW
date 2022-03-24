import photo from "./component/render_photo.js";
import renderSinglPhoto from "./component/component_photo.js";

const data = [
    {
        name: 'home',
        title: 'Home',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis consequatur cum dolores ducimus eius eveniet ex facere, ipsa iusto laborum laudantium minus odit pariatur perspiciatis possimus quis velit. Necessitatibus.'
    },
    {
        name: 'abaut',
        title: 'Abaut',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis consequatur cum dolores ducimus eius eveniet ex facere, ipsa iusto laborum laudantium minus odit pariatur perspiciatis possimus quis velit. Necessitatibus.'
    },
    {
        name: 'contacts',
        title: 'Contacts',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis consequatur cum dolores ducimus eius eveniet ex facere, ipsa iusto laborum laudantium minus odit pariatur perspiciatis possimus quis velit. Necessitatibus.'
    },
    {
        name: 'delivery',
        title: 'Delivery',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis consequatur cum dolores ducimus eius eveniet ex facere, ipsa iusto laborum laudantium minus odit pariatur perspiciatis possimus quis velit. Necessitatibus.'
    },
];

const container = document.querySelector('.root');

let nav = document.createElement('nav');
let list = document.createElement('ul');
list.innerHTML = `<li>
    <a href='#'>Home</a>
</li>`;
list.innerHTML += `<li>
    <a href='#photo'>Photo</a>
</li>`;
let main = document.createElement('main');

data.forEach(dataList => {
    if(dataList.name === 'home') return;
    let item = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', `#${dataList.name}`);
    a.innerText = dataList.title;
    item.append(a);
    list.append(item);
})

let home = data.find(dataPage => {
    return dataPage.name === 'home' ? dataPage : null;
})

main.innerHTML = `
    <h1>${home.title}</h1>
    <p>${home.content}</p>
`;

nav.append(list);
container.append(nav, main);

function mainRender(){
    let h1 = document.createElement('h1');
    h1.innerText = home.title;
    let p = document.createElement('p');
    p.innerText = home.content;
    main.append(h1, p);
}

function dataRender(page){
    let h1 = document.createElement('h1');
    h1.innerText = page.title;
    let p = document.createElement('p');
    p.innerText = page.content;
    main.append(h1, p);
}

window.addEventListener('hashchange', async () => {
    main.innerHTML = '';
    let hash = window.location.hash.slice(1);
    // let hashPhoto;
    // if (hash.indexOf('/') !== -1){
    //     let index = hash.indexOf('/');
    //     hashPhoto = hash.slice(index + 1);
    // }
    let page = data.find(page => {
        return page.name === hash ? page : null;
    })

    if (hash === ''){
        mainRender();
    }else if(hash === 'photo'){
        let image = await photo();
        main.append(image);
    }else if(hash.indexOf('/') !== -1){
        let index = hash.indexOf('/');
        let hashPhoto = hash.slice(index + 1);
        let img = await renderSinglPhoto(hashPhoto);
        main.append(img);
    }else{
        dataRender(page);
    }
})





