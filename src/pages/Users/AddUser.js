import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
export default function AddUser() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-md-2">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Name</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                name="name"
                value={name}
                placeholder="Enter name"
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">User name</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                name="username"
                placeholder="User name"
                value={username}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Email</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="form-control btn btn-primary"
                id="formGroupExampleInput2"
                name="btnSave"
              >
                Save User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
