import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { DATABASE_URI, PORT } from "./keys.js";
import employeeRoutes from "./routes/EmployeeRoutes.js"; 

const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  
}));
app.use(express.json());

// Connect MongoDB
mongoose.connect(DATABASE_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Health check route
app.get("/api/health", (req, res) => {
  res.send("Server is running Okay!");
});


app.use("/api", employeeRoutes); 

app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});
