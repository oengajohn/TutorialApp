Ext.define('TutorialApp.view.menu.MainMenuTree', {
    extend: 'Ext.tree.TreePanel',
    xtype: 'mainmenutree',
    border: 0,
    autoScroll: true,
    rootVisible: false,
    store: {
        type: 'navstore'
    }
});