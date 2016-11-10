$(document).ready(function () {

    $(window).scroll(function () {
        //Nav bar will stick to the top when scolled past a point. 

        //console.log($(window).scrollTop())
        if ($(window).scrollTop() > 201) {
            $('nav').addClass('navbar-fixed-top');
            $('.navbar-header a').show();
        }
        if ($(window).scrollTop() < 200) {
            $('nav').removeClass('navbar-fixed-top');
            $('.navbar-header a').hide();
        }
    });

    //Watch clicks on navigation
    $('.nav').on('click', 'li', function () {
        console.log($(this).text());
        $('li').removeClass('active');
        $(this).addClass('active');
    });
});