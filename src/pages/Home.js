import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [users, setUser] = new useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users");
    console.log(result);
    setUser(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUser();
  };

  return (
    <div className="container mt-2">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col" className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td className="text-center">
                <Link
                  className="btn btn-info"
                  to={`/users/${user.id}`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-success mx-2"
                  to={`/edit/${user.id}`}
                >
                  Edit
                </Link>
                <Link
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
