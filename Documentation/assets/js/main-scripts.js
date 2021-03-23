$(document).ready(function() {

    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
  
    $("a[href^='#']").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            }, 600);
            $('#site-wrapper, .button-sidebar').removeClass('active');
            return false;
        }
    });

    $('.button-sidebar').on('click', function () {
        $(this).toggleClass('active');
        $('#site-wrapper').toggleClass('active');
    });
});