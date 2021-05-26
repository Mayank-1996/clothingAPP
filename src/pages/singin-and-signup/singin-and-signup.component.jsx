import React from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
import "./sign-and-signup.styles.scss";

export default function SignInSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}
