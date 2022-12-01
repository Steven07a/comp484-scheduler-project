import React, { useContext, useState } from "react";
import * as Components from "../components/Components"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [signIn, toggle] = React.useState(true);
  const [inputs, setInputs] = useState({
    user: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.user]: e.target.value,
    }));
  };

  // tries to log user in if there is an error return error message
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      // function to move us to another page
      navigate("/")
    } catch (err) {
      console.log(err.response.data);
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("singup is called");
    try {
      const res = await axios.post("http://localhost:3001/api/user/register", inputs);
      //console.log(res);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="text" placeholder="LostArk Username" name="User" onChange={handleChange} />
          <Components.Input type="email" placeholder="Email" name="email" onChange={handleChange} />
          <Components.Input type="password" placeholder="Password" name="password" onChange={handleChange} />
          <Components.Button onClick={handleSignUp}>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Login</Components.Title>
          <Components.Input type="email" placeholder="Email" name="email" onChange={handleChange} />
          <Components.Input type="password" placeholder="Password" name="password" onChange={handleChange} />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button onClick={handleSignIn}>Sign In</Components.Button>

        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title2>Your Static is Waiting for you.</Components.Title2>
            <Components.Paragraph>
              Make sure you got everyone food and drinks.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Log back in
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title2>Raid Finder and Scheduler</Components.Title2>
            <Components.Paragraph>
              Looking for your next Deathless Clear?
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up now
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default Login;