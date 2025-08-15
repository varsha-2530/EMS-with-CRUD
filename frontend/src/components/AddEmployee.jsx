// import React, { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const AddEmployee = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     phone: "",
//     city: "",
//   });

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.fullname || !formData.email || !formData.phone || !formData.city) {
//       toast.error("Please fill all fields!");
//       return;
//     }

//     try {
//       const response = await fetch("https://ems-with-crud-1.onrender.com/api/AddEmploye", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         toast.success("Employee added successfully!");
//         setFormData({ fullname: "", email: "", phone: "", city: "" });
//         setTimeout(() => navigate("/"), 1500); // Redirect after toast
//       } else {
//         toast.error(data.message || "Failed to add employee!");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Error connecting to server!");
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", background: "linear-gradient(135deg, #6e8efb, #a777e3)", padding: "20px" }}>
//       <Toaster position="top-right" />
//       <div className="p-4 shadow-lg" style={{ width: "100%", maxWidth: "500px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(15px)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.3)", boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)", color: "#fff" }}>
//         <h2 className="text-center mb-4 fw-bold" style={{ color: "#fff" }}>✨ Add Employee</h2>

//         <form onSubmit={handleSubmit}>
//           {/* Full Name */}
//           <div className="mb-3">
//             <label className="form-label fw-semibold">Full Name</label>
//             <input name="fullname" value={formData.fullname} onChange={handleChange} type="text" placeholder="Enter full name" className="form-control" style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "10px", color: "black", fontWeight: "bold" }} />
//           </div>

//           {/* Email */}
//           <div className="mb-3">
//             <label className="form-label fw-semibold">Email</label>
//             <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Enter email" className="form-control" style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "10px", color: "black", fontWeight: "bold" }} />
//           </div>

//           {/* Phone */}
//           <div className="mb-3">
//             <label className="form-label fw-semibold">Phone</label>
//             <input name="phone" value={formData.phone} onChange={handleChange} type="text" placeholder="Enter phone number" className="form-control" style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "10px", color: "black", fontWeight: "bold" }} />
//           </div>

//           {/* City */}
//           <div className="mb-3">
//             <label className="form-label fw-semibold">City</label>
//             <input name="city" value={formData.city} onChange={handleChange} type="text" placeholder="Enter city" className="form-control" style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "10px", color: "black", fontWeight: "bold" }} />
//           </div>

//           <button type="submit" className="w-100 fw-bold" style={{ background: "linear-gradient(135deg, #ff9a9e, #fad0c4)", color: "#333", border: "none", padding: "12px", borderRadius: "12px", fontSize: "16px", cursor: "pointer" }}>
//             ➕ Add Employee
//           </button>
//         </form>

//             {/* Button to go back to MainPage */}
//         <div className="mt-3 text-center ">
//           <button
//             onClick={() => navigate("/")} // Redirect to MainPage
//             className="btn btn-light fw-bold"
//             style={{ marginBottom: "20px" }}
//           >
//             ⬅️ Back to Main Page
//           </button>
//         </div>

//       </div>

      
//     </div>
//   );
// };

// export default AddEmployee;

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim inputs and check
    const trimmedData = {
      fullname: formData.fullname.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      city: formData.city.trim(),
    };

    if (!trimmedData.fullname || !trimmedData.email || !trimmedData.phone || !trimmedData.city) {
      toast.error("Please fill all fields!");
      return;
    }

    try {
      const response = await fetch("https://ems-with-crud-1.onrender.com/api/AddEmploye", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trimmedData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Employee added successfully!");
        setFormData({ fullname: "", email: "", phone: "", city: "" });
        setTimeout(() => navigate("/all"), 1500); // redirect to all employees
      } else {
        toast.error(data.message || "Failed to add employee!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error connecting to server!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", background: "linear-gradient(135deg, #6e8efb, #a777e3)", padding: "20px" }}>
      <Toaster position="top-right" />

      <div className="p-4 shadow-lg" style={{ width: "100%", maxWidth: "500px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(15px)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.3)", color: "#fff" }}>
        <h2 className="text-center mb-4 fw-bold">✨ Add Employee</h2>

        <form onSubmit={handleSubmit}>
          {["fullname", "email", "phone", "city"].map((field) => (
            <div className="mb-3" key={field}>
              <label className="form-label fw-semibold">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                name={field}
                value={formData[field]}
                onChange={handleChange}
                type={field === "email" ? "email" : "text"}
                placeholder={`Enter ${field}`}
                className="form-control"
                style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "10px", color: "black", fontWeight: "bold" }}
              />
            </div>
          ))}

          <button type="submit" className="w-100 fw-bold" style={{ background: "linear-gradient(135deg, #ff9a9e, #fad0c4)", color: "#333", border: "none", padding: "12px", borderRadius: "12px", fontSize: "16px", cursor: "pointer" }}>
            ➕ Add Employee
          </button>
        </form>

        <div className="mt-3 text-center">
          <button onClick={() => navigate("/")} className="btn btn-light fw-bold" style={{ marginBottom: "20px" }}>
            ⬅️ Back to Main Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
