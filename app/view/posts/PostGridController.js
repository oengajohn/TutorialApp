Ext.define('TutorialApp.view.posts.PostGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postgridcontroller',
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
    getSelectedRecord: function() {
        var me = this;

        var records = me.getView().getSelectionModel().getSelection();
        if (records[0]) {
            //processing
            return records[0];
        } else {
            Ext.Msg.alert('No Item Selected', 'Please select an item from the list');
        }
    }
});