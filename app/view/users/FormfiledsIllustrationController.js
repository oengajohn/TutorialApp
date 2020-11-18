Ext.define('TutorialApp.view.users.FormfiledsIllustrationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formfiledsillustrationcontroller',
    /**
     * Called when the view is created
     */
    init: function() {},
    onFormSubmit: function() {
        var me = this,
            form = me.getView().lookupReference('form').getForm();
        console.log(form.getValues());
    },
    onFormCancel: function() {
        this.getView().close();
    },
    onUserIdChange: function(field, newValue, oldValue, eOpts) {
        alert("OldValue=" + oldValue + " New value=" + newValue);

    },
    onUserIdSelect: function(combo, record, eOpts) {
        console.log(combo.getValue());
        console.log(record);

    }
});