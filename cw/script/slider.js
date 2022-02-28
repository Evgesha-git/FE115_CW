const slider = function (className){
    let container = document.querySelector(className)
    let ul = container.querySelector('ul');
    if(!ul) return;

    let slideItems = ul.querySelectorAll('li');
    if(!slideItems || !(slideItems.length > 1)) return;

    const next = function (e){
        let saveNext = e.target.classList.contains('btn-next') ? 'next' : 'prev';
        // let saveNext = '';
        // if(e.target.classList.contains('btn-next')){
        //     saveNext = 'next';
        // }else{
        //     saveNext = 'prev';
        // }

        let x = ul.style.transform || '0';
        x = x.replace('translateX(', '');
        x = x.replace(')', '');
        x = Math.abs(parseInt(x))

        if(saveNext === 'next'){
            if(x < ((slideItems.length * 100) - 100)){
                x += 100;
            }else {
                x = 0
            }
        }
        if(saveNext === 'prev'){
            if(x > 0){
                x -= 100
            }else{
                x = (slideItems.length * 100) - 100
            }
        }


        ul.style.transform = `translateX(-${x}%)`
        console.log(ul.style.transform)
    }

    let btns = document.querySelectorAll('.btn');
    btns.forEach(btn => btn.addEventListener('click', next));
}

slider('.my-slider')