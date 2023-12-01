import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account");
  };
  return (
    <div>
      <h1>Signin</h1>
      <input className="form-control w-50" placeholder="enter username" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <input className="form-control w-50" placeholder="enter password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})} type="password"/>
      <button className="btn btn-primary w-50" onClick={signin}> Signin </button>
    </div>
  );
}
export default Signin;