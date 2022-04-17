// This file contains the employee schema

const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    /**
     * userId, name, age, department, position, createdAt, updatedAt
     */
    userId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => {
            return Date.now();
        },
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: () => {
            return Date.now();
        }
    }
});

module.exports = mongoose.model("employee", employeeSchema)