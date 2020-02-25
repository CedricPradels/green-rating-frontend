// REACT
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

// CSS
import "./Signin.css";

// AXIOS
import axios from "axios";

// COMPONENTS
import FormLabel from "../components/FormLabel";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import FormGroup from "../components/FormGroup";
import Form from "../components/Form";

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
      <Form
        title="Connexion"
        callback={async event => {
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
            Cookies.set("greenRatingToken", token, { expires: 1 });
            history.push("/grades");
          } else {
            setEmail("");
            setPassword("");
          }
        }}
      >
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

        <FormButton type="submit" text="S'enregistrer"></FormButton>
      </Form>
      <div className="Signup">
        <Link to="/signup">Créer un compte</Link>
      </div>
    </main>
  );
};

export default Signin;
