import { useState } from "react";
import apiCalls from "../api";
import { useAuthContext } from "../contexts/auth-context";

const LogIn = () => {
  const { setIncomingAuthData } = useAuthContext();
  const [username, setUsername] = useState("mohit");
  const [password, setPassword] = useState("Gupta@123");

  const handleSignin = async () => {
    if (username.length >=3 && password.length >=6) {
      const res = await apiCalls.login({
        username,
        password
      });
      if (res.status === 200){
        setIncomingAuthData(res.data);
      }
    } else{
      console.error("username and password must contain more than 3 and 6 letters"); // much specific validation and a toast message can be done here.
    }
  }

  return (
    <div className="container d-flex align-items-center py-4 bg-body-tertiary">
      <main className="form-signin w-100 m-auto">
      
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={username}
              onChange={e=>setUsername(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button onClick={()=>handleSignin()} className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
      </main>
    </div>
  );
};

export default LogIn;
