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
  PageWrapperBig,
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
  // FlexRow,
} from "../Components";

import Logo from "../../../Assets/LogoWhite.svg";

import { SIGNUP_TITLE } from "../../../Data/Constants";
import { BORDER_INPUT, PRIMARY_COLOR } from "../../../UI/Constants";

const FlexRow = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

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
        .required("Укажите имя")
        .matches(
          /^[а-яА-Я(ё|Ё)(\s)]+$/,
          "Имя должно быть на русском языке, без цифр и служебных знаков"
        ),
      secondName: Yup.string()
        .required("Укажите фамилию")
        .matches(
          /^[а-яА-Я(ё/Ё)(\s)]+$/,
          "Фамилия должна быть на русском языке, без цифр и служебных знаков"
        ),
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
      <PageWrapperBig>
        <FormWrapper
          onSubmit={(event) => {
            event.preventDefault();
            formik.handleSubmit(event);
          }}
        >
          <Title>Расскажите о себе</Title>
          {/* <Text>
            Создайте новый аккаунт в SuperLearn, чтобы иметь больше возможностей
            сервиса
          </Text> */}
          <InputsBlock>
            <FlexRow>
              <Input
                type="text"
                fixedWidth
                margin="0 8px 0 0"
                error={formik.touched.name && formik.errors.name}
                errorMessage={formik.touched.name && formik.errors.name}
                id="name"
                name="name"
                placeholder="Иван"
                title="Имя *"
                {...formik.getFieldProps("name")}
              />
              <Input
                type="text"
                fixedWidth
                error={formik.touched.secondName && formik.errors.secondName}
                errorMessage={
                  formik.touched.secondName && formik.errors.secondName
                }
                id="secondName"
                name="secondName"
                placeholder="Иванов"
                title="Фамилия *"
                {...formik.getFieldProps("secondName")}
              />
            </FlexRow>
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
      </PageWrapperBig>
    </Wrapper>
  );
};

// export default connect((state) => state, { signup })(SignUp);
export default Meet;
