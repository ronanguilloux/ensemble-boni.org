$('ul.nav li a').click(function(ev){
    ev.preventDefault();
    $('ul.nav li').removeClass('active');
    var $anchor = $(this);
    $anchor.parent().addClass('active');
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500,'easeInOutExpo', function() {
        window.location.hash = $anchor.attr('href').substr(1);
    });
    _gaq.push(['_trackPageview',location.pathname + location.search  + location.hash]);
});
