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
        reference: 'form',

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