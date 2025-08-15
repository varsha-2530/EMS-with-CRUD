import Employee from "../models/employeeSchema.js";

export const AddEmploye = async (req, res) => {
  try {
    const { phone } = req.body;

    
    const existingEmployee = await Employee.findOne({ phone });
    if (existingEmployee) {
      return res.status(400).json({
        success: false,
        message: "This phone number is already registered."
      });
    }

    const employee = new Employee(req.body);
    await employee.save();

    res.status(201).json({
      success: true,
      message: "Employee added successfully.",
      employee
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding employee.",
      error: error.message
    });
  }
};
