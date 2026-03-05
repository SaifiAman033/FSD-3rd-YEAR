import React, { useState } from "react";
import "./App.css";
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaMapMarkerAlt, FaSearch, FaPlus, FaTrash } from "react-icons/fa";

function App() {
  const [users, setUsers] = useState([]);

  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    contact: "",
    designation: "",
    company: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addUser = () => {
    if (!form.id || !form.name) return;
    setUsers([...users, form]);
    clearForm();
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const searchUser = () => {
    const found = users.find((u) => u.id === form.id);
    if (found) setForm(found);
  };

  const clearForm = () => {
    setForm({
      id: "",
      name: "",
      email: "",
      contact: "",
      designation: "",
      company: "",
      address: "",
    });
  };

  const resetSystem = () => {
    setUsers([]);
    clearForm();
  };

  return (
    <div className="main">
      <div className="header">
        USER MANAGEMENT <span>SYSTEM</span>
      </div>

      <div className="form-card">
        <div className="grid">

          <div className="input-box">
            <FaUser />
            <input name="id" placeholder="User ID" value={form.id} onChange={handleChange} />
          </div>

          <div className="input-box">
            <FaUser />
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
          </div>

          <div className="input-box">
            <FaEnvelope />
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          </div>

          <div className="input-box">
            <FaPhone />
            <input name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} />
          </div>

          <div className="input-box">
            <FaBuilding />
            <input name="designation" placeholder="Designation" value={form.designation} onChange={handleChange} />
          </div>

          <div className="input-box">
            <FaBuilding />
            <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />
          </div>

          <div className="input-box full">
            <FaMapMarkerAlt />
            <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
          </div>
        </div>

        <div className="btn-group">
          <button className="add" onClick={addUser}><FaPlus /> Add User</button>
          <button className="search" onClick={searchUser}><FaSearch /> Search by ID</button>
          <button className="clear" onClick={clearForm}>Clear</button>
          <button className="reset" onClick={resetSystem}>Reset</button>
        </div>
      </div>

      <div className="table-card">
        <h2>Users List</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Designation</th>
              <th>Company</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="8">No Users Added</td>
              </tr>
            ) : (
              users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.contact}</td>
                  <td>{u.designation}</td>
                  <td>{u.company}</td>
                  <td>{u.address}</td>
                  <td>
                    <button className="delete" onClick={() => deleteUser(u.id)}>
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="total">Total Users: {users.length}</div>
      </div>
    </div>
  );
}

export default App;