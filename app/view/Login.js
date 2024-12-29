Ext.define('Aitiguru.view.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'Ext.form.Panel'
    ],

    controller: 'login',

    title: 'Login',
    modal: true,
    closable: false,
    autoShow: true,

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
        },

    items: {
        xtype: 'form',
        width: 300,
        bodyPadding: 10,
        defaults: {
            xtype: 'textfield',
            anchor: '100%',
            allowBlank: false,
            labelAlign: 'top',
        },
        items: [
            {
                name: 'username',
                fieldLabel: 'Username'
            },
            {
                name: 'password',
                fieldLabel: 'Password',
                inputType: 'password'
            }
        ],
        buttons: [
            {
                text: 'Login',
                formBind: true,
                listeners: {
                    click: 'onLoginClick'
                }
            }
        ],
        border: true,
        frame: true,
        defaultType: 'textfield',
    }
});
