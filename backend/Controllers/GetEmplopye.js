import Employee from "../models/employeeSchema.js";

export const getAllData = async (req, res) => {
  try {
    const showEmp = await Employee.find();
    console.log(showEmp);

    res.status(200).json({
      message: "All employees fetched successfully.",
       total: showEmp.length,
      showEmp,
    });
  } catch (err) {
    res.status(400).json({
       message: "Failed to fetch employees. Please try again later.",
      err,
    });
  }
};
