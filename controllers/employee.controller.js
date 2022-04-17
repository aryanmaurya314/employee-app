const Employee = require('../models/employee.model');


exports.signup = async (req,res)=>{

    const employeeObjToBeStoredInDB = {
        userId: req.body.userId, 
        name: req.body.name, 
        age: req.body.age, 
        department: req.body.department, 
        position: req.body.position
    }

    // insert data to database

    try{
        const employeeCreated = await Employee.create(employeeObjToBeStoredInDB);
        console.log("Employee created", employeeCreated);

        // return the response
        const employeeCreationResponse = {
            userId: employeeCreated.userId,
            name: employeeCreated.name,
            age: employeeCreated.age,
            department: employeeCreated.department,
            position: employeeCreated.position,
            createdAt: employeeCreated.createdAt,
            updatedAt: employeeCreated.updatedAt
        }
        res.status(201).send(employeeCreationResponse);
    }catch(err){
        console.log("Error while creating employee.", err.message);
        res.status(500).send({
            message: "Some internal error"
        })
    }
}