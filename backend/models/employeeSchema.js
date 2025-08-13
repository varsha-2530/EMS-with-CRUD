import mongoose from "mongoose"

const {Schema} = mongoose

const  employeeSchema = new Schema({
    fullName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        
    },
    Phone:{
        type:String
    },
    City:{
        type:String
    }
},{timestamps:true})

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;