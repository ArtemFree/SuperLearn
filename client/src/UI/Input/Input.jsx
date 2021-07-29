import React from "react";
import styled from "styled-components";
import {
  BORDER_BUTTON_PRIMARY,
  BORDER_INPUT,
  BASE_FONTSIZE,
  INPUT_TITLE_FONTSIZE,
  INPUT_LABEL_FONTSIZE,
  BLACK,
  INPUT_LABEL_COLOR,
  BORDER_INPUT_ERROR,
  RED,
} from "../Constants";

const InputWrapper = styled.input`
  font-size: 16px;
  width: ${(p) => (p.fixedWidth ? "100%" : "initial")};
  padding: 12px 14px;
  border-radius: 4px;
  border: ${(p) => {
    if (p.error) return BORDER_INPUT_ERROR;
    else return BORDER_INPUT;
  }};
  font-family: "Inter", sans-serif;

  &:focus {
    outline: 0;
    border: ${BORDER_BUTTON_PRIMARY};
  }

  &:hover {
    outline: 0;
    border: ${BORDER_BUTTON_PRIMARY};
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 16px 14px;
    width: ${(p) => (p.fixedWidth ? "100%" : "initial")};
  }
`;

const Title = styled.div`
  font-size: ${INPUT_TITLE_FONTSIZE};
  color: ${(p) => {
    if (p.error) return RED;
    else return BLACK;
  }};
  margin-bottom: 6px;
`;

const Label = styled.div`
  font-size: ${INPUT_LABEL_FONTSIZE};
  color: ${(p) => {
    if (p.error) return RED;
    else return INPUT_LABEL_COLOR;
  }};
  margin-top: 4px;
`;

const ErrorLabel = styled.div`
  font-size: ${INPUT_LABEL_FONTSIZE};
  color: ${RED};
  margin-top: 4px;
`;

const Wrapper = styled.div``;

const Input = ({
  title,
  onFocus,
  onBlur,
  label,
  placeholder,
  error,
  errorMessage,
  type,
  name,
  value,
  onChange,
  fixedWidth,
  margin,
}) => {
  const input = React.useRef(null);
  return (
    <Wrapper style={{ margin: margin ?? "0" }}>
      {title && (
        <Title error={error} onClick={() => input.current.focus()}>
          {title}
        </Title>
      )}
      <InputWrapper
        fixedWidth={fixedWidth}
        error={error}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        ref={input}
        name={name}
        spellCheck="false"
        autoCorrect="false"
        autoComplete="false"
        placeholder={placeholder}
        type={type}
      />
      {label && !errorMessage && <Label error={error}>{label}</Label>}
      {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
    </Wrapper>
  );
};

export default Input;
