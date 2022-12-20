function toggleText() {
    const toggle = document.querySelector('.toggle-text-button'),
        text = document.querySelector('#text');

    toggle.addEventListener('click', ()=> {
        (text.hidden) ? (text.hidden = false) : (text.hidden = true);
    }) 
}
