Ext.define('TutorialApp.view.layouts.CardWizardSampleController',{
    extend:'Ext.app.ViewController',
    alias:'controller.cardwizardsamplecontroller',
    onBackPress:function(btn){
       this.navigate(btn.up("panel"), "prev");
    },
    navigate:function(panel, direction){
        var layout = panel.getLayout();
        layout[direction]();
        Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
        Ext.getCmp('move-next').setDisabled(!layout.getNext());
    },
    onNextPress:function(btn){
        this. navigate(btn.up("panel"), "next");
    }
});