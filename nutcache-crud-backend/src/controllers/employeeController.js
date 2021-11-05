const express = require('express')

const Employee = require('../models/employee')

const router = express.Router()

router.get('/', async (req, res)=>{
    try{
        const employee = await Employee.find()

        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 

        return res.send({ employee })

    }catch(err){
        return res.status(400).send({ error: 'Error loading projects'})
    }
})

router.put('/:employeeId', async (req, res) => {
    try{

        const updatedEmployee = req.body

        const employee = await Employee.findByIdAndUpdate(req.params.employeeId, updatedEmployee, { new: true })

        await employee.save()
        res.send({ employee })


    }catch(err){
        console.log(err)
        return res.status(400).send({ error: 'Error updating new project'})
    }
})

router.post('/', async (req, res)=>{
    try{

        const employee = await Employee.create(req.body)

        return res.send({ employee })

    }catch (err){
        return res
            .status(400)
            .send({ error: 'Error creating a new employee'})

    }
})

router.delete('/:employeeId', async (req,res) => {
    try{
        const employee = await Employee.findByIdAndRemove(req.params.employeeId)
        return res.send({ message: "Employee deleted"})

    }catch(err){
        return res.status(400).send({ error: 'Error deleting employee'})
    }
})

module.exports = app => app.use('/employees', router)