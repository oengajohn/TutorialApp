Ext.define('TutorialApp.view.menu.MainMenu', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainmenu',

    width: 250,
    layout: {
        type: 'accordion',
        multi: false
    },
    collapsible: false,
    split: true,
    iconCls: 'fa fa-sitemap fa-lg',
    title: 'Menu',
    items: [{
            xtype: 'mainmenutree',
            title: 'User Register'
        },
        {
            xtype: 'mainmenutree',
            title: 'Post register'
        }
    ]
});