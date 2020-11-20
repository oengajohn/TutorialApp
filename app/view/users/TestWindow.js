Ext.define('TutorialApp.view.users.TestWindow', {
    extend: 'Ext.window.Window',
    xtype: 'testwindow',
    reference: 'testWindow',
    autoShow: true,
    itemId: 'testId',
    modal: true,
    shadow: true,
    items: [{
        xtype: 'form',
        layout: 'form',
        reference: 'userform',

        defaults: {
            xtype: 'textfield',
            allowBlank: false
        },
        items: [{
                xtype: 'numberfield',
                name: 'id',
                fieldLabel: 'User Id',

            },
            {
                name: 'name',
                fieldLabel: 'User Name',

            },
            {
                name: 'email',
                fieldLabel: 'Email',
            },

            {
                name: 'address.street',
                fieldLabel: 'Address Street',
            },

        ]
    }]
});