Ext.define("Aitiguru.view.ProductCard", {
    extend: "Ext.window.Window",
    xtype: "productcard",
  
    requires: ["Ext.form.Panel", "Ext.form.field.Number"],
  
    controller: "productcard",
  
    modal: true,
    width: 400,
    layout: "fit",
  
    title: "Product Details",
  
    config: {
      //init with clean record
      record: null,
    },
  
    items: [
      {
        xtype: "form",
        reference: "productForm",
        bodyPadding: 10,
        defaults: {
          xtype: "textfield",
          anchor: "100%",
          labelWidth: 100,
        },
        items: [
          {
            fieldLabel: "ID",
            name: "id",
            readOnly: true,
          },
          {
            fieldLabel: "Name",
            name: "name",
            readOnly: true,
          },
          {
            xtype: "numberfield",
            fieldLabel: "Price",
            name: "price",
            minValue: 0,
          },
          {
            xtype: "numberfield",
            fieldLabel: "Amount",
            name: "amount",
            minValue: 0,
          },
        ],
      },
    ],
  
    bbar: [
      "->",
      {
        reference: "saveButton",
        text: "Save",
        handler: "onSaveClick", // Delegate save handling to the controller
      },
      {
        text: "Cancel",
        handler: "onCancelClick", // Delegate cancel handling to the controller
      },
    ],
  });
  