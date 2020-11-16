Ext.define('TutorialApp.view.main.FormPopupWindow', {
    extend: 'Ext.window.Window',
    xtype: 'formpopupwindow',
    autoShow: true,
    modal: true,
    shadow: true,
    width: 500,
    title: 'Register',
    items: [{
        xtype: 'form', //formpanel
        layout: 'form',
        defaultType: 'textfield',

        bodyPadding: 10,
        scrollable: true,
        width: 355,

        fieldDefaults: {
            labelAlign: "right",
            labelWidth: 115,
            msgTarget: 'side'
        },
        items: [{
            xtype: 'textarea',
            fieldLabel: 'textarea'
        }],
        buttons: [{
            text: 'Register',
            disabled: true,
            formBind: true
        }]

    }]


});