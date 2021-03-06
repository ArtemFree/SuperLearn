import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

import Header from "../../../Sections/Header/index";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import Line from "../../../UI/Line/Line";
import SearchSelect from "../../../UI/SearchSelect/SearchSelect";

import LogoWhite from "../../../Assets/LogoWhite.svg";

import { SIGNIN_TITLE } from "../../../Data/Constants";

import {
  Wrapper,
  PageWrapper,
  FormWrapper,
  LogoImage,
  InputsBlock,
  Title,
  Text,
  Text2,
  RegistrationText,
  SmallText,
  SmallText2,
  LineBlock,
} from "../Components";

const SignIn = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validateOnBlur: false,
    validationSchema: Yup.object({
      login: Yup.string()
        .min(4, "Введите больше 3 знаков")
        .required("Введите логин")
        .email("Введите корректную почту"),
      password: Yup.string()
        .min(5, "Введите больше 4 знаков")
        .required("Введите пароль"),
    }),
    onSubmit: (values) => {
      dispatch({ type: "SIGN_IN", payload: { ...values } });
    },
  });

  useEffect(() => {
    document.title = SIGNIN_TITLE;
  }, []);

  return (
    <Wrapper>
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
            <Button type="submit" margin="24px 0 0 0" fixedWidth primary>
              Войти
            </Button>
            <LineBlock>
              <SmallText2>или</SmallText2>
              <Line margin="0" />
            </LineBlock>
            <Link to="signup">
              <Button type="submit" margin="0 0 0 0" fixedWidth secondary>
                Создать аккаунт
              </Button>
            </Link>
          </InputsBlock>
        </FormWrapper>
        <Link to="/">
          <LogoImage width="140" src={LogoWhite} />
          <SmallText>Помогаем учиться</SmallText>
        </Link>
      </PageWrapper>
    </Wrapper>
  );
};

export default SignIn;
