import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {

  const adminUser = {
    email: "shukla.vanpriya@gmail.com",
    password: "admin123"
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const login = details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("You are logged in!");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match. Try again!");
      setError("Details do not match. Try Again!");
    }
  }

  const logout = () => {
    console.log("Logout");
    setUser({
      name: "",
      email: ""
    });
    setError("");
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
          <LoginForm Login={login} error={error} />
        )}

    </div>
  );
}

export default App;
