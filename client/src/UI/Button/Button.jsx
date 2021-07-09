import React from "react";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import {
  PRIMARY_COLOR,
  WHITE,
  BORDER_BUTTON_PRIMARY,
  PRIMARY_DARK_COLOR,
  PRIMARY_MOST_DARK_COLOR,
  BASE_FONTSIZE,
  SECONDARY_DARK_COLOR,
  SECONDARY_MOST_DARK_COLOR,
  RED,
  GREEN,
  BORDER_BUTTON_NEGATIVE,
  BORDER_BUTTON_POSITIVE,
  BORDER_INPUT,
} from "../Constants";

const ButtonWrapper = styled.button`
  font-size: ${BASE_FONTSIZE};
  border-radius: 4px;
  font-family: "Inter", sans-serif;
  user-select: none;
  padding: 10px 16px;

  @media (max-width: 480px) {
    padding: 16px 24px;
  }

  width: ${(p) => (p.fixedWidth ? "100%" : "")};

  cursor: ${(p) => (p.disabled ? "no-drop" : "pointer")};

  background-color: ${(p) => {
    if (p.primary) {
      return PRIMARY_COLOR;
    } else if (p.secondary) {
      return WHITE;
    } else if (p.negative) {
      return RED;
    } else if (p.positive) {
      return GREEN;
    } else if (p.simple) {
      return WHITE;
    }
  }};

  color: ${(p) => {
    if (p.negative || p.positive || p.primary) {
      return WHITE;
    } else if (p.secondary) {
      return PRIMARY_COLOR;
    }
  }};

  border: ${(p) => {
    if (p.primary) {
      return BORDER_BUTTON_PRIMARY;
    } else if (p.secondary) {
      return BORDER_BUTTON_PRIMARY;
    } else if (p.negative) {
      return BORDER_BUTTON_NEGATIVE;
    } else if (p.positive) {
      return BORDER_BUTTON_POSITIVE;
    } else if (p.simple) {
      return BORDER_INPUT;
    }
  }};

  &:hover {
    background-color: ${(p) => {
      if (p.primary) {
        return PRIMARY_DARK_COLOR;
      } else if (p.secondary) {
        return SECONDARY_DARK_COLOR;
      } else if (p.simple) {
        return PRIMARY_COLOR;
      }
    }};
    border: ${(p) => {
      if (p.simple) {
        return BORDER_BUTTON_PRIMARY;
      }
    }};
    color: ${(p) => {
      if (p.simple) {
        return WHITE;
      }
    }};
  }

  &:active {
    outline: none;
    background-color: ${(p) => {
      if (p.primary) {
        return PRIMARY_MOST_DARK_COLOR;
      } else if (p.secondary) {
        return SECONDARY_MOST_DARK_COLOR;
      }
    }};
  }
  &:focus {
    outline: none;
  }
`;

const Button = ({
  title,
  onClick,
  isLoading,
  simple,
  disabled = false,
  primary,
  secondary,
  negative,
  positive,
  fixedWidth,
  children,
}) => {
  return (
    <ButtonWrapper
      simple={simple}
      disabled={disabled}
      onClick={onClick}
      fixedWidth={fixedWidth}
      negative={negative}
      positive={positive}
      secondary={secondary}
      primary={primary}
    >
      {children}
      {/* {isLoading ? <Loader /> : title} */}
    </ButtonWrapper>
  );
};

export default Button;
