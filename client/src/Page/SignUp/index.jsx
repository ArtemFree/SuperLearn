import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";

import { connect } from "react-redux";
import { signup } from "../../Store/actions/actions";

import Header from "../../Sections/Header/index";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Line from "../../UI/Line/Line";
import Checkbox from "../../UI/Checkbox/index";

import Logo from "../../Assets/LogoColor.svg";

import { SIGNUP_TITLE } from "../../Data/Constants";
import { BORDER_INPUT, PRIMARY_COLOR } from "../../UI/Constants";

const PageWrapper = styled.div`
  width: 400px;
  margin: 48px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-device-width: 425px) {
    margin: 0;
    width: initial;
  }

  @media screen and (min-device-width: 425px) and (max-device-width: 768px) {
    margin: 12px auto 0 auto;
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

  @media screen and (max-device-width: 425px) {
    box-shadow: none;
    padding: 20px 16px;
  }
  @media screen and (min-device-width: 425px) and (max-device-width: 768px) {
    box-shadow: none;
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
  width: 90%;
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
const SmallText2 = styled(SmallText)`
  margin: 0 0 0 0;
  position: absolute;
  bottom: -6px;
  background-color: #fff;
  color: #969696;
  opacity: 1;
  width: 40px;
`;
const LineBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 18px 0;
`;

const SignUp = (props) => {
  const { signup } = props;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password2: "",
      remember: false,
      data: false,
    },
    validateOnBlur: true,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Представьтесь, пожалуйста")
        .matches(
          /^[а-яА-Я(ё|Ё)(\s)]+$/,
          "Укажите имя и фамилию на русском языке без цифр и служебных символов"
        ),
      email: Yup.string()
        .min(4, "Введите больше 3 симловов")
        .required("Введите адрес электронной почты")
        .email("Введите корректный адрес электронной почты"),
      password: Yup.string()
        .min(5, "Введите больше 4 символов")
        .required("Введите пароль"),
      password2: Yup.string()
        .required("Введите пароль")
        .test(
          "",
          "Пароли не сопадают",
          (v, s) => v === s.from[0].value.password
        ),
      remember: Yup.boolean(),
    }),
    onSubmit: (values) => {
      signup(values);
    },
  });

  useEffect(() => {
    document.title = SIGNUP_TITLE;
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
          <Title>Регистрация</Title>
          <Text>
            Создайте новый аккаунт в SuperLearn, чтобы иметь больше возможностей
            сервиса
          </Text>
          <InputsBlock>
            <Input
              type="text"
              fixedWidth
              error={formik.touched.name && formik.errors.name}
              errorMessage={formik.touched.name && formik.errors.name}
              id="name"
              name="name"
              placeholder="Иван Иванов"
              title="Имя и фамилия"
              {...formik.getFieldProps("name")}
            />
            <Input
              type="email"
              margin="20px 0 0 0"
              fixedWidth
              error={formik.touched.email && formik.errors.email}
              errorMessage={formik.touched.email && formik.errors.email}
              id="email"
              name="email"
              placeholder="superlearn@mail.ru"
              title="Адрес электронной почты"
              {...formik.getFieldProps("email")}
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
            <Input
              fixedWidth
              margin="20px 0 0 0"
              error={formik.touched.password2 && formik.errors.password2}
              errorMessage={formik.touched.password2 && formik.errors.password2}
              placeholder="********"
              id="password2"
              name="password2"
              title="Повторите пароль"
              type="password"
              {...formik.getFieldProps("password2")}
            />
            <Checkbox
              {...formik.getFieldProps("remember")}
              label="Запомнить меня"
            />
            <Button type="submit" margin="24px 0 0 0" fixedWidth primary>
              Зарегистрироваться
            </Button>
            <LineBlock>
              <SmallText2>или</SmallText2>
              <Line margin="0" />
            </LineBlock>
            <Link to="/signin">
              <Button type="submit" margin="0" fixedWidth secondary>
                Войти
              </Button>
            </Link>
          </InputsBlock>
        </FormWrapper>
        <Link to="/">
          <LogoImage width="140" src={Logo} />
          <SmallText>Помогаем учиться</SmallText>
        </Link>
      </PageWrapper>
    </React.Fragment>
  );
};

export default connect((state) => state, { signup })(SignUp);
