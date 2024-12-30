Ext.define("Aitiguru.view.Products", {
  extend: "Ext.panel.Panel",
  xtype: "products",

  requires: [
    "Ext.grid.Panel",
    "Ext.form.field.Text",
    "Ext.grid.column.Number",
    "Ext.data.Store",
  ],

  layout: "fit",

  controller: "products",

  items: [
    {
      xtype: "grid",
      title: "Product List",
      store: {
        fields: ["id", "name", "description", "price", "amount"],
        data: [
          {
            id: 1,
            name: "Notebook Lenovo",
            description: "ThinkPad T460",
            price: 100.0,
            amount: 2,
          },
          {
            id: 2,
            name: "Keyboard OKLICK",
            description: "OKLICK 140M",
            price: 50.0,
            amount: 8,
          },
          {
            id: 3,
            name: "Network adapter",
            description: "WiFi D-Link",
            price: 7.0,
            amount: 0,
          },
        ],
      },

      columns: [
        { text: "ID", dataIndex: "id", width: 50 },
        {
          text: "Name",
          dataIndex: "name",
          flex: 1,
          listeners: { click: "onNameClick" },
        },
        { text: "Description", dataIndex: "description", flex: 1 },
        {
          text: "Price",
          dataIndex: "price",
          width: 100,
          xtype: "numbercolumn",
          format: "0.00",
        },
        {
          text: "Amount",
          dataIndex: "amount",
          width: 100,
          renderer: function (value, meta) {
            if (value === 0) {
              meta.style = "background-color: red; color: white;";
            }
            return value;
          },
        },
      ],

      tbar: [
        {
          xtype: "textfield",
          fieldLabel: "ID",
          labelAlign: "left",
          labelWidth: 30,
          enableKeyEvents: true,
          itemId: "filterId", // Add itemId for easy access
          listeners: {
            specialkey: "onFilterKeyPress",
          },
        },
        {
          xtype: "textfield",
          fieldLabel: "Description",
          labelAlign: "left",
          labelWidth: 80,
          enableKeyEvents: true,
          itemId: "filterDescription", // Add itemId for easy access
          listeners: {
            specialkey: "onFilterKeyPress",
          },
        },
        {
          xtype: "button",
          text: "Clear Filters",
          iconCls: "x-fa fa-times", // Optional: Add an icon for the button
          handler: "onClearFiltersClick", // Attach the handler to the controller
        },
      ],
    },
  ],
});