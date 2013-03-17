$('ul.nav li a').click(function(el,ev){
    $('ul.nav li').removeClass('active');
    $(this).parent().addClass('active');
});
