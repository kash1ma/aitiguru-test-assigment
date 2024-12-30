Ext.define("Aitiguru.view.ProductsController", {
  extend: "Ext.app.ViewController",
  alias: "controller.products",

  onClearFiltersClick: function (button) {
    const grid = button.up("grid"),
      store = grid.getStore();

    grid.down("#filterId").reset();
    grid.down("#filterDescription").reset();

    store.clearFilter();
  },

  onNameClick: function (button) {
    console.log("Name clicked", button.up("name").getValue());
  },

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
        console.log(matches);

        return matches;
      });
    }
  },
});