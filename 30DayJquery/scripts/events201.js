/**
 * Created by angel on 12/08/14.
 */
(function(){
    var dd = $('dd');
//    dd.show();
//    dd.fadeIn();
//    dd.slideDown();
    dd.filter(':nth-child(n+4)').addClass('hide');
    $('dl').on('mouseenter','dt',function(){
        $(this).next()
            .slideDown(200)
            .siblings('dd')
                .slideUp(200);
    });
})();