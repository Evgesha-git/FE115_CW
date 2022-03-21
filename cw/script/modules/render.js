import controller from "./controller.js";

export default async function render(e, text, container) {
    e.preventDefault();
    let [weater, fotos] = await controller(text);

    container.innerHTML = '';

    let containerWeather = document.createElement('div');
    containerWeather.classList.add('container_weather');

    let containerFoto = document.createElement('div');
    containerFoto.classList.add('container_foto');

    let {name, main:{feels_like, temp}, weather:w, wind:{deg, speed}} = weater;
    let {icon} = w[0];

    let header = document.createElement('h2');
    let tempBlock = document.createElement('p');
    let feelsLike = document.createElement('p');
    let windDeg = document.createElement('div');
    let windSpeed = document.createElement('p');
    let iconBlock = document.createElement('div');

    windDeg.setAttribute('class', 'deg');
    windDeg.style.rotate = `${180 + deg}deg`;

    header.innerHTML = name;
    tempBlock.innerHTML = `Температура: ${temp}&#8451;`;
    feelsLike.innerHTML = `По ощущениям: ${feels_like}&#8451`;
    windSpeed.innerText = `Скорость ветра: ${speed}`;
    iconBlock.style.background = `url(http://openweathermap.org/img/wn/${icon}@2x.png)`

    containerWeather.append(header, tempBlock, feelsLike, windDeg, windSpeed, iconBlock)

    fotos.forEach(foto => {
        let div = document.createElement('div');
        div.classList.add('img');

        div.style.background = `rgba(0, 0, 0, 0) url("${foto.url}") no-repeat scroll center center / contain`;
        // div.style.backgroundSize = 'contain';
        // div.style.backgroundRepeat = 'no-repeat';
        // div.style.backgroundPosition = 'center';

        div.title = foto.titleData;

        containerFoto.append(div);
    })

    container.append(containerWeather, containerFoto);
}