$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 10){
            $('.navber').addClass("sticky");
        }else{
            $('.navber').removeClass("sticky");
        }

          // scroll-up button show/hide script
          if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });



     // slide-up script
     $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });



   




    // toggle menu/navber script
    $('.menu-btn').click(function(){
        $('.navber .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });




    // typed js script 
    var typed = new Typed(".typing", {
        strings: ["Responsive web designer", "Freelancer" , "web designer", "Designer" ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Responsive web designer", "Freelancer" , "web designer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });







    // owl carouesel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverpause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });



});

