Ext.define('TutorialApp.view.users.UserFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userformcontroller',
    /**
     * Called when the view is created
     */
    init: function() {},
    onUserFormSubmit: function() {
        var me = this,
            form = me.getView().lookupReference('form').getForm();
        console.log(form.getValues());
    },
    onUserFormCancel: function() {
        this.getView().close();
    }
});