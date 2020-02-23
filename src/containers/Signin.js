// REACT
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

// AXIOS
import axios from "axios";

// COMPONENTS
import FormLabel from "../components/FormLabel";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

// COOKIE
import Cookies from "js-cookie";

const Signin = () => {
  // STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // HISTORY
  const history = useHistory();

  return (
    <main className="signin">
      <form
        onSubmit={async event => {
          event.preventDefault();

          const account = {
            email,
            password
          };

          const response = await axios.post(
            `${process.env.REACT_APP_GREEN_RATING_API}user/signin`,
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
      <div className="Signup">
        <Link to="/signup">Créer un compte</Link>
      </div>
    </main>
  );
};

export default Signin;
