import React, { useState } from "react";
import styled from "styled-components";

import CheckBoxBlankIcon from "../../Assets/check_box_outline_blank_24dp.svg";
import CheckBoxIcon from "../../Assets/check_box_24dp.svg";

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: ${(p) => (p.margin ? p.margin : "12px 0 12px 0")};
`;
const CheckboxImage = styled.img`
  width: 24px;
  height: 24px;
  user-select: none;
`;
const Label = styled.span`
  font-size: 15px;
  margin-left: 6px;
  user-select: none;
`;

const Checkbox = ({ value, onChange, label, margin, id, name }) => {
  return (
    <Wrapper onClick={onChange}>
      <input type="checkbox" id={id} name={name} style={{ display: "none" }} />
      <CheckboxImage src={value ? CheckBoxIcon : CheckBoxBlankIcon} />
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default Checkbox;
