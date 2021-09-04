import React, { useEffect, useState, useRef } from "react";
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
  InputsBlock2,
  ErrorMessage,
  TimerText,
} from "../Components";

const DEFAULT_TIMER_SECONDS = 60;

const EmailCode = () => {
  let resendTimer = useRef(0);
  
  const [timerNumber, setTimerNumber] = useState(DEFAULT_TIMER_SECONDS);
  const [timerText, setTimerText] = useState("1:00");

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validateOnBlur: false,
    validationSchema: Yup.object({
      code: Yup.number("").required("Введите код подтверждения"),
    }),
    onSubmit: (values) => {
      dispatch({ type: "EMAIL_CODE", payload: values.code });
      history.push("/meet");
    },
  });

  useEffect(() => {
    if (timerNumber === 0) {
      setTimerNumber(DEFAULT_TIMER_SECONDS);
      dispatch({ type: "EMAIL_CODE_RESEND_STOP" });
      clearInterval(resendTimer.current);
    }
  }, [timerNumber]);

  useEffect(() => {
    document.title = SIGNIN_TITLE;

    return () => {
      clearInterval(resendTimer.current);
    };
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
          <Title>Введите код подтверждения</Title>
          <Text>
            Мы отправили вам четырёхзначный код, который нужно ввести в поле
            ниже. Если вам не пришел код, проверьте его в папке "Спам"
          </Text>
          <InputsBlock>
            <Input
              type="number"
              maxlength={4}
              fixedWidth
              error={formik.touched.code && formik.errors.code}
              errorMessage={formik.touched.code && formik.errors.code}
              id="code"
              name="code"
              placeholder="0000"
              title="Код подтверждения"
              {...formik.getFieldProps("code")}
            />
            <Button type="submit" margin="24px 0 0 0" fixedWidth primary>
              Продолжить
            </Button>
            {state.codeResended ? (
              <TimerText>
                Отправить повторно через{" "}
                {timerNumber === 60 ? "1:00" : "0:" + timerNumber}
              </TimerText>
            ) : (
              <Button
                margin="8px 0 0 0"
                onClick={() => {
                  dispatch({ type: "EMAIL_CODE_RESEND" });
                  resendTimer.current = setInterval(
                    () => setTimerNumber((prev) => prev - 1),
                    1000
                  );
                }}
                fixedWidth
                textButton
              >
                Отправить код ещё раз
              </Button>
            )}
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

export default EmailCode;
