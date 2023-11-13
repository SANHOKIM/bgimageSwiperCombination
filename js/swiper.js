

window.onload = function () {
    const swiperMain = new Swiper('#mainBanner .swiper', {
        // Optional parameters
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '#mainBanner .swiper-button-next',
            prevEl: '#mainBanner .swiper-button-prev',
        },
        autoplay: {
            delay: 2000, //4초마다돌아갈게
            disableOnInteraction: false,
            pauseOnMouseEnter: true,// 액션들어오면 받아드리지않을게
            // 마우스들어오면 멈출게 

        }

    });
}

// window.onload = function () {} 같은뜻으로는  window.addEventListener('load', function () {}) 전자는 특화된 버전.

