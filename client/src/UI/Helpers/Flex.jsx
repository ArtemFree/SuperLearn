import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${(p) => {
    if (p.spaceBetween) return "space-between";
  }};
  width: ${(p) => {
    if (p.fullWidth) return "100%";
  }};
  align-items: ${(p) => {
    if (p.alignItemsCenter) return "center";
    else if (p.baseline) return "baseline";
    else return "";
  }};

  @media (max-width: 480px) {
    flex-direction: ${(p) => (p.mobileColumn ? "column" : "")};
  }
`;

export default Flex;
