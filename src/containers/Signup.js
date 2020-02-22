// REACT
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// AXIOS
import axios from "axios";

// COMPONENTS
import FormLabel from "../components/FormLabel";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

const Signup = () => {
  // STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  // HISTORY
  const history = useHistory();

  return (
    <main className="signup">
      <form
        onSubmit={async event => {
          event.preventDefault();

          const account = {
            email,
            password,
            firstName,
            lastName
          };

          if (password === confirm) {
            console.log(`${process.env.REACT_APP_GREEN_RATING_API}user/signup`);
            const response = await axios.post(
              `${process.env.REACT_APP_GREEN_RATING_API}user/signup`,
              account
            );
            if (response.status === 200) {
              //history.push("/classes");
            } else {
              setEmail("");
              setPassword("");
              setConfirm("");
            }
          } else {
            setPassword("");
            setConfirm("");
          }
        }}
      >
        <FormLabel text="Prénom" id="firstname"></FormLabel>
        <FormInput
          state={firstName}
          setState={setFirstName}
          id="firsname"
          placeholder="Clémence"
          type="text"
        ></FormInput>

        <FormLabel text="Nom" id="lastname"></FormLabel>
        <FormInput
          state={lastName}
          setState={setLastName}
          id="lastname"
          placeholder="Koenig"
          type="text"
        ></FormInput>

        <FormLabel text="Email" id="email"></FormLabel>
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

        <FormLabel text="Confirmer mot de passe" id="confirm"></FormLabel>
        <FormInput
          state={confirm}
          setState={setConfirm}
          id="confirm"
          placeholder="password"
          type="password"
        ></FormInput>

        <FormButton type="submit" text="Créer un compte"></FormButton>
      </form>
    </main>
  );
};

export default Signup;
