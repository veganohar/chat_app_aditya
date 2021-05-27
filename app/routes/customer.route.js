
const controller = require("../controllers/customer.controller");
module.exports = function(app) {
  app.post("/api/customers/saveNewCustomer",controller.saveNewCustomer);
};