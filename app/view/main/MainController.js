Ext.define('Aitiguru.view.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onProductsClick: function () {
        const tabPanel = this.lookupReference('mainTabPanel') || this.getView().down('#mainTabPanel');

        // Create a new Products tab
        const newTab = tabPanel.add({
            xtype: 'products',
            closable: true, // Allow closing the tab
            title: 'Products ' + (tabPanel.items.length)
        });

        // Activate the new tab
        tabPanel.setActiveTab(newTab);
    },

    onExitClick: function () {
        // Destroy the current viewport and go back to the Login view
        Ext.destroy(Ext.ComponentQuery.query('viewport'));
        Ext.create('Aitiguru.view.Login');
    }
});
