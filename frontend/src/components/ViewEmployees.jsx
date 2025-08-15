
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ViewEmployees = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch employees from backend
  const fetchEmployees = async () => {
    try {
      const response = await fetch("https://your-backend-url.onrender.com/api/getAllData");
      const data = await response.json();
      if (response.ok) {
        setEmployees(data.showEmp);
      } else {
        toast.error(data.message || "Failed to fetch employees!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error connecting to server!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Delete employee
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://your-backend-url.onrender.com/api/deleteEmp/${id}`,
        { method: "DELETE" }
      );
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "Employee deleted successfully!");
        fetchEmployees();
      } else {
        toast.error(data.message || "Failed to delete employee!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error deleting employee!");
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6e8efb, #a777e3)",
        padding: "20px",
      }}
    >
      <Toaster position="top-right" />
      <h2 className="text-center mb-4 fw-bold text-white">👥 All Employees</h2>

      {loading ? (
        <p className="text-white">Loading employees...</p>
      ) : employees.length === 0 ? (
        <p className="text-white">No employees found.</p>
      ) : (
        <>
          {/* Desktop / Tablet Table */}
          <div
            className="table-responsive d-none d-md-block"
            style={{
              width: "100%",
              maxWidth: "900px",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(15px)",
              borderRadius: "20px",
              padding: "20px",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
            }}
          >
            <table className="table table-hover text-center text-white">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, index) => (
                  <tr key={emp._id}>
                    <td>{index + 1}</td>
                    <td>{emp.fullname}</td>
                    <td>{emp.email}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.city}</td>
                    <td>
                      <button
                        onClick={() => navigate(`/edit/${emp._id}`)}
                        className="btn btn-warning btn-sm me-2"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(emp._id)}
                        className="btn btn-danger btn-sm"
                      >
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="d-md-none w-100">
            {employees.map((emp, index) => (
              <div
                key={emp._id}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(15px)",
                  borderRadius: "15px",
                  padding: "15px",
                  marginBottom: "15px",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.3)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
              >
                <h5 className="fw-bold mb-2">
                  {index + 1}. {emp.fullname}
                </h5>
                <p className="mb-1">📧 {emp.email}</p>
                <p className="mb-1">📞 {emp.phone}</p>
                <p className="mb-2">🏙️ {emp.city}</p>
                <div>
                  <button
                    onClick={() => navigate(`/edit/${emp._id}`)}
                    className="btn btn-warning btn-sm me-2"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(emp._id)}
                    className="btn btn-danger btn-sm"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Back Button */}
      <div className="mt-4">
        <button
          onClick={() => navigate("/")}
          className="btn btn-light fw-bold"
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ⬅️ Back to Main Page
        </button>
      </div>
    </div>
  );
};

export default ViewEmployees;


