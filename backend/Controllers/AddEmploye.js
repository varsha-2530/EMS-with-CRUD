import Employee from '../models/employeeSchema.js'


export const AddEmploye = async (req, res)=>{
   try{
    
    const employee = new Employee(req.body)
    console.log(employee)

     await employee.save();
     res.status(200).json(employee)
     
   } catch(error){
     res.status(400).json({
        message:"Not Add Successfully",
        err
     });

   }
}