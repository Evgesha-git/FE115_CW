import flikr from "./flikr.js";

export default class FotoFind{
    constructor() {
        this.fotos = [];
    }

    async api(tag, perPage){
        this.fotos = await flikr(tag, perPage)
    }

    getFotos(){
        return this.fotos;
    }
}