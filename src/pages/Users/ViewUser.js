import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewUser() {
  const { id } = useParams();
  console.log(id);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    loadSingleuser();
  }, []);

  const loadSingleuser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
    

  const { name, username, email } = user;

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">Name: </div>
        <div className="col-2">{name}</div>
      </div>
      <div className="row">
        <div className="col-2">Username: </div>
        <div className="col-2">{username}</div>
      </div>
      <div className="row">
        <div className="col-2">Email: </div>
        <div className="col-2">{email}</div>
      </div>
      <div className="row mt-2">
        <div className="col-2">
          <Link className="btn btn-primary" exact={true} to="/">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
