import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";

import Header from "../../Sections/Header/index";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Line from "../../UI/Line/Line";

import Logo from "../../Assets/LogoColor.svg";

import { SIGNIN_TITLE } from "../../Data/Constants";
import { BORDER_INPUT, PRIMARY_COLOR } from "../../UI/Constants";

const PageWrapper = styled.div`
  width: 400px;
  margin: 48px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-device-width: 768px) {
    margin: 0;
    width: initial;
  }
`;
const FormWrapper = styled.form`
  width: 100%;
  /* min-height: 400px; */
  border-radius: 8px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  flex-flow: column;
  /* border: ${BORDER_INPUT}; */
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25),
    0px 15px 25px -11px rgba(0, 0, 0, 0.3);

  @media screen and (max-device-width: 480px) {
    box-shadow: none;
    padding: 20px 16px;
  }
`;
const LogoImage = styled.img`
  margin: 32px 0 24px 0;
  @media screen and (max-device-width: 480px) {
    margin: 0 0 24px 0;
  }
`;
const InputsBlock = styled.div`
  margin: 12px 0;
  width: 100%;
  /* display: flex;
  align-items: center;
  flex-flow: column; */
`;
const Title = styled.h2`
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
const Text = styled.p`
  font-size: 13px;
  text-align: center;
  line-height: 20px;
  margin: -2px 0 8px 0;
  width: 80%;
  @media screen and (max-device-width: 480px) {
    font-size: 14px;
    width: 90%;
    line-height: 22px;
    margin: 0 0 12px 0;
  }
`;
const RegistrationText = styled(Text)`
  margin: 12px 0 2px 0;
  font-size: 14px;
  color: ${PRIMARY_COLOR};
`;
const SmallText = styled.div`
  font-size: 14px;
  margin: -20px 0 28px 0;
  opacity: 0.5;
  text-align: center;
`;

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validateOnBlur: true,
    validationSchema: Yup.object({
      login: Yup.string()
        .min(4, "Введите больше 3 симловов")
        .required("Введите логин")
        .email("Введите корректную почту"),
      password: Yup.string()
        .min(5, "Введите больше 4 символов")
        .required("Введите пароль"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    document.title = SIGNIN_TITLE;
  }, []);

  return (
    <React.Fragment>
      <Header />
      <PageWrapper>
        <FormWrapper
          onSubmit={(event) => {
            event.preventDefault();
            formik.handleSubmit(event);
          }}
        >
          <Title>Авторизация</Title>
          <Text>
            Войдите в свой аккаунт SuperLearn, чтобы иметь больше возможностей
            сервиса
          </Text>
          <InputsBlock>
            <Input
              type="email"
              fixedWidth
              error={formik.touched.login && formik.errors.login}
              errorMessage={formik.touched.login && formik.errors.login}
              id="login"
              name="login"
              placeholder="superlearn@mail.ru"
              title="Логин"
              {...formik.getFieldProps("login")}
            />
            <Input
              fixedWidth
              margin="20px 0 0 0"
              error={formik.touched.password && formik.errors.password}
              errorMessage={formik.touched.password && formik.errors.password}
              placeholder="********"
              id="password"
              name="password"
              title="Пароль"
              type="password"
              {...formik.getFieldProps("password")}
            />
            <Button type="submit" margin="24px 0 0 0" fixedWidth primary>
              Войти
            </Button>
            <Link to="signup">
              <Button type="submit" margin="12px 0 0 0" fixedWidth simple>
                Создать аккаунт
              </Button>
            </Link>
          </InputsBlock>
          {/* <RegistrationText>
            <Link to="signup">Создать аккаунт</Link>
          </RegistrationText> */}
        </FormWrapper>
        <Link to="/">
          <LogoImage width="140" src={Logo} />
          <SmallText>Помогаем учиться</SmallText>
        </Link>
      </PageWrapper>
    </React.Fragment>
  );
};

export default SignIn;
