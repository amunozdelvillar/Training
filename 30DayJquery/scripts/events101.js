(function(){
    var link = $('link');
    $('button').on('click',function(){
        var $this = $(this),
            stylesheet = $this.data('file');

        link.attr('href','styles/events101-'.concat(stylesheet).concat('.css'));

        $this
            .siblings('button')
            .removeAttr('disabled')
            .end()
            .attr('disabled','disabled');
        console.log($this);
    });
})();