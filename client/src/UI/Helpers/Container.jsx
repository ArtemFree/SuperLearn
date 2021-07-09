import React from "react";
import styled from "styled-components";

const PADDING = "48px";

const ContainerFluidWrapper = styled.div`
  padding-right: ${PADDING};
  padding-left: ${PADDING};

  @media (max-width: 480px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;

export function Container(props) {
  return <div className="container">{props.children}</div>;
}

export function ContainerFluid(props) {
  return (
    <ContainerFluidWrapper className="container-fluid">
      {props.children}
    </ContainerFluidWrapper>
  );
}
