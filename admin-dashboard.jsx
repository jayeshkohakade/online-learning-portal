import React from "react";
import "./admin.css";

function AdminDashboard() {
    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <h2>Admin Panel</h2>
                <ul>
                    <li>Dashboard</li>
                    <li>Courses</li>
                    <li>Total Students</li>
                    <li>Results</li>
                </ul>
            </aside>
            <main className="main-content">
                <header className="header">
                    <h1>Welcome, Admin</h1>
                </header>
                <section className="cards">
                    <div className="card">
                        <h3>Dashboard</h3>
                        <p>Overview of activities</p>
                    </div>
                    <div className="card">
                        <h3>Courses</h3>
                        <p>Manage your courses</p>
                    </div>
                    <div className="card">
                        <h3>Total Students</h3>
                        <p>View student records</p>
                    </div>
                    <div className="card">
                        <h3>Results</h3>
                        <p>Check student performance</p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AdminDashboard;
