const employeeController = require('../controllers/employee.controller');

module.exports = (app)=>{
    app.post("/employee/api/v1/signup", employeeController.signup);
}