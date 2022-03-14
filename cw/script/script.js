console.log('Data waiting...')

// setTimeout(() => {
//     console.log('Data sent...')
//     const dataServer = {
//         site: 'google.com',
//         status: '200',
//     }
//     setTimeout(() => {
//         console.log('Data client...')
//         dataServer.modifite = true;
//         console.log(dataServer)
//         setTimeout(() => {
//             dataServer.sent = true;
//             console.log(dataServer);
//         }, 2000)
//     }, 2000)
// }, 2000)

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Data sent...')
        const dataServer = {
            site: 'google.com',
            status: '400',
        }
        if(dataServer.status !== '200'){
            reject(`Error ${dataServer.status}`)
        }else{
            resolve(dataServer)
        }
    }, 2000)

})

p.then(data => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('Data client...')
            data.modifite = true;
            resolve(data)
        }, 4000)
    }))

}).then(rez => {
        console.log(rez)
}).catch(err => {
    document.body.innerHTML = `<h1> Error </h1>
<div>${err}</div>`
    console.error(err)
}).finally(() => {
    console.log('Is finally')
})

let timer = (ms) => new Promise(resolve => {
    setTimeout(() => {
        resolve(`That ${ms / 1000} sec`);
    }, ms);
});

function timer2(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`That ${ms / 1000} sec`);
        }, ms);
    })
}

// timer2(5000).then(rez => console.log(rez))
//
// timer(2000).then(rez => console.log(rez))
// timer(4000).then(rez => console.log(rez))

let f1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())

let f2 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())


Promise.all([f1, f2])
    .then(json => console.log(json))

Promise.race([f1, f2])
    .then(json => console.log(json))