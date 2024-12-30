Ext.define("Aitiguru.view.Products", {
  extend: "Ext.panel.Panel",
  xtype: "products",

  requires: [
    "Ext.grid.Panel",
    "Ext.form.field.Text",
    "Ext.grid.column.Number",
    "Ext.data.Store",
    "Aitiguru.store.Products",
    "Aitiguru.model.Product",
  ],

  layout: "fit",

  store: "Aitiguru.store.Products",

  controller: "products",

  items: [
    {
      xtype: "grid",
      title: "Product List",
      store: {
        type: "products", // Reference the store alias
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
          itemId: "filterId",
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
          itemId: "filterDescription",
          listeners: {
            specialkey: "onFilterKeyPress",
          },
        },
        {
          xtype: "button",
          text: "Clear Filters",
          iconCls: "x-fa fa-times",
          handler: "onClearFiltersClick",
        },
      ],
    },
  ],
});
