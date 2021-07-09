import React from "react";
import styled from "styled-components";
import { GRAY } from "../Constants";

const LineElement = styled.div`
  height: 1px;
  background-color: ${GRAY};
  width: 100%;
  margin: ${(p) => p.margin || "10px 0px"};
`;

const Line = ({ margin }) => {
  return <LineElement margin={margin} />;
};

export default Line;
