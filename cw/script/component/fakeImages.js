async function fakeAll() {
    let data = [];
    await fetch('https://jsonplaceholder.typicode.com/photos')
        .then(resp => resp.json())
        .then(d => data = d)
    return data.splice(0, 100)
}

async function fakePhoto(id){
    let photo = {};
    await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(resp => resp.json())
        .then(d => photo = d)
    return photo
}

export {fakeAll, fakePhoto}