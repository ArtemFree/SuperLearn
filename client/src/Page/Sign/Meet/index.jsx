import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";

import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../Store/actions/actions";

import Header from "../../../Sections/Header/index";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import Line from "../../../UI/Line/Line";
import Checkbox from "../../../UI/Checkbox/index";
import SearchSelect from "../../../UI/SearchSelect/SearchSelect";

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

const Meet = () => {
  const [loading, setLoading] = useState(false);

  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

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
      name: Yup.string()
        .required("Представьтесь, пожалуйста")
        .matches(
          /^[а-яА-Я(ё|Ё)(\s)]+$/,
          "Укажите имя и фамилию на русском языке без цифр и служебных знаков"
        ),
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
    },
  });

  useEffect(() => {
    document.title = SIGNUP_TITLE;
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
          <Title>Расскажите о себе</Title>
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
            <SearchSelect
              value={city}
              onChange={setCity}
              margin="20px 0 0 0"
              fixedWidth
              placeholder="Математика"
              title="Выберите предмет"
              list={["Математика", "Физика", "Русский язык"]}
            />
            <Button
              loading={loading}
              type="submit"
              margin="24px 0 0 0"
              fixedWidth
              primary
            >
              Продолжить
            </Button>
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
export default Meet;
