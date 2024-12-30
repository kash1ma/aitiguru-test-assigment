Ext.define('Aitiguru.controller.ProductCardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productcard',
  
    /**
     * When the window is shown, load the record into the form
     */
    init: function (view) {
        const record = view.getRecord();
        if (record) {
          this.lookupReference("productForm").loadRecord(record);
        }
      },
  
    /**
     * Handle the Save button click
     */
    onSaveClick: function () {
      const form = this.lookupReference('productForm');
      const record = this.getView().getRecord();
  
      if (form.isValid()) {
        form.updateRecord(record);
  
        // Get changes made to the record
        const changes = record.getChanges();
        if (Ext.Object.getKeys(changes).length > 0) {
          Ext.Msg.alert('Changes Saved', `Updated fields:\n${JSON.stringify(changes, null, 2)}`);
        } else {
          Ext.Msg.alert('No Changes', 'No fields were modified.');
        }
  
        this.getView().close(); // Close the window
      }
    },
  
    /**
     * Handle the Cancel button click
     */
    onCancelClick: function () {
      this.getView().close();
    },
  });
  