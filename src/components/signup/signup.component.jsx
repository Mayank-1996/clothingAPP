import React, { useState } from "react";
import CustomButton from "../custom-button/custombutton.component";
import FormInput from "../form-input/forminput.component";
import "./signup.styles.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

export default function SignUp() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleChange(e) {
    const { value, name } = e.target;
    console.log([name][0]);
    switch ([name][0]) {
      case "email":
        setEmail(value);
        break;
      case "displayName":
        setDisplayName(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
    }
  }

  async function submitForm(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      setConfirmPassword("");
      setDisplayName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="sign-up">
      <form action="" onSubmit={(e) => submitForm(e)}>
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <FormInput
          type="text"
          value={displayName}
          name="displayName"
          onChange={(e) => handleChange(e)}
          label="Display Name"
        />
        <FormInput
          type="email"
          value={email}
          name="email"
          onChange={(e) => handleChange(e)}
          label="Email"
        />
        <FormInput
          type="password"
          value={password}
          name="password"
          onChange={(e) => handleChange(e)}
          label="Password"
        />
        <FormInput
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={(e) => handleChange(e)}
          label="Confirm Password"
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
}
