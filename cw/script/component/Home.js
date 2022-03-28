function Home(){
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

export default new Home().init()