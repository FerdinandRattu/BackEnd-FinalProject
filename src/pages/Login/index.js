import React, { useState } from "react";
import Button from "../../components/atom/Button";
import Input from "../../components/atom/Input";
import firebase from "../../config/Firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleSubmit = () => {
    const dataSub = {
      email: email,
      password: password,
    };
    //console.log(dataSub);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => history.push("/"))
      .catch((error) => console.log("Error", error));
  };

  return (
    <div className="container-md mt-4">
      <h3>Login</h3>
      <Input
        className="form-control form-control-sm"
        label="Email"
        placeholder="Masukan email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        className="form-control form-control-sm"
        label="Password"
        placeholder="Masukan password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <br />
      <Button onSubmit={handleSubmit} text="Submit" />
    </div>
  );
};

export default Login;
