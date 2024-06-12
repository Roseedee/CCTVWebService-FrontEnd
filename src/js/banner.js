setInterval(slideBanner, 1500); //show image daley

const banner_img_name = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.png',
]

let img_index = 0;

const img_position_container = document.querySelector('.img-position ul')

banner_img_name.forEach((img_name) => {
    img_position_container.innerHTML += '<li class="img-position-item"></li>'
})

const img_position_items = document.querySelectorAll('.img-position-item');

function slideBanner() {
    reset_img_position();
    if(img_index >= 4) {
        img_index = 0;
    }
    // const banner_img_item = document.querySelectorAll('.banner-img-item');
    const banner_items = document.getElementById('banner-items');
    banner_items.innerHTML = `<img class="banner-img-item" src="/` + banner_img_name[img_index] + `">`
    img_position_items[img_index].innerHTML = '<div></div>';
    img_index++;
}

function reset_img_position() {
    img_position_items.forEach((item) => {
        item.innerHTML = '';
    })
}