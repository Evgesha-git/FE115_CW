function Abaut(){
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

export default new Abaut().init()