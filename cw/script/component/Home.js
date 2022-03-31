function Home(){
    this.title ='Home'
    const elem = document.createElement('div');
    elem.classList.add('home_component');
    elem.innerHTML = `
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet.</p>
    `
    this.init = () => {
        return elem;
    }
}

let elem = new Home();
let init = elem.init();
let title = elem.title;

export default init;
export {title};