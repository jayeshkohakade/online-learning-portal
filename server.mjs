import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";

const { json, urlencoded } = bodyParser;
const app = express();
const PORT = 5000;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// MySQL Connection with XAMPP
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "thinkingminds",
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Failed:", err);
  } else {
    console.log("✅ Connected to MySQL Database");
  }
});

// User Registration Route
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO users (name, email, password ) VALUES (?, ?, ?)",
      [name, email, hashedPassword ],
      (err, result) => {
        if (err) {
          return res.status(500).json({ message: "Error registering user", error: err });
        }
        res.status(201).json({ message: "User registered successfully!" });
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// User Login Route
app.post("/login", (req, res) => {
  const { email, password, userType } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });
    if (results.length === 0) return res.status(401).json({ message: "User not found" });

    const user = results[0];

    // Check user type
    if (user.userType !== userType) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ message: "Invalid password" });

    res.json({ success: true, message: "Login successful!", userType: user.userType });
  });
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
