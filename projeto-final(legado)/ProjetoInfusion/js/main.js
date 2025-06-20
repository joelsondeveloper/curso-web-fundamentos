(function(){
    var $body = document.querySelector('body')
    $body.classList.remove('no-js')
    $body.classList.add('js')


    var menu = new Menu ({
        container: '.header__nav',
        toggleBtn: '.header__btnMenu',
        widthEnabled: 1024, 
    })

    var carouselImgs = new Carousel ({
        container: '.laptop-slider .slideshow',
        itens: '.laptop-slider .slideshow figure',
        btnPrev: '.laptop-slider .prev',
        btnNext: '.laptop-slider .next',
    })

    var carouselQuotes = new Carousel ({
        container: '.quote-slideshow',
        itens: '.quote-slideshow figure',
        btnPrev: '.quote-slideshow .prev',
        btnNext: '.quote-slideshow .next',
    })
})()