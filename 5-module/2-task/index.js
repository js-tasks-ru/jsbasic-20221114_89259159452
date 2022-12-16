function toggleText() {
    const toggle = document.querySelector('.toggle-text-button'),
        text = document.querySelector('#text');
    
    let check = true;

    toggle.addEventListener('click', ()=> {
        (check) ? (check = false, text.hidden = true) : (check = true, text.hidden = false);
    }) 
}
