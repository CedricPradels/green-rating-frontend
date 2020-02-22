// REACT
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// AXIOS
import axios from "axios";

// COMPONENTS
import FormLabel from "../components/FormLabel";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

const Login = () => {
  // STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // HISTORY
  const history = useHistory();

  return (
    <main className="login">
      <form
        onSubmit={async event => {
          event.preventDefault();

          const account = {
            email,
            password
          };

          const response = await axios.post(
            `${process.env.REACT_APP_GREEN_RATING_API}user/login`,
            account
          );
          const token = response.data.token;

          if (token) {
            history.push("/classes");
          } else {
            setEmail("");
            setPassword("");
          }
        }}
      >
        <FormLabel text="email" id="email"></FormLabel>
        <FormInput
          state={email}
          setState={setEmail}
          id="email"
          placeholder="prof@steiner.edu"
          type="email"
        ></FormInput>

        <FormLabel text="Mot de passe" id="password"></FormLabel>
        <FormInput
          state={password}
          setState={setPassword}
          id="password"
          placeholder="password"
          type="password"
        ></FormInput>

        <FormButton type="submit" text="S'enregistrer"></FormButton>
      </form>
    </main>
  );
};

export default Login;
