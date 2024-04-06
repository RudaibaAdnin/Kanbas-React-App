import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const [user, setUser] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    const newuser=await client.signin(credentials);
    setUser(newuser);
    // navigate(`/Kanbas/Account/${newuser._id}`);
    navigate(`/Kanbas/Account/Profile`);
  };


  const signup = () => {
    navigate("/Kanbas/Account/Signup");
  };
  return (
    <div className="col-md-5 m-4">
      <h1>Signin</h1>
      <input className="form-control m-2" value={credentials.username} onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })}/>
      <input className="form-control m-2" value={credentials.password} onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })}/>
      <button className="btn btn-primary m-2" onClick={signin}> Signin </button><br/>
      <button className="btn btn-warning m-2" onClick={signup}> Signup </button>
    </div>
  );
}
