export default async function flikr(tag, perPage){
    let key = '4aca8261d4a83368e00c72efe14da470';
    let fotos = [];
    await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${tag}&per_page=${perPage}&format=json&nojsoncallback=1`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            data.photos.photo.forEach(photo => {
                let {id, farm, secret, server, title} = photo
                let urlData = {
                    url: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_b.jpg`,
                    titleData: title,
                }
                fotos.push(urlData);
            });
        });
    return fotos;
}