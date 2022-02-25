if(popup) popup();

// let btn = document.querySelector('#li_add');
//
// btn.addEventListener('click', function (){
//     let ul = document.querySelector('ul');
//     let li = document.createElement('li');
//     li.innerText = 'Lorem ipsum.'
//     ul.append(li);
// })

// let lists = document.querySelectorAll('li');
// lists.forEach(li => {
//     li.addEventListener('click', function (){
//         this.innerText += '!';
//     })
// })

// let ul = document.querySelector('ul');
// ul.addEventListener('click', function (e){
//     if(e.target.tagName === 'LI'){
//         e.target.innerText += '!';
//     }
//
// })
//
let elem = document.querySelector('span');

elem.addEventListener('mouseenter', function (e){
    let tooltip = document.createElement('div');
    tooltip.setAttribute('class', 'tooltip');
    tooltip.innerText = 'Просто кой нибудь тект для заполнения';

    document.body.append(tooltip)

    let x = e.target.offsetLeft;
    let y = e.target.offsetTop;

    if((tooltip.offsetHeight + 15) > e.clientY){
        y -= e.target.offsetHeight - tooltip.offsetHeight;
    }else{
        y -= e.target.offsetHeight + 15;
    }

    tooltip.style.top = y + 'px';
    tooltip.style.left = x + 'px';
})