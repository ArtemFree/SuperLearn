import React from "react";
import styled from "styled-components";
import BG from "../../Assets/bg1.jpg";

import { BORDER_INPUT, PRIMARY_COLOR } from "../../UI/Constants";

export const Wrapper = styled.div`
  background-image: url(${BG});
  background-position: center;
  background-size: cover;
`;
export const PageWrapper = styled.div`
  width: 400px;
  margin: 48px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-device-width: 425px) {
    margin: 0;
    width: initial;
  }

  @media screen and (min-device-width: 426px) and (max-device-width: 768px) {
    margin: 12px auto 0 auto;
  }
`;
export const FormWrapper = styled.form`
  width: 100%;
  /* min-height: 400px; */
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  flex-flow: column;
  /* border: ${BORDER_INPUT}; */
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25),
    0px 15px 25px -11px rgba(0, 0, 0, 0.3);

  @media screen and (max-device-width: 425px) {
    box-shadow: none;
    padding: 20px 16px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  @media screen and (min-device-width: 425px) and (max-device-width: 768px) {
    box-shadow: none;
  }
`;
export const LogoImage = styled.img`
  margin: 32px 0 24px 0;
  @media screen and (max-device-width: 480px) {
    margin: 28px ​0 24px;
  }
`;
export const InputsBlock = styled.div`
  margin: 12px 0;
  width: 100%;

  @media screen and (max-device-width: 768px) {
    margin: 12px 0 0 0;
  }
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  margin: 8px 0;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 28px;
    margin: 14px 0 16px 0;
    line-height: 24px;
  }
`;
export const Text = styled.p`
  font-size: 13px;
  text-align: center;
  line-height: 20px;
  margin: -2px 0 8px 0;
  width: 90%;
  @media screen and (max-device-width: 480px) {
    font-size: 14px;
    width: 90%;
    line-height: 22px;
    margin: 0 0 12px 0;
  }
`;
export const Text2 = styled(Text)`
  width: 100%;
  margin: 20px 0 0 0;
  font-size: 12px;
  text-align: left;
`;
export const RegistrationText = styled(Text)`
  margin: 12px 0 2px 0;
  font-size: 14px;
  color: ${PRIMARY_COLOR};
`;
export const SmallText = styled.div`
  font-size: 14px;
  margin: -20px 0 28px 0;
  text-align: center;
  color: #fff;
`;
export const SmallText2 = styled(SmallText)`
  margin: 0 0 0 0;
  position: absolute;
  bottom: -6px;
  background-color: #fff;
  color: #969696;
  opacity: 1;
  width: 40px;
`;
export const LineBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 18px 0;
`;
