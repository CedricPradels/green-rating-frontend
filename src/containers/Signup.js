// REACT
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// SIGNUP
import "./Signup.css";

// AXIOS
import axios from "axios";

// COMPONENTS
import FormLabel from "../components/FormLabel";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import FormGroup from "../components/FormGroup";
import Form from "../components/Form";

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
      <Form
        title="Créer un compte"
        callback={async event => {
          event.preventDefault();
          const account = {
            email,
            password,
            firstName,
            lastName
          };

          if (password === confirm) {
            const response = await axios.post(
              `${process.env.REACT_APP_GREEN_RATING_API}user/signup`,
              account
            );

            if (response.status === 200) {
              history.push("/");
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
        <FormGroup>
          <FormLabel text="Prénom" id="firstname"></FormLabel>
          <FormInput
            state={firstName}
            setState={setFirstName}
            id="firsname"
            placeholder="Clémence"
            type="text"
          ></FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel text="Nom" id="lastname"></FormLabel>
          <FormInput
            state={lastName}
            setState={setLastName}
            id="lastname"
            placeholder="Koenig"
            type="text"
          ></FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel text="Email" id="email"></FormLabel>
          <FormInput
            state={email}
            setState={setEmail}
            id="email"
            placeholder="prof@steiner.edu"
            type="email"
          ></FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel text="Mot de passe" id="password"></FormLabel>
          <FormInput
            state={password}
            setState={setPassword}
            id="password"
            placeholder="password"
            type="password"
          ></FormInput>
        </FormGroup>

        <FormGroup>
          <FormLabel text="Confirmer mot de passe" id="confirm"></FormLabel>
          <FormInput
            state={confirm}
            setState={setConfirm}
            id="confirm"
            placeholder="password"
            type="password"
          ></FormInput>
        </FormGroup>

        <FormButton type="submit" text="Créer un compte"></FormButton>
      </Form>
    </main>
  );
};

export default Signup;
