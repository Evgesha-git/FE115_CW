const container = document.querySelector('.data')


async function getWeather(cityName) {
    let key = '8643e5fa4d67cb1ad3c160e1d6c66d90',
        data;
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&lang=ru&units=metric`)
        .then(responce => {
            // console.log(responce);
            return responce.json() //Преобразуем в JSON
        })
        .then(d => {
            data = d
            console.log(d)
        })
        .catch(error => {
            data = error
        })
    if(data.cod === 200) return data
}

const render = async function (cityName){
    container.innerHTML = '';
    let data = await getWeather(cityName);
    if(!data) return;
    localStorage.setItem('weather', JSON.stringify(data));
    let {name, main:{feels_like, temp}, weather, wind:{deg, speed}} = data;
    let {icon} = weather[0];
    let header = document.createElement('h2');
    let tempBlock = document.createElement('div');
    let feelsLike = document.createElement('div');
    let windDeg = document.createElement('div');
    let windSpeed = document.createElement('div');
    let iconBlock = document.createElement('div');
    let iconElem = document.createElement('img');

    windDeg.setAttribute('class', 'deg');
    windDeg.style.rotate = `${180 + deg}deg`;

    header.innerHTML = name;
    tempBlock.innerHTML = `Температура: ${temp}&#8451;`;
    feelsLike.innerHTML = `По ощущениям: ${feels_like}&#8451`;
    windSpeed.innerText = `Скорость ветра: ${speed}`;
    iconElem.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    iconBlock.append(iconElem)
    container.append(header, tempBlock, feelsLike, windSpeed, windDeg, iconBlock)
}

document.querySelector('input[type=text]').addEventListener('input', function (){
    render(this.value)
})

class User{
    constructor() {
        this.users = []
        this.ini()
    }

    async getData(){
        let data;
        await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => data = json);
        this.users = data;
    }

    async ini(){
        await this.getData()
        console.log(this.users)
    }
}