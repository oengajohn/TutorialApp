Ext.define('TutorialApp.model.User', {
    extend: 'TutorialApp.model.Base',

    fields: [
        { name: 'id', type: 'integer' },
        { name: 'name', type: 'string' },
        { name: 'username', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'address.street', type: 'string', mapping: 'address.street' },
        { name: 'address.suite', type: 'string', mapping: 'address.suite' },
        { name: 'address.city', type: 'string', mapping: 'address.city' },
        { name: 'address.zipcode', type: 'string' },
        { name: 'address.geo.lat', type: 'float' },
        { name: 'address.geo.lng', type: 'float' },
        { name: 'phone', type: 'string' },
        { name: 'website', type: 'string' },
        { name: 'company.name', type: 'string' },
        { name: 'company.catchPhrase', type: 'string' },
        { name: 'company.bs', type: 'string' },

    ]

});