Ext.define('Aitiguru.view.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function (button) {
        const form = button.up('form');
        const values = form.getValues();

        // Mock authentication logic
        if (values.username === 'admin' && values.password === 'padmin') {
            Ext.Msg.alert('Success', 'Login successful!', () => {
                // Call the application method to show the main view
                
                Ext.destroy(Ext.ComponentQuery.query('login'));
                // Create and display the Main view
                Ext.create('Aitiguru.view.Main');

                         // Call the application method to show the main view
                Ext.getApplication().showMainView();
            });
        } else {
            Ext.Msg.alert('Error', 'Invalid username or password.');
        }
    }
});
