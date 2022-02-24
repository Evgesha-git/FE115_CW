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
// let h1 = document.querySelector('p');
//
// h1.addEventListener('mouseenter', function (e){
//     let tooltip = document.createElement('div');
//     tooltip.setAttribute('class', 'tooltip');
//     tooltip.innerText = 'Просто кой нибудь тект для заполнения';
//
//     document.body.append(tooltip)
//
//     let x = e.x;
//     let y = e.target.offsetWidth;
//
//     tooltip.style.top = x + 'px';
//     tooltip.style.left = y + 'px';
//
//     console.log(e.target, e)
// })