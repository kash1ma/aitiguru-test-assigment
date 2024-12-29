Ext.define("Aitiguru.view.ProductsController", {
  extend: "Ext.app.ViewController",
  alias: "controller.products",

  onFilterKeyPress: function (field, e) {
    if (e.getKey() === e.ENTER) {
      const grid = field.up("grid"),
        store = grid.getStore(),
        filters = {};

      // Gather filter values
      grid.down('textfield[fieldLabel="ID"]').getValue() &&
        (filters.id = grid.down('textfield[fieldLabel="ID"]').getValue());
      grid.down('textfield[fieldLabel="Description"]').getValue() &&
        (filters.description = grid
          .down('textfield[fieldLabel="Description"]')
          .getValue());

      // Apply filters
      store.clearFilter(true);
      store.filterBy((record) => {
        let matches = true;
        if (
          filters.id &&
          record.get("id").toString() !== filters.id.toString()
        ) {
          matches = false;
        }
        if (
          filters.description &&
          !record
            .get("description")
            .toLowerCase()
            .includes(filters.description.toLowerCase())
        ) {
          matches = false;
        }
        return matches;
      });
    }
  },
});
