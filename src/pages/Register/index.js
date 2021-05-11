import React, { useState } from "react";
import Button from "../../components/atom/Button";
import Input from "../../components/atom/Input";
import firebase from "../../config/Firebase";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const onSubmit = () => {
    const data = {
      email: email,
      nama: nama,
    };

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        firebase
          .database()
          .ref("users/" + userId)
          .set(data);

        setNama("");
        setEmail("");
        setPassword("");

        history.push("/Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = () => {
    const dataRegis = {
      nama: nama,
      email: email,
      password: password,
    };
    console.log(dataRegis);
  };

  return (
    <div className="container-md mt-4">
      <h3>Register</h3>

      <Input
        className="form-control"
        placeholder="Masukan Nama"
        label="Full Name"
        value={nama}
        onChange={(event) => setNama(event.target.value)}
      />

      <Input
        className="form-control"
        placeholder="Masukan Email"
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        className="form-control"
        placeholder="Masukan Password"
        label="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <Button onSubmit={onSubmit} text="Register" />
    </div>
  );
};

export default Register;
