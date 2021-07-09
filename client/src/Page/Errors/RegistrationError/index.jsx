import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Header from "../../../Sections/Header/index";
import Button from "../../../UI/Button/Button";
import invite from "../../../Assets/invite.svg";
import Logo from "../../../Assets/LogoColor.svg";

const ErrorWrapper = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Head = styled.h2`
  text-align: center;
  margin: 12px 0;
`;
const Text = styled.p`
  text-align: center;
  margin: 2px 0 20px 0;
  width: 40%;
  line-height: 28px;
`;
const ErrorImage = styled.img`
  margin: 0 0 16px 0;
  border-radius: 6px;
`;
const LogoWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LogoLabel = styled.div`
  font-size: 12px;
  opacity: 0.8;
  margin-top: 6px;
`;

const RegistrationError = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ErrorWrapper>
              <ErrorImage width="400px" src={invite} />
              <Head>Станьте автором</Head>
              <Text>Пройдите по ссылке ниже и заполните анкету о себе</Text>
              <Button primary>Заполнить анкету</Button>
              <Link to="/">
                <LogoWrapper>
                  <img src={Logo} />
                  <LogoLabel>Сервис для помощи студентам</LogoLabel>
                </LogoWrapper>
              </Link>
            </ErrorWrapper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegistrationError;
