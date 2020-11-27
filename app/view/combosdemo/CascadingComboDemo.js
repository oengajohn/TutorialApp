Ext.define('TutorialApp.view.combosdemo.CascadingComboDemo', {
    extend: 'Ext.window.Window',
    xtype: 'cascadingcombodemo',
    controller:'cascadingcombodemocontroller',
    autoShow: true,
    modal: true,
    shadow: true,
    closeable: true,
    width:500,
    items: [
        {
            xtype: 'form',
            reference: 'form',
            items: [
                {
                    xtype:'combo',
                    store:{
                        type:'carmakes',
                    },
                    displayField:'brand',
                    valueField:'id',
                    typeAhead:true,
                    editable:true,
                    mode:'remote',
                    forceSelection:true,
                    triggerAction:'all',
                    fieldLabel:'Make',
                    emptyText:'Select a make...',
                    selectionOnFocus:true,
                    anchor:'100%',
                    listeners:{
                        select: 'onCarMakeSelect',
                    }
                },
                {
                    fieldLabel: 'Model',
                    itemId:'modelscombo',
                    xtype:'combo',
                    store: {
                        type:'carmodels'
                    },
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    disabled:true,

                }
            ],
            buttons: [
                {
                    text:'Submit',
                    handler:'onFormSubmit'
                },
                {
                    text:'Close',
                    handler:'onFormClose'
                }
            ],
        }
    ]
})