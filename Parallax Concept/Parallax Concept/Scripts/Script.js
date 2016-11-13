$(document).ready(function () {

    $(window).scroll(function () {
        //Nav bar will stick to the top when scolled past a point. 

        //console.log($(window).scrollTop())
        if ($(window).scrollTop() > 201) {
            $('nav').addClass('navbar-fixed-top');
            $('nav').removeClass('navbar-unfixed');
            $('.navbar-header a').show();
        }
        if ($(window).scrollTop() < 200) {
            $('nav').removeClass('navbar-fixed-top');
            $('nav').addClass('navbar-unfixed');
            $('.navbar-header a').hide();
        }
    });

    //Watch clicks on navigation
    $('.nav').on('click', 'li', function () {
        console.log($(this).text());
        $('li').removeClass('active');
        $(this).addClass('active');
    });

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles', 'particles-config.json', function () {
        console.log('callback - particles.js config loaded');
    });
});