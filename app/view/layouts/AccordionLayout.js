Ext.define('TutorialApp.view.layouts.AccordionLayout', {
    extend: 'Ext.panel.Panel',
    xtype: 'accordionlayout',
    layout: 'accordion',
    width: 700,
    height: 500,
    defaults: {
        bodyPadding: 10
    },

    items: [{
        title: 'User Register',
        html: 'Panel 1 html content'
    }, {
        title: 'Inventory',
        html: 'Panel 2 html content'
    }, {
        title: 'Panel 3',
        html: 'Panel 3 html content'
    }, {
        title: 'Panel 4',
        html: 'Panel 4 html content'
    }, {
        title: 'Panel 5',
        html: 'Panel 5 html content'
    }]
});