Ext.define('TutorialApp.view.menu.MainMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainmenucontroller',
    /**
     * Called when the view is created
     */
    // onRender: function(view, eOpts) {
    //     var dynamicMenus = [];
    //     view.body.mask('Loading Menus... Please wait...');
    //     console.log('here');
    //     this.menustore.load(function(records, op, success) {
    //         console.log('here');
    //         Ext.each(records, function(root) {
    //             var menu = Ext.create('TutorialApp.view.menu.MainMenuTree', {
    //                 title: translations[root.get('text')],
    //                 iconCls: root.get('iconCls')
    //             });
    //             var treeNodeStore = root.items(),
    //                 nodes = [],
    //                 item;
    //             for (var i = 0; i < treeNodeStore.getCount(); i++) {
    //                 item = treeNodeStore.getAt(i);
    //                 nodes.push({
    //                     text: item.get('text'),
    //                     leaf: true,
    //                     glyph: item.get('iconCls'),
    //                     id: item.get('id'),
    //                     className: item.get('className')
    //                 });
    //             }
    //             menu.getRootNode().appendChild(nodes);
    //             dynamicMenus.push(menu);
    //         });
    //         view.add(dynamicMenus);
    //         view.body.unmask();
    //     });
    // }
});