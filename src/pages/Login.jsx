import React from "react";
import ReactDOM from "react-dom";
import * as Components from "../components/Components"
import "../components/styles.css";
import { Link } from "react-router-dom";

function Login() {
  const [signIn, toggle] = React.useState(true);
  return (
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="text" placeholder="Name" />
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Login</Components.Title>
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button onClick={"/Home"}>Sign In</Components.Button>
        
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
function Home() {
    return (
      <>
        <div>Home</div>
        {/* shows how to link to different webpages refrences index.js to find the pages */}
        <Link to={"/Test"}>go to test page</Link>
      </>
    );
  }
<Link to={"/Test"}>go to test page</Link>
const rootElement = document.getElementById("root");
ReactDOM.render(<Login />, rootElement);


export default Login;
