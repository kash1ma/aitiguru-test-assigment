Ext.define('Aitiguru.view.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function (button) {
        const form = button.up('form');
        const values = form.getValues();

        // Mock authentication logic
        if (values.username === 'admin' && values.password === 'padmin') {
            Ext.Msg.alert('Success', 'Login successful!', () => {
                this.redirectToMain();
            });
        } else {
            Ext.Msg.alert('Error', 'Invalid username or password.');
        }
    },

    redirectToMain: function () {
        // Destroy the login window
        this.getView().destroy();

        // Create the main view
        Ext.create('Aitiguru.view.Main');
    }
});
