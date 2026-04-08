import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";

export default function Admin() {
  const [applicants, setApplicants] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:3001/applicants")
      .then((res) => setApplicants(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // حذف
  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      axios.delete(`http://localhost:3001/applicants/${id}`)
        .then(() => fetchData());
    }
  };

  // قبول
  const handleAccept = (id) => {
    axios.put(`http://localhost:3001/applicants/${id}`)
      .then(() => fetchData());
  };

  return (
    <div className="admin">
      <h1 className="admin-title">Admin Dashboard</h1>

      <div className="cards">
        {applicants.map((app) => (
          <div className="card" key={app.id}>
            <h3>{app.full_name}</h3>
            <p><strong>Email:</strong> {app.email}</p>
            <p><strong>Phone:</strong> {app.phone}</p>
            <p><strong>Job:</strong> {app.job_id}</p>

            <p className={`status ${app.status}`}>
              {app.status}
            </p>

            <div className="actions">
              <a
                href={`http://localhost:3001/uploads/${app.cv_file}`}
                target="_blank"
                className="btn view"
              >
                View CV
              </a>

              <button className="btn accept" onClick={() => handleAccept(app.id)}>
                Accept
              </button>

              <button className="btn delete" onClick={() => handleDelete(app.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}