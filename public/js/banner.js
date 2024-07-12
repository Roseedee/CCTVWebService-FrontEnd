setInterval(slideBanner, 1500); //show image daley

const banner_img_name = [ //image data
    'img-test-banner.png',
    'img-test-banner1.png',
    'img-test-banner2.png'
]

let slideIndex = 0;

function slideBanner() {

    const banner_items = document.getElementById('banner-items');

    if(slideIndex >= banner_img_name.length) {
        slideIndex = 0;
    }

    banner_items.innerHTML = `<img class="banner-img-item fade" src="/banner/` + banner_img_name[slideIndex] + `">`;

    slideIndex++;
}