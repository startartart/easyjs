const btns = document.querySelectorAll('.question-btns');

btns.forEach((q) => {  
    const btn = q.querySelector('.question-btn');
    const btnKeyP = q.querySelector('.plus-icon');
    const btnKeyM = q.querySelector('.minus-icon');
    btn.addEventListener('click', (e)=> {
        const qN = e.currentTarget.parentElement.parentElement;
        console.log(e.currentTarget)
        btns.forEach((item) => {
            if (item !== q) {
                const itemqN = item.parentElement;
                itemqN.classList.remove('open');
            }
        });
        qN.classList.toggle('open');
    });
});