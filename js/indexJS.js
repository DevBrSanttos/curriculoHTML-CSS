const menuItens = document.querySelectorAll('.menu a[href^="#"]');
const botao = document.querySelector('#bt-menu')

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event){
    event.preventDefault();
    botao.checked = false;   
    const section = getScrolltopByHref(event.target)
    window.scroll({
        top: section - 100,
        behavior:'smooth'
    });
    event.defaultPrevented = false;
        
}

function getScrolltopByHref(element){
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop; 
}