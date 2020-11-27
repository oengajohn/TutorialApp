Ext.define('TutorialApp.store.CarMakes', {
    extend: 'Ext.data.Store',
    alias: 'store.carmakes',
    model:'TutorialApp.model.CarMake',
    proxy: {
        type: 'ajax',
        url: '/resources/car-list.json',
        reader: {
            type: 'json',
            rootProperty: 'makes'
        }
    },
});