function Abaut(){
    this.title = 'About'
    const elem = document.createElement('div');
    elem.classList.add('about_component');
    elem.innerHTML = `
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto maiores molestias optio repellendus. Amet beatae, ipsam. Non unde vel veritatis.</p>
    `
    this.init = () => {
        return elem;
    }
}

let elem = new Abaut();
let init = elem.init();
let title = elem.title;

export default init;
export {title};