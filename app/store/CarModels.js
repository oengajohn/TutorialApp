Ext.define('TutorialApp.store.CarModels', {
    extend: 'Ext.data.Store',
    alias: 'store.carmodels',
    storeId:'carmodels',
    model:'TutorialApp.model.CarModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/resources/car-models.json',
        reader: {
            type: 'json',
            rootProperty: 'models'
        }
    },

});