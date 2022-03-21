export default async function getWeather(cityName) {
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