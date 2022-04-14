let itemKey = 0;

const reviews_name = document.getElementById('name');
const reviews_job = document.getElementById('job');
const reviews_contents = document.getElementById('contents');
const reviews_img = document.getElementById('user-img');

const btn_reviews = document.querySelector('.btn_surprises');
const btn_prev = document.querySelector('.prev-btn');
const btn_next = document.querySelector('.next-btn');

window.addEventListener("DOMContentLoaded", function() {
    itemReview(0);
})

btn_reviews.addEventListener('click', function() {
    let beforeReview = itemKey;
    while(true) {
        if(itemReview(1) !== beforeReview)
        break;
    }
})

btn_next.addEventListener('click', function() {
    if(itemKey === 5) {
        itemKey = -1;
    }
    itemReview(2);
})

btn_prev.addEventListener('click', function() {
    if(itemKey === 0) {
        itemKey = reviews.length;
    }
    itemReview(3);
})

function itemReview(mode) {

    switch (mode) {
        case 1:
            itemKey = Math.floor(Math.random() * 6);
            break;
        case 2:
            itemKey++;
            break;
        case 3:
            itemKey--;
            break;
        default:
            itemKey = 0;
    }
    
    reviews_name.innerText = reviews[itemKey].name;
    reviews_job.innerText = reviews[itemKey].job;
    reviews_contents.innerText = reviews[itemKey].contents;
    reviews_img.src = reviews[itemKey].img;

    return itemKey;
}