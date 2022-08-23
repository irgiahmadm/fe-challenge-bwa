let slideIndex = 1;
let clickedIndex = 1;
let carouselDesc = [
    {
        "rating": 5.0,
        "counter": "6.6K+",
        "name": "Daza Fracture Restaurant",
        "price": "IDR 29.000 - IDR 560.000",
        "place": "Jakarta, Indonesia"
    },
    {
        "rating": 5.0,
        "counter": "5.6K+",
        "name": "Descendant Immo",
        "price": "IDR 45.000 - 240.000",
        "place": "Bandung, Indonesia"
    },
    {
        "rating": 5.0,
        "counter": "7.2K+",
        "name": "Prime Whiff",
        "price": "IDR 50.000 - 300.000",
        "place": "Yogyakarta, Indonesia"
    }
];

function setCarouselDescription(n) { 
    var rating = document.getElementById('carousel-rating-value')
    var count = document.getElementById('carousel-rating-count')
    var name = document.getElementById('carousel-restaurant-name-text')
    var price = document.getElementById('carousel-restaurant-price-text')
    var place = document.getElementById('carousel-restaurant-place-text')
    
    rating.textContent = carouselDesc[n].rating.toString();
    count.textContent = carouselDesc[n].counter;
    name.textContent = carouselDesc[n].name;
    price.textContent = carouselDesc[n].price;
    place.textContent = carouselDesc[n].place;
    
}
function currentSlide(n) {
    showSlides(slideIndex = n);
    setCarouselDescription(n-1)
}

function showSlides(n) { 
    let i;
    let slides = document.getElementsByClassName('custom-carousel-item')
    if (n > slides.length) { 
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    if (clickedIndex != slideIndex) { 
        clickedIndex = slideIndex

        if (slideIndex == 2) {
            slides[slideIndex - 2].style.transform = `translateX(${slideIndex * -50}%)`
            slides[slideIndex].style.transform = `translateX(${slideIndex * -50}%)`
            slides[slideIndex-1].style.transform = `translateX(${slideIndex * -50}%)`
        }
            
        if(slideIndex == 1) { 
            slides[slideIndex-1].style.transform = `translateX(${slideIndex * 1}%)`
            slides[slideIndex].style.transform = `translateX(${slideIndex * 3}%)`
            slides[slideIndex+1].style.transform = `translateX(${slideIndex * 50}%)`
        }
        if (slideIndex == 3) { 
            slides[2].style.transform = `translateX(${slideIndex * -68}%)`
            slides[1].style.transform = `translateX(${slideIndex * -68}%)`
            slides[0].style.transform = `translateX(${slideIndex * -68}%)`
        }
    }
    
}