import React from "react";
import {
  Container,
  Wrapper,
  SocialMedia,
  IconWrapper,
  MediaWrapper,
} from "./style.js";
import facebook from "../../../assets/icon/facebook.svg";
import instagram from "../../../assets/icon/instagram.svg";
import twitter from "../../../assets/icon/twitter.svg";
import linkedin from "../../../assets/icon/linkedin.svg";
import youtube from "../../../assets/icon/youtube.svg";
import pay from "../../../assets/img/pay.png";

const ThirdFooter = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Title>My Account</Wrapper.Title>
        <Wrapper.Item className="footerItem">My Account</Wrapper.Item>
        <Wrapper.Item className="footerItem">Our Stories</Wrapper.Item>
        <Wrapper.Item className="footerItem">Contact Us</Wrapper.Item>
        <Wrapper.Item className="footerItem">Career</Wrapper.Item>
        <Wrapper.Item className="footerItem">Specials</Wrapper.Item>
      </Wrapper>

      <Wrapper>
        <Wrapper.Title>Help & Guide</Wrapper.Title>
        <Wrapper.Item className="footerItem">Help Center</Wrapper.Item>
        <Wrapper.Item className="footerItem">How to Buy</Wrapper.Item>
        <Wrapper.Item className="footerItem">Shipping & Delivery</Wrapper.Item>
        <Wrapper.Item className="footerItem">Product Policy</Wrapper.Item>
        <Wrapper.Item className="footerItem">How to Return</Wrapper.Item>
      </Wrapper>

      <Wrapper>
        <Wrapper.Title>Categories</Wrapper.Title>
        <Wrapper.Item className="footerItem">House Plants</Wrapper.Item>
        <Wrapper.Item className="footerItem">Potter Plants</Wrapper.Item>
        <Wrapper.Item className="footerItem">Seeds</Wrapper.Item>
        <Wrapper.Item className="footerItem">Small Plants</Wrapper.Item>
        <Wrapper.Item className="footerItem">Accessories</Wrapper.Item>
      </Wrapper>

      <SocialMedia>
        <Wrapper.Title>Social Media</Wrapper.Title>
        <MediaWrapper>
          <IconWrapper>
            <IconWrapper.Icons src={facebook} />
          </IconWrapper>

          <IconWrapper>
            <IconWrapper.Icons src={instagram} />
          </IconWrapper>

          <IconWrapper>
            <IconWrapper.Icons src={twitter} />
          </IconWrapper>

          <IconWrapper>
            <IconWrapper.Icons src={linkedin} />
          </IconWrapper>

          <IconWrapper>
            <IconWrapper.Icons src={youtube} />
          </IconWrapper>
        </MediaWrapper>

        <Wrapper.Title>We accept</Wrapper.Title>
        <img src={pay} alt="" />
      </SocialMedia>
    </Container>
  );
};

export default ThirdFooter;
