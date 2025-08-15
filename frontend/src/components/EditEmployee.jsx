import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    city: "",
  });
  const [loading, setLoading] = useState(true);

  // Fetch employee data to edit
  const fetchEmployee = async () => {
    try {
      const response = await fetch(`https://ems-backend.onrender.com/api/getAllData`);
      const data = await response.json();

      if (response.ok) {
        const emp = data.showEmp.find((e) => e._id === id);
        if (emp) {
          setFormData({
            fullname: emp.fullname,
            email: emp.email,
            phone: emp.phone,
            city: emp.city,
          });
        } else {
          toast.error("Employee not found!");
          navigate("/all");
        }
      } else {
        toast.error(data.message || "Failed to fetch employee!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error connecting to server!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullname || !formData.email || !formData.phone || !formData.city) {
      toast.error("Please fill all fields!");
      return;
    }

    try {
      const response = await fetch(`https://ems-backend.onrender.com/api/UpdateEmp/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Employee updated successfully!");
        setTimeout(() => navigate("/all"), 1500);
      } else {
        toast.error(data.message || "Failed to update employee!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error connecting to server!");
    }
  };

  if (loading) {
    return <p style={{ color: "#fff", textAlign: "center", marginTop: "50px" }}>Loading employee data...</p>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #6e8efb, #a777e3)",
        padding: "20px",
      }}
    >
      <Toaster position="top-right" />

      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "rgba(255,255,255,0.15)",
          padding: "25px",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.3)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 8px 32px rgba(31,38,135,0.2)",
          color: "#fff",
        }}
      >
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#fff" }}>
          ✏️ Edit Employee
        </h2>

        <form onSubmit={handleSubmit}>
          {["fullname", "email", "phone", "city"].map((field) => (
            <div className="mb-3" key={field}>
              <label className="form-label fw-semibold">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                name={field}
                value={formData[field]}
                onChange={handleChange}
                type={field === "email" ? "email" : "text"}
                className="form-control"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.4)",
                  color: "black",
                  fontWeight: "bold",
                }}
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-100 fw-bold"
            style={{
              background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
              color: "#333",
              border: "none",
              padding: "12px",
              borderRadius: "12px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            💾 Update Employee
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/all")}
            className="btn btn-light fw-bold"
            style={{
              padding: "12px 25px",
              borderRadius: "12px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            ⬅️ Back to All Employees
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;


