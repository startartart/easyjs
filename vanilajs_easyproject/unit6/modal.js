const btn_open = document.querySelector('.btn_modal_open');
const btn_close = document.querySelector('.btn_modal_close');
const modal_sub = document.querySelector('.modal-sub');

btn_open.addEventListener("click", function() {
    modal_sub.style.display = 'block';
})

btn_close.addEventListener("click", () => {
    modal_sub.style.display = 'none';
})