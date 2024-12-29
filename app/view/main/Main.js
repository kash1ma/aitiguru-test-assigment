
Ext.define('Aitiguru.view.Main',{
    extend: 'Ext.container.Viewport',
    xtype: 'main',

    layout: 'border',

    items: [
        {
            region: 'north',
            xtype: 'toolbar',
            items: [
                { xtype: 'tbtext', text: 'Welcome to the Main Page!' }
            ]
        },
        {
            region: 'center',
            xtype: 'panel',
            html: '<h1>Main Page Content</h1>'
        }
    ]
});
