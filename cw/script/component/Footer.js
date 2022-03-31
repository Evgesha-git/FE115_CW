function Footer(){
    const elem = document.createElement('div');
    elem.classList.add('footer_component');
    elem.innerHTML = `
        <h2>Bla bla bla</h2>
    `
    this.init = () => {
        return elem;
    }
}

export default new Footer().init()