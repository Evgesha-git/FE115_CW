function Card(){
    const elem = document.createElement('div');
    elem.classList.add('about_component');
    elem.innerHTML = `
        <h1>Card</h1>
        <p>....</p>
    `
    this.init = () => {
        return elem;
    }
}

export default new Card().init()