import Employee from "../models/employeeSchema";

export const getAllData = async(req, res)=>{
    try{
      const getEmp = await Employee.find()
      console.log(getEmp);
      
      res.status(200).json({
        message:"Get All Employee Successfully"
      })
    }catch(err){
        res.status(400).json({
            message:"Something wrong",
            err
        })
    }
}
