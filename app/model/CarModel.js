Ext.define('TutorialApp.model.CarModel', {
    extend: 'TutorialApp.model.Base',
    fields: [
        { name: 'id', type: 'integer' },
        { name: 'name', type: 'string' },
        { name: 'makeId', type: 'integer' },
    ]
});