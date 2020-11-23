Ext.define('TutorialApp.home.store.NavStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.navstore',

    rootData: {
        text: 'Ext JS',
        expanded: true,

        children: [{
                text: 'User',
                expanded: true,
                children: [{
                        leaf: true,
                        text: 'Users',
                        iconCls: 'fa fa-users',
                        xtypeName: 'usergrid'

                    },
                    { leaf: true, text: 'New User', iconCls: 'fa fa-plus' },
                    { leaf: true, text: 'Split.js' }
                ]
            },
            {
                text: 'Post',
                children: [
                    { leaf: true, text: 'Posts', xtypeName: 'postgrid' },
                    { leaf: true, text: 'Container.js' },
                    { leaf: true, text: 'Viewport.js' }
                ]
            },
            {
                text: 'Comments',
                children: [
                    { leaf: true, text: 'ButtonGroup.js' },
                    { leaf: true, text: 'Container.js' },
                    { leaf: true, text: 'Viewport.js' }
                ]
            },
            {
                text: 'Todo',
                children: [
                    { leaf: true, text: 'ButtonGroup.js' },
                    { leaf: true, text: 'Container.js' },
                    { leaf: true, text: 'Viewport.js' }
                ]
            },


        ]
    },

    constructor: function(config) {
        // Since records claim the data object given to them, clone the data
        // for each instance.
        config = Ext.apply({
            root: Ext.clone(this.rootData)
        }, config);

        this.callParent([config]);
    }
});