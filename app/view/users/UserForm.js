Ext.define('TutorialApp.view.users.UserForm', {
    extend: 'Ext.window.Window',
    xtype: 'userform',
    controller: 'userformcontroller',
    autoShow: true,
    modal: true,
    shadow: true,
    width: 600,
    items: [{
        xtype: 'form',
        layout: 'form',

        defaults: {
            xtype: 'textfield',
            allowBlank: false
        },
        items: [{
                xtype: 'numberfield',
                fieldLabel: 'User Id',

            },
            {

                fieldLabel: 'User Name',
            },
            {

                fieldLabel: 'Email',
            },

        ],
        buttons: [{
                text: 'Save',
                formBind: true,
                handler: 'onUserFormSubmit'
            },
            {
                text: 'Cancel',
                handler: 'onUserFormCancel'

            }
        ]
    }]
});