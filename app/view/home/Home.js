Ext.define('TutorialApp.view.home.Home', {
    extend: 'Ext.container.Viewport',
    xtype: 'home',
    layout: {
        type: 'border'
    },
    bodyBorder: false,
    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },
    items: [{
            title: 'Footer',
            region: 'south',
            height: 100,
            minHeight: 75,
            maxHeight: 150,
            html: '<p>Footer content</p>'
        },
        {
            title: 'Header',
            region: 'north',
            height: 100,
            minHeight: 75,
            maxHeight: 150,
            html: '<p>Header content</p>'
        },
        {
            title: 'Navigation',
            region: 'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 200,
            minWidth: 100,
            maxWidth: 250,
            items: [{
                xtype: 'mail'
            }]

        },
        {
            title: 'Main Content',
            collapsible: false,
            id: 'mainpanel',
            region: 'center',
            margin: '5 0 0 0',
            items: [

            ]
        },
        /*  {
             title: 'Navigation',
             region: 'east',
             floatable: false,
             margin: '5 0 0 0',
             width: 125,
             minWidth: 100,
             maxWidth: 250,
             html: '<p>East content like navigation links could go here</p>'
         }, */
    ]
});