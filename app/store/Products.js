Ext.define("Aitiguru.store.Products", {
    extend: "Ext.data.Store",
  
    alias: "store.products",
  
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
  });
  