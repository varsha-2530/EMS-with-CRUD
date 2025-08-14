import Employee from "../models/employeeSchema.js";

export const UpdateEmp = async (req, res) => {
  try {
    const { id } = req.params;
    const { Phone } = req.body;

    const employee = await Employee.findById(id);
    if (!employee) {
      res.status(404).json({
        message: "Employee not found.",
      });
    }

    if (Phone) {
      const existingEmployee = await Employee.findOne({
        Phone,
        _id: { $ne: id },
      });
      if (existingEmployee) {
        res.status(400).json({
          message: "Another employee with this phone number already exists.",
        });
      }
    }

    const UpdateEmployee = await Employee.findByIdAndUpdate(id, req.body,{
        new:true
    })
     res.status(200).json({
      message: "Employee updated successfully.",
      employee: UpdateEmployee
    });

  } catch (error) {
     res.status(500).json({
        message:"An error occurred while updating the employee. Please try again later."
     })
  }
};
