Ext.define('TutorialApp.view.layouts.TabPanelCustom', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabpanelcustom',
    activeItem: 0,
    defaults: {
        bodyStyle: 'padding:5px'
    },
    items: [
        {
            title: 'Bio Data',
            // html: 'Content for first tab' // OR items:[]
            items: [
                {
                    xtype:'form',
                    itemId:'userdetailform',
                    items:[
                        {
                            xtype:'numberfield',
                            fieldLabel:'User ID',
                            name:'id'
                        },
                        {
                            xtype:'textfield',
                            fieldLabel:'Name',
                            name:'name'
                        },
                        {
                            xtype:'textfield',
                            fieldLabel:'Email',
                            name:'email'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Address ',
            // html: 'Content for first tab'
            items: [
    //             "address": {
    // "street": "Kulas Light",
    //     "suite": "Apt. 556",
    //     "city": "Gwenborough",
    //     "zipcode": "92998-3874",
    //     "geo": {
    //     "lat": "-37.3159",
    //         "lng": "81.1496"
    // }
                {
                    xtype:'form',
                    itemId:'addressdetailform',
                    items:[
                        {
                            xtype:'textfield',
                            fieldLabel:'Street',
                            name:'address.street'
                        },
                        {
                            xtype:'textfield',
                            fieldLabel:'City',
                            name:'address.city'
                        },
                        {
                            xtype:'textfield',
                            fieldLabel:'Suite',
                            name:'address.suite'
                        }
                    ]
                }
            ]
        },

        {
            title: 'Company Info',
            html: 'Content for first tab'
        }
    ]

});