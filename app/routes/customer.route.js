
const controller = require("../controllers/customer.controller");
module.exports = function(app) {
  app.post("/api/customers/saveNewCustomer",controller.saveNewCustomer);
  app.get("/api/customers/getAllCustomers",controller.getAllCustomers);
  app.get("/api/customers/getCustomerById/:cid",controller.getCustomerById);
  app.put("/api/customers/updateCustomer",controller.updateCustomer);
  app.delete("/api/customers/deleteCustomer/:cid",controller.deleteCustomer);
};