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
  SECONDARY_MOST_DARK_COLOR,
  RED,
  GREEN,
  BORDER_BUTTON_NEGATIVE,
  BORDER_BUTTON_POSITIVE,
  BORDER_INPUT,
  SECONDARY_COLOR,
  SECONDARY_DARK_COLOR,
} from "../Constants";

const ButtonWrapper = styled.button`
  font-size: ${BASE_FONTSIZE};
  font-weight: 500;
  border-radius: 4px;
  font-family: "Inter", sans-serif;
  user-select: none;
  padding: 10px 16px;
  transition: transform 0.1s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  max-height: 41px;

  @media (max-width: 480px) {
    padding: 16px 24px;
  }

  width: ${(p) => (p.fixedWidth ? "100%" : "")};

  cursor: ${(p) => (p.disabled ? "no-drop" : "pointer")};

  background-color: ${(p) => {
    if (p.primary) {
      return PRIMARY_COLOR;
    } else if (p.outline) {
      return WHITE;
    } else if (p.negative) {
      return RED;
    } else if (p.positive) {
      return GREEN;
    } else if (p.simple) {
      return WHITE;
    } else if (p.secondary) {
      return SECONDARY_COLOR;
    }
  }};

  color: ${(p) => {
    if (p.negative || p.positive || p.primary || p.secondary) {
      return WHITE;
    } else if (p.outline) {
      return PRIMARY_COLOR;
    }
  }};

  border: ${(p) => {
    if (p.primary) {
      return BORDER_BUTTON_PRIMARY;
    } else if (p.outline) {
      return BORDER_BUTTON_PRIMARY;
    } else if (p.negative) {
      return BORDER_BUTTON_NEGATIVE;
    } else if (p.positive) {
      return BORDER_BUTTON_POSITIVE;
    } else if (p.simple) {
      return BORDER_INPUT;
    } else if (p.secondary) {
      return BORDER_BUTTON_POSITIVE;
    }
  }};

  &:hover {
    background-color: ${(p) => {
      if (p.primary) {
        return PRIMARY_DARK_COLOR;
      } else if (p.outline) {
        return SECONDARY_DARK_COLOR;
      } else if (p.secondary) {
        return SECONDARY_DARK_COLOR;
      }
    }};
    border: ${(p) => {
      // if (p.simple) {
      //   return BORDER_BUTTON_PRIMARY;
      // }
    }};
    color: ${(p) => {
      // if (p.simple) {
      //   return WHITE;
      // }
    }};
  }

  &:active {
    outline: none;
    transform: scale(0.98);
    background-color: ${(p) => {
      if (p.primary) {
        return PRIMARY_MOST_DARK_COLOR;
      } else if (p.outline) {
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
  loading,
  simple,
  disabled = false,
  primary,
  secondary,
  negative,
  positive,
  fixedWidth,
  children,
  margin,
  style,
  outline,
}) => {
  return (
    <ButtonWrapper
      style={{ ...style, margin: margin }}
      simple={simple}
      disabled={disabled}
      onClick={loading ? () => 0 : onClick}
      fixedWidth={fixedWidth}
      negative={negative}
      positive={positive}
      outline={outline}
      secondary={secondary}
      primary={primary}
    >
      {/* {children} */}
      {loading ? <Loader /> : children}
    </ButtonWrapper>
  );
};

export default Button;
