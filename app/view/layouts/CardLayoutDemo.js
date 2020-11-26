Ext.define('TutorialApp.view.layouts.CardLayoutDemo', {
    extend: 'Ext.window.Window',
    xtype: 'cardlayoutdemo',
    controller:'cardlayoutdemocontroller',
    autoShow: true,
    width: 500,
    items: [{
        xtype: 'panel',
        reference:'panel',
        layout: 'card',
        height: 200,
        bodyStyle: 'padding:15px',
        defaults: {
            border: false
        },
        items: [{
            id: 'card-0',
            items: [
                {
                    xtype:'usergrid'
                }
            ]
        }, {
            id: 'card-1',
            items: [
                {
                    xtype:'postgrid '
                }
            ]
        }, {
            id: 'card-2',
            html: 'Third wizard'
        }, {
            id: 'card-3',
            html: 'Fourth wizard'
        }],
        buttons: [
            {
                itemId: 'move-prev',
                text: 'Prev',
                disabled: true,
               handler: 'onPrevClick'

            },
            {
                xtype: 'tbfill'
            },
            {
                itemId: 'move-next',
                text: 'Next',
                handler: 'onNextClick'
            }]
    }]
}, function () {
    console.log("Here");
});