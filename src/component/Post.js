export default class Post{
    constructor(title, img) {
        this.title = title;
        this.img = img;
    }

    toString(){
        return JSON.stringify({
            title: this.title,
            img: this.img,
        })
    }
}