import Employee from "../models/employeeSchema.js";

export const deleteEmp = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({
        message: "Employee not found.",
      });
    }

    await Employee.findByIdAndDelete(id);

    res.status(200).json({
      message: "Employee deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message:
        "An error occurred while deleting the employee. Please try again later.",
      error: error.message,
    });
  }
};
