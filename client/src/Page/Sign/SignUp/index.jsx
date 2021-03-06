import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";

import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../Store/actions/actions";

import Header from "../../../Sections/Header/index";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import Line from "../../../UI/Line/Line";
import Checkbox from "../../../UI/Checkbox/index";

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

import Logo from "../../../Assets/LogoWhite.svg";

import { SIGNUP_TITLE } from "../../../Data/Constants";
import { BORDER_INPUT, PRIMARY_COLOR } from "../../../UI/Constants";

const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password2: "",
    },
    isValid: false,
    validateOnBlur: true,
    validationSchema: Yup.object({
      // name: Yup.string()
      //   .required("Представьтесь, пожалуйста")
      //   .matches(
      //     /^[а-яА-Я(ё|Ё)(\s)]+$/,
      //     "Укажите имя и фамилию на русском языке без цифр и служебных знаков"
      //   ),
      email: Yup.string()
        .min(4, "Введите больше 3 знаков")
        .required("Введите адрес электронной почты")
        .email("Введите корректный адрес электронной почты"),
      password: Yup.string()
        .min(5, "Введите больше 4 знаков")
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
      dispatch(signup(values));
      history.push("/email-code");
    },
  });

  useEffect(() => {
    document.title = SIGNUP_TITLE;

    const onEnterHandler = (event) => {
      if (event.key === "Enter") {
        // formik.handleSubmit(event);
      }
    };

    document.addEventListener("keydown", (event) => onEnterHandler(event));

    return () => {
      document.removeEventListener("keydown", (event) => onEnterHandler(event));
    };
  }, []);

  return (
    <Wrapper>
      {/* <Header /> */}
      <PageWrapper>
        <FormWrapper
          onSubmit={(event) => {
            event.preventDefault();
            formik.handleSubmit(event);
            if (formik.isValid) {
              // setLoading(true);
              setTimeout(() => setLoading(false), 3000);
            }
          }}
        >
          <Title>Регистрация</Title>
          <Text>
            Создайте новый аккаунт в SuperLearn, чтобы иметь больше возможностей
            сервиса
          </Text>
          <InputsBlock>
            {/* <Input
              type="text"
              fixedWidth
              error={formik.touched.name && formik.errors.name}
              errorMessage={formik.touched.name && formik.errors.name}
              id="name"
              name="name"
              placeholder="Иван Иванов"
              title="Имя и фамилия"
              {...formik.getFieldProps("name")}
            /> */}
            <Input
              type="email"
              margin="0 0 0 0"
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
              label="Введите пароль больше 4 знаков"
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
            <Text2>
              Продолжая регистрацию, вы соглашаетесь на обработку персональных
              данных и принимаете Правила сервиса
            </Text2>
            <Button
              loading={loading}
              type="submit"
              margin="24px 0 0 0"
              fixedWidth
              primary
            >
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
    </Wrapper>
  );
};

// export default connect((state) => state, { signup })(SignUp);
export default SignUp;
