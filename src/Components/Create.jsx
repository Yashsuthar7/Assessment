import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";




function Create() { 
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const header = { "Access-Control-Allow-Origin": "*" };
  const History = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    axios.post("http://localhost:3000/user",
      { name: name, email: email, header, }
    )
    // History("/read");
    .then(() => {
      History("/read");
    });
  };
  return (
    <>
      <h1>User_curd</h1>
      <form>
        <div class="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
        </div>

        <div class="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div class="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
};
export default Create