import { onShowMsg } from './functions';

window.onload = () => {
    console.log('Essa página foi feita com Html(Linguagem de marcação), Css, JS! :p');

    const btnNotClickMe = document.getElementById('btnNotClickMe');
    btnNotClickMe.addEventListener('click', () => onShowMsg())
}
