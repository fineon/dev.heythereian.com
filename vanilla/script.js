window.onload = function annotate() {
    console.log('oh hey there, welcome to the console! I post my learning notes and codebase on my Github at github.com/fineon. Thanks for having a look :)')
    // removing the hover effect and DOM manipulation for better UX flow
    // insertAnnote();
    // removeAnnote();
}

const insertAnnote = () => {
    let text = document.createElement('div');
    text.className = 'skill__banner';
    text.innerText = 'hover for more details!';

    let currentParent = document.querySelector('.skill__container--2');
    // currentParent.appendChild(text);
    currentParent.insertBefore(text, currentParent.firstChild);

}

const removeAnnote = () => {

    let divSelect = document.querySelector('.skill__container--2');

    let banner = document.querySelector('.skill__banner');

    if (!banner) {
        console.log('none');
    } else {
        const remv = (e) => {
            divSelect.removeChild(banner);
            console.log(e,'removed');
            divSelect.removeEventListener('mouseover', remv );
        }

        divSelect.addEventListener('mouseover', remv );
 
    }

    // if (!banner) {
    //     console.log('none');
    // } else {
    //       divSelect.addEventListener('mouseover', remv = (e) => {
    //         divSelect.removeChild(banner);
    //         console.log('removed');

    //     });

    //     divSelect.removeEventListener('mouseover',(e) => {
    //         console.log(e,'removed')
    //     })
    // }

    /*
    let divSelect = document.querySelectorAll('.skill__container--2__square');

    divSelect.forEach(div => {
        div.addEventListener('mouseover', () => {
            let annot = document.querySelector('.skill__banner');

            if (annot) {
                div.parentNode.removeChild(annot);
                console.log('removed');
            }
        })
    })
    */

}