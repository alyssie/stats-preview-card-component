$(document).ready(function () {
    var once = true; //counter animate only once
    if (once == true) {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
            once = false;
        });
    }
});