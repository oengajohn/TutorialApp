Ext.define('TutorialApp.view.home.Home', {
    extend: 'Ext.container.Container',
    xtype: 'home',
    layout: {
        type: 'border'
    },
    items: [{
            region: 'center',
            xtype: 'mainpanel'
        },
        /*  {
             xtype: 'panel',
             region: 'north', //todo
             height: 20
         },
         {
             xtype: 'footer',
             region: 'south'
         }, */
        {
            xtype: 'mainmenu',
            region: 'west',
            width: 200,
            split: true
        }
    ]
});