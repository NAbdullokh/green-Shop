import React, { useState } from "react";
import { Container, Icon, Input, InputWrapper, Wrapper } from "./style";
import { Button } from "../../Generic/Button";
import google from "../../assets/icon/google.svg";
import facebook from "../../assets/icon/facebook2.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onClick = () => {
    fetch("https://futurecommunication.pythonanywhere.com/api/v1/user/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    }).then((res) => res.json().then((res) => navigate("/home")));
  };
  return (
    <Wrapper>
      <Container>
        <Container.Title>Login</Container.Title>
        <Container.Desc>
          Enter your username and password to login.
        </Container.Desc>
        <InputWrapper>
          <Input type="text" onChange={(e) => setUserName(e.target.value)} />
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Container.Forgot>Forgot ?</Container.Forgot>
          <Button width={"100%"} onClick={onClick}>
            Login
          </Button>

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
