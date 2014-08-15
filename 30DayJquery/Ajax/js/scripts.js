var Countries = {
    init: function( config ){
        this.config = config;
        this.bindEvents();
    },

    bindEvents: function(){
        this.config.letterSelection.on('change', this.fetchCountries);
    },

    fetchCountries: function(){
        var self = Countries;
        //console.log(self.config.form.serialize());return;
        $.ajax({
            url:'index.php',
            type: 'POST',
            dataType: 'json',
            data: self.config.form.serialize(),
            success: function(results){
                console.log(results);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.dir(xhr);
                console.dir(ajaxOptions);
                console.dir(thrownError);
            }

        });
    }
};

Countries.init({
    letterSelection: $('#q'),
    form: $('#country-selection')
});