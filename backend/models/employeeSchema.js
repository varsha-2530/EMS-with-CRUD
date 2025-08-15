    import mongoose from "mongoose";

    const { Schema } = mongoose;

    const employeeSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String
    }
    }, { timestamps: true });

    const Employee = mongoose.model("Employee", employeeSchema);

    export default Employee;
