Ext.define('TutorialApp.view.users.UserGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'usergrid',

    controller: 'usergridcontroller',
    store: {
        type: 'users'
    },
    layout: 'fit',
    selModel: {
        injectCheckbox: 'first',
        checkOnly: false,
        model: 'MULTI',
        type: 'checkboxmodel',
    },
    tbar: [{
            xtype: 'button',
            text: 'Add New User',
            handler: 'onAddUserButtonClick'
        },
        {
            xtype: 'button',
            text: 'View Details',
            handler: 'onViewUserDetailsButtonClick'
        },
        {
            xtype: 'button',
            text: 'Remove',
            handler: 'onRemoveButtonClick'
        },
        {
            xtype: 'numberfield',
            reference: 'searchId',
            emptyText: 'Id to search',
            width: 100,
            listeners: {
                specialkey: 'onIdSearchEnterKey'
            }
        },
        {
            xtype: 'button',
            text: 'Get Record',
            handler: 'onGetButtonClick'
        },
        {
            xtype: 'button',
            text: 'Form Field Illustration',
            handler: 'onFormFieldIllustrationButtonClick'
        },
    ],
    columns: [
        { text: 'User ID', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'UserName', dataIndex: 'username', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Street', dataIndex: 'address.street', hidden: true, flex: 1 },
        { text: 'Suite', dataIndex: 'address.suite', hidden: true, flex: 1 },
        { text: 'City', dataIndex: 'address.city', hidden: true, flex: 1 },
        { text: 'ZipCode', dataIndex: 'address.zipcode', hidden: true, flex: 1 },
        { text: 'Latitude', dataIndex: 'address.geo.lat', hidden: true, flex: 1 },
        { text: 'Longitude', dataIndex: 'address.geo.lng', hidden: true, flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Website', dataIndex: 'website', flex: 1 },
        { text: 'Company Name', dataIndex: 'address.company.name', flex: 1 },
        { text: 'Company Catch Phrase', dataIndex: 'address.company.catchPhrase', hidden: true, flex: 1 },
        { text: 'Company Bs', dataIndex: 'address.company.bs', hidden: true, flex: 1 },
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },

});