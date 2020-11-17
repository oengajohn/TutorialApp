Ext.define('TutorialApp.view.users.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usergridcontroller',
    init: function() {

    },
    onAddUserButtonClick: function() {
        Ext.create({
            xtype: 'userform'
        });
    },
    onViewUserDetailsButtonClick: function() {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            console.log(record);
            var windowContainer = Ext.create({
                xtype: 'userform'
            });
            windowContainer.lookupReference('form').getForm().loadRecord(record);
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
})