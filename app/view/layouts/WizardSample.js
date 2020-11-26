Ext.define('TutorialApp.view.layouts.CardWizardSample',{
    extend:'Ext.window.Window',
    xtype:'cardwizardsample',
    controller:'cardwizardsamplecontroller',
    autoShow:true,
    modal:true,
    shadow:true,
    items:[
        {
            xtype:'panel',
            layout: 'card',
            width: 300,
            height: 200,
            bodyStyle: 'padding:15px',
            defaults: {
                border: false
            },
            items: [{
                id: 'card-0',
                html: '<h1>Welcome to the Wizard!</h1><p>Step 1 of 3</p>'
            },{
                id: 'card-1',
                html: '<p>Step 2 of 3</p>'
            },{
                id: 'card-2',
                html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
            }],
            bbar: [
                {
                    id: 'move-prev',
                    text: 'Back',
                    handler: 'onBackPress',
                    disabled: true
                },
                '->',
                {
                    id: 'move-next',
                    text: 'Next',
                    handler: 'onNextPress',

                }
            ],
        }
    ]
})