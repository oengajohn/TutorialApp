Ext.define('TutorialApp.view.layouts.CardLayoutDemoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cardlayoutdemocontroller',
    onPrevClick: function (btn, e, eOpts) {
        var me = this,
            view = me.getView(),
            panel = view.lookupReference('panel');
        // var panel = btn.up("panel");
        me.navigate(panel, 'prev');
    },
    onNextClick: function (btn, e, eOpts) {
        var me = this,
            view = me.getView(),
            panel = view.lookupReference('panel');
        me.navigate(panel, 'next');
    },
    navigate: function (panel, direction) {
        var layout = panel.getLayout();
        layout[direction]();
        Ext.ComponentQuery.query('panel #move-prev')[0].setDisabled(!layout.getPrev());
        Ext.ComponentQuery.query('panel #move-next')[0].setDisabled(!layout.getNext());
        // Ext.getCmp('move-prev').setDisabled();
        // // Ext.getCmp('move-next').setDisabled(!layout.getNext());
    }
});