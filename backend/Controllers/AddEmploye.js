import Employee from "../models/employeeSchema.js";

export const AddEmploye = async (req, res) => {
  try {
    const { phone } = req.body;

    const existingEmployee = await Employee.findOne({ phone });
    if (existingEmployee) {
      return res.status(400).json({
        message: "This phone number is already registered.",
      });
    }

    const employee = new Employee(req.body);
    console.log(employee);

    await employee.save();
    res.status(200).json({
      message: "Employee added successfully.",
      employee
    });
  } catch (error) {
    res.status(400).json({
      message: "Not Add Successfully",
      error,
    });
  }
};
