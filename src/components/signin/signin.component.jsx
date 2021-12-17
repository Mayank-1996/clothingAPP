import React, { Component } from "react";
import FormInput from "../form-input/forminput.component";
import CustomButton from "../custom-button/custombutton.component";
import "./signin.styles.scss";
// import { signInWithGoogle } from "../../firebase/firebase.utils";
// import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    const { googleSignInStart } = this.props;

    return (
      <div className="sign-in">
        <h1>I Already have an account </h1>
        <span>Sign In with email and Password</span>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <FormInput
            type="email"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
            label="email"
          />

          <FormInput
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
            label="password"
          />
          <div className="buttons">
            {" "}
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              isGoogleSignIn
              onClick={() => googleSignInStart()}
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
