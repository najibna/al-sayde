var nfElavonController = Marionette.Object.extend({
    /**
     * Hook up our listeners.
     * @since  3.0.0
     * @return void
     */
    initialize: function () {

        this.listenTo(nfRadio.channel('fields'), 'change:modelValue', this.removeFieldError);
        
        this.listenTo(nfRadio.channel('fields'), 'change:modelValue', this.removeAllErrors);
    },
    
    removeFieldError: function (model) {

        var elavonFields = [
            'creditcardfullname',
            'creditcardnumber',
            'creditcardcvc',
            'creditcardexpiration',
            'creditcardzip'
        ];

        if (model.get('errors').length > 0 && elavonFields.includes(model.get('type'))) {

            nfRadio.channel('fields').request('remove:error', model.get('id'), 'elavon');
        }
    },

    removeAllErrors: function (fieldModel) {

        var formID = fieldModel.get('formID');

        Backbone.Radio.channel('form-' + formID).request('remove:error', 'elavon');
    }
});


jQuery(document).ready(function ($) {

    new nfElavonController();
});
