Ext.define('TutorialApp.view.posts.PostGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postgridcontroller',
    mixins: [
        'TutorialApp.view.mixins.GridMixin'
    ],
    /**
     * Called when the view is created
     */
    init: function() {
        this.getView().getStore().load();
    },
    onViewDetailsButtonClick: function() {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            console.log(record);
        }
    },

});