Ext.define('TutorialApp.view.home.Mail', {
    extend: 'Ext.Panel',
    controller: 'mailcontroller',
    xtype: 'mail',
    items: [{
        xtype: 'treepanel',
        itemId: 'inbox-tree',
        autoScroll: true,
        animate: true,
        border: false,
        rootVisible: false,
        store: {
            type: 'navstore'
        },
        listeners: {
            itemclick: 'onItemClick'
        }

    }],

});