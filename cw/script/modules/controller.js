import getWeather from "./weather.js";
import flikr from "./flikr.js";

export default async function controller(cityId){
    let wheather = await getWeather(cityId);
    let foto = await flikr(cityId, 4);

    return [wheather, foto];
}