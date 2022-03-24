import {fakeAll} from "./fakeImages.js";

export default async function photo(){
    let data = await fakeAll();
    let container = document.createElement('div');
    container.classList.add('photo');
    console.log(data);
    data.map(item => {
        let a = document.createElement('a');
        let img = document.createElement('img');
        img.setAttribute('src', item.thumbnailUrl);
        a.setAttribute('href', `#photo/${item.id}`);
        a.append(img);
        container.append(a);
    })
    return container
}
