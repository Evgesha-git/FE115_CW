import {widget} from "./Card.js";

function Header(){
    const elem = document.createElement('div');
    elem.classList.add('header_component');
    elem.innerHTML = `
        <div class='logo'>
            <a href="\">
                <img src="https://via.placeholder.com/150x60" alt="">
            </a>
        </div>
        <nav class="nav">
            <ul>
            <li><a href="\">Home</a></li>
            <li><a href="#catalog">Catalog</a></li>
            <li><a href="#abaut">Abaut</a></li>
            </ul>
        </nav>
        ${widget.outerHTML}
    `
    // elem.append(widget)

    this.init = () => {
        return elem;
    }
}

export default new Header().init()