function popup() {
    const elems = document.querySelectorAll('[data-popup]');

    const show = function (content){
        let popupElem = document.createElement('div');
        let modalElem = document.createElement('div');
        let closeElem = document.createElement('div');
        let contentElem = document.createElement('div');

        popupElem.setAttribute('class', 'popup');
        modalElem.setAttribute('class', 'popup-modal');
        closeElem.setAttribute('class', 'popup-close');
        contentElem.setAttribute('class', 'popup-content');

        closeElem.innerText = 'X';
        contentElem.innerHTML = content;

        modalElem.append(closeElem, contentElem);
        popupElem.append(modalElem);

        document.body.append(popupElem)

        popupElem.addEventListener('click', close);
    }

    function close(event){
        if(!event.target.classList.contains('popup') && !event.target.classList.contains('popup-close')) return;

        const popupElem = document.querySelector('.popup')
        if(!popupElem) return;
        popupElem.remove();
    }

    const clickHandler = function (event){
        event.preventDefault();

        let elem = event.target;
        let type = elem.dataset.popup;

        if(!type){
            let parent = elem.closest('[data-popup]');

            if(!parent) return;

            type = parent.dataset.popup

            if(!type) return;

            elem = parent;
        }

        let content = '';

        if(type === 'zoom'){
            const href = elem.href;

            if(!href) return;

            content = `<img src="${href}" alt="#">`;
        }

        if(type === 'content'){
            let id = elem.dataset.id;

            if(!id) return;

            const idContent = document.querySelector(`#${id}`);

            if(!idContent) return;

            content = idContent.innerHTML;
        }

        show(content);
    }

    elems.forEach(elem => {
        elem.addEventListener('click', clickHandler);
    });
    // console.dir(elems)
}