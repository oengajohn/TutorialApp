Ext.define('TutorialApp.view.combosdemo.CascadingComboDemoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cascadingcombodemocontroller',
    onCarMakeSelect: function (combo, record, eOpts) {
        var modelscombo = Ext.ComponentQuery.query('cascadingcombodemo #modelscombo')[0];
        modelscombo.clearValue();
        modelscombo.getStore().reload();
        // modelscombo.getStore().reload({
        //     params:{
        //         makeId:combo.getValue(),
        //     }
        // });

        modelscombo.getStore().filter({
            property: 'makeId',
            value: combo.getValue(),
            exactMatch: true,
            caseSensitive: true
        })

        modelscombo.enable();
    },
    onFormSubmit:function(btn,e,eOpts){
        let me = this,
            window = me.getView(),
            form = window.lookupReference('form').getForm();
        if(form.isValid()){
            console.log(form.getFieldValues());
        }
    },
    onFormClose:function(btn,e,eOpts){
        this.getView().close();
    }
})