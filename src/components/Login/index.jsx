import React from "react";
import { Container, Icon, Input, InputWrapper, Wrapper } from "./style";
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
        <InputWrapper>
          <Input type="text" />
          <Input type="password" />
          <Container.Forgot>Forgot ?</Container.Forgot>
          <Button width={"100%"}>Login</Button>

          <Container.Desc style={{ marginTop: "40px" }}>
            or Login with
          </Container.Desc>

          <Button type="social" width="100%" height="40px" mb="15" mt="27">
            <Icon src={google} />
            Google
          </Button>
          <Button type="social" width="100%" height="40px">
            <Icon src={facebook} />
            Facebook
          </Button>
        </InputWrapper>
      </Container>
    </Wrapper>
  );
};

export default Login;
