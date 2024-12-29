Ext.define('Aitiguru.view.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'main',

    requires: [
        'Ext.tab.Panel',
        'Ext.button.Button',
        'Aitiguru.view.Products'
    ],

    controller: 'main',

    layout: 'border',

    items: [
        {
            region: 'north',
            xtype: 'toolbar',
            items: [
                {
                    text: 'Products',
                    handler: 'onProductsClick'
                },
                {
                    text: 'Exit',
                    handler: 'onExitClick'
                }
            ]
        },
        {
            region: 'center',
            xtype: 'tabpanel',
            itemId: 'mainTabPanel',
            items: [
                {
                    title: 'Welcome',
                    html: '<h1>Welcome to the Main Page!</h1>'
                }
            ]
        }
    ]
});
