Ext.define('TutorialApp.view.home.MailController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mailcontroller',
    /**
     * Called when the view is created
     */
    init: function() {},
    onItemClick: function(treepanel, record, item, index, e, eOpts) {
        var xtypeName = record.get('xtypeName');
        if (xtypeName) {
            Ext.getCmp('mainpanel').add({
                xtype: 'usergrid'
            });
        }

    }
});