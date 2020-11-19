Ext.define('TutorialApp.view.layouts.ParentContainer', {
    extend: 'Ext.container.Container',

    xtype: 'parentcontainer',
    padding: '5 5 5 5',
    style: {
        borderColor: 'Red',
        borderStyle: 'solid',
        borderWidth: '1px'
    },
    layout: {
        type: 'vbox'
    },
    items: [{
            xtype: 'component',
            html: '<h1>Component 1</h1>',
            padding: '5 5 5 5'
        },
        {
            xtype: 'component',
            html: '<h1>Component 2</h1>',
            padding: '5 5 5 5'
        },
        {
            xtype: 'container',
            border: true,

            layout: {
                type: 'hbox'
            },
            items: [{
                    xtype: 'component',
                    html: '<h1>Component 3</h1>',
                    padding: '5 5 5 5'
                },
                {
                    xtype: 'component',
                    html: '<h1>Component 4</h1>',
                    padding: '5 5 5 5'
                }
            ]
        }
    ]
});