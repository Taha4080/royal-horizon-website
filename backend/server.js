const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "nodeuser",
  password: "123456",
  database: "royal_horizon",
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("MySQL Connected...");
  }
});

// LOGIN API
app.post("/login", (req, res) => {
  console.log("LOGIN DATA:", req.body);

  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        console.log("DB ERROR:", err);
        return res.send({ status: "error" });
      }

      if (result.length === 0) {
        console.log("User not found");
        return res.send({ status: "fail" });
      }

      const user = result[0];

      if (user.password !== password) {
        console.log("Wrong password");
        return res.send({ status: "fail" });
      }

      console.log("LOGIN SUCCESS:", user.role);

      res.send({
        status: "success",
        role: user.role
      });
    }
  );
});

// =====================
// APPLY JOB
// =====================

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post("/apply", upload.single("cv"), (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const jobId = req.body.jobId || "UNKNOWN"; // 👈 مهم

    const cvFile = req.file ? req.file.filename : null;

    if (!cvFile) {
      return res.status(400).json({ message: "No CV uploaded" });
    }

    // 👇 تحقق من القيم قبل الإدخال
    console.log("VALUES:", name, email, phone, cvFile, jobId);

    db.query(
      "INSERT INTO applicants (full_name, email, phone, cv_file, job_id) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone, cvFile, jobId],
      (err, result) => {
        if (err) {
          console.log("DB ERROR FULL:", err); // 👈 مهم جداً
          return res.status(500).json({ message: "Database error" });
        }

        console.log("INSERT SUCCESS ✅");
        res.json({ message: "Application submitted successfully" });
      }
    );

  } catch (error) {
    console.log("SERVER ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// =====================
// GET APPLICANTS
// =====================

app.get("/applicants", (req, res) => {
  db.query("SELECT * FROM applicants", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// DELETE
app.delete("/applicants/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM applicants WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
      res.send({ status: "error" });
    } else {
      res.send({ status: "deleted" });
    }
  });
});

// ACCEPT
app.put("/applicants/:id", (req, res) => {
  const id = req.params.id;

  db.query(
    "UPDATE applicants SET status = 'accepted' WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ status: "error" });
      } else {
        res.send({ status: "updated" });
      }
    }
  );
});

// =====================
// SERVER
// =====================

app.listen(3001, () => {
  console.log("Server running on port 3001");
});