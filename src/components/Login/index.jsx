import React from "react";
import { Container, Icon, Input, Wrapper } from "./style";
import { Button } from "../../Generic/Button";
import google from "../../assets/icon/google.svg";
import facebook from "../../assets/icon/facebook2.svg";

const Login = () => {
  return (
    <Wrapper>
      <Container>
        <Container.Title>Login</Container.Title>
        <Container.Desc>
          Enter your username and password to login.
        </Container.Desc>
        <Input type="text" />
        <Input type="password" />
        <Container.Forgot>Forgot ?</Container.Forgot>
        <Button width={"70%"}>Login</Button>
        <div className="line">
          <div className="lines"></div>

          <Container.Desc style={{ marginTop: "10px" }}>
            or Login with
          </Container.Desc>
          <div className="lines"></div>
        </div>
        <Button type="social" width="70%" height="40px" mb="15" mt="27">
          <Icon src={google} />
          Google
        </Button>
        <Button type="social" width="70%" height="40px">
          <Icon src={facebook} />
          Facebook
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Login;
