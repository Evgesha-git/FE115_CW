import {fakePhoto} from "./fakeImages.js";

export default async function renderSinglPhoto(id){
    console.log(id);
    let data = await fakePhoto(id);
    let photo = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('src', data.url);
    let p = document.createElement('p');
    p.innerText = data.title;
    photo.append(image, p)
    return photo;
}