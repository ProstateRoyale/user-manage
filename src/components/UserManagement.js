import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { getUsers } from "../api/users";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Registration Date</th>
            <th>Last Login</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.registrationDate}</td>
              <td>{user.lastLogin}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserManagement;