const mongoose = require('../database')

const EmployeeSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    birthDate:{
        type: Date,
        require: true,
    },
    gender:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    cpf:{
        type: String,
        require: true,
    },
    startDate:{
        type: String,
        require: true
    },
    team:{
        type: String
    }
})

const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee