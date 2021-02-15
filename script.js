window.onload = function annotate() {
    insertAnnote();
    removeAnnote();
}

const insertAnnote = () => {
    let text = document.createElement('h5');
    text.className= 'hello';
    text.innerText = 'hover for more details!';

    let currentParent = document.querySelector('.skill__container--2');
    // currentParent.appendChild(text);
    currentParent.insertBefore(text, currentParent.firstChild);
    console.log('was loaded');
}

const removeAnnote = () => {

    // let divSelect = document.querySelector('.skill__container--2__square');

    let divSelect = document.querySelectorAll('.skill__container--2__square');

    divSelect.forEach(div => {
        div.addEventListener('mouseover', () => {
            let annot = document.querySelector('h5');

            if (annot) {
                div.parentNode.removeChild(annot);
                console.log('removed');
            }



        })
    })

    // divSelect.addEventListener('click', ()=> {
    //     divSelect.parentNode.removeChild(document.querySelector('h5'));
    //     console.log('removed');
    // })


}