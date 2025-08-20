import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";
import {
  saveToLocalStorage,
  getFromLocalStorage,
  updateLocalStorage,
  deleteFromLocalStorage,
} from "./LocalStorage.ts";

function Dashboard() {
  const location = useLocation();
  const { name, email, password, action } = location.state || {};

  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const savedUsers = getFromLocalStorage("users") || [];
    setUsers(savedUsers);

    if (name || email || password) {
      const newUser = {
        id: Date.now(),
        name: name || "",
        email: email || "",
        password: password || "",
      };

      const existingUserIndex = savedUsers.findIndex(
        (user) => user.email === email
      );

      if (existingUserIndex === -1) {
        const updatedUsers = [...savedUsers, newUser];
        setUsers(updatedUsers);
        saveToLocalStorage("users", updatedUsers);
        console.log("New user registered:", newUser);
      }
    }
  }, [name, email, password]);

  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    saveToLocalStorage("users", updatedUsers);
    console.log("User deleted:", userId);
  };

  const startEdit = (user) => {
    setEditingUserId(user.id);
    setEditForm({
      name: user.name,
      email: user.email,
      password: user.password,
    });
  };

  const saveEdit = () => {
    const updatedUsers = users.map((user) =>
      user.id === editingUserId ? { ...user, ...editForm } : user
    );
    setUsers(updatedUsers);
    saveToLocalStorage("users", updatedUsers);
    setEditingUserId(null);
    setEditForm({ name: "", email: "", password: "" });
    console.log("User updated");
  };

  const cancelEdit = () => {
    setEditingUserId(null);
    setEditForm({ name: "", email: "", password: "" });
  };

  const clearAllUsers = () => {
    setUsers([]);
    deleteFromLocalStorage("users");
    console.log("All users cleared");
  };

  return (
    <div className="container">
      <div
        style={{
          color: "#0f0f0f",
          padding: "16px",
          textAlign: "center",
          fontSize: "22px",
          borderRadius: "8px",
          margin: "20px 0",
        }}
      >
        Welcome to User Management Dashboard
      </div>

      <div>
        <h1 style={{ color: "black", fontSize: "60px", textAlign: "center" }}>
          Registered Users
        </h1>

        {users.length === 0 ? (
          <p style={{ textAlign: "center", fontSize: "18px", color: "#666" }}>
            No users registered yet.
          </p>
        ) : (
          <div style={{ margin: "20px 0" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                border: "1px solid #ddd",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f5f5f5" }}>
                  <th style={{ border: "1px solid #ddd", padding: "12px" }}>
                    ID
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "12px" }}>
                    Name
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "12px" }}>
                    Email
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "12px" }}>
                    Password
                  </th>

                  <th style={{ border: "1px solid #ddd", padding: "12px" }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {user.id}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {editingUserId === user.id ? (
                        <input
                          type="text"
                          value={editForm.name}
                          onChange={(e) =>
                            setEditForm({ ...editForm, name: e.target.value })
                          }
                          style={{ width: "100%", padding: "4px" }}
                        />
                      ) : (
                        user.name
                      )}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {editingUserId === user.id ? (
                        <input
                          type="email"
                          value={editForm.email}
                          onChange={(e) =>
                            setEditForm({ ...editForm, email: e.target.value })
                          }
                          style={{ width: "100%", padding: "4px" }}
                        />
                      ) : (
                        user.email
                      )}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {editingUserId === user.id ? (
                        <input
                          type="password"
                          value={editForm.password}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              password: e.target.value,
                            })
                          }
                          style={{ width: "100%", padding: "4px" }}
                        />
                      ) : (
                        user.password
                      )}
                    </td>

                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {editingUserId === user.id ? (
                        <div>
                          <button
                            onClick={saveEdit}
                            style={{
                              align: "center",
                              background: "green",
                              color: "white",
                              padding: "4px 8px",
                              marginRight: "5px",
                              border: "none",
                              borderRadius: "3px",
                            }}
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            style={{
                              align: "center",
                              background: "gray",
                              color: "white",
                              padding: "4px 8px",
                              border: "none",
                              borderRadius: "3px",
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            onClick={() => startEdit(user)}
                            style={{
                              align: "center",
                              background: "blue",
                              color: "white",
                              padding: "4px 8px",
                              marginRight: "5px",
                              border: "none",
                              borderRadius: "3px",
                            }}
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteUser(user.id)}
                            style={{
                              align: "center",
                              background: "red",
                              color: "white",
                              padding: "4px 8px",
                              border: "none",
                              borderRadius: "3px",
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            onClick={clearAllUsers}
            style={{
              background: "red",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Clear All Users
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
