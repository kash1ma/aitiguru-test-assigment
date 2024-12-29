/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Aitiguru.Application', {
    extend: 'Ext.app.Application',

    name: 'Aitiguru',

    requires: [
        'Aitiguru.view.Login',
        'Aitiguru.view.Main'
    ],

    // Launch the application with the Login view
    launch: function () {
        // Show only the Login view on application start
        Ext.create('Aitiguru.view.Login');
    },

    // Transition to the Main view after successful login
    showMainView: function () {
        // Destroy the current viewport (Login view)
        Ext.destroy(Ext.ComponentQuery.query('viewport'));

        // Create and display the Main view
        Ext.create('Aitiguru.view.Main');
    }
});
