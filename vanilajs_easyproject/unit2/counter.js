let count = 0;

const counter = document.querySelector('.counter');
const btn_all = document.querySelectorAll('.unit2_set_button .w-btn');


btn_all.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('btn_decrease')) {
            count--;
        } else if (styles.contains('btn_increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            counter.style.color = 'green';
        }
        if (count < 0) {
            counter.style.color = 'red';
        }
        if (count === 0) {
            counter.style.color = 'blue';
        }
        counter.textContent = count;
    });
});