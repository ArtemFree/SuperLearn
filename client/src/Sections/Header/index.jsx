import React from "react";
import styled from "styled-components";
import Logo from "../../Assets/LogoColor.svg";
import { Link } from "react-router-dom";
import { ContainerFluid } from "../../UI/Helpers/Container";

import {
  WHITE,
  PRIMARY_COLOR,
  BASE_FONTSIZE,
  BORDER_INPUT,
} from "../../UI/Constants";

const LogoImage = styled.img``;
const HeaderWrapper = styled.div`
  background-color: ${WHITE};
  border-bottom: ${BORDER_INPUT};
  padding: 14px 0;

  @media screen and (max-width: 480px) {
    padding: 20px 0;
  } ;
`;
const HeaderBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;
const MenuLink = styled.li`
  color: ${PRIMARY_COLOR};
  font-size: ${BASE_FONTSIZE};
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <ContainerFluid>
        <HeaderBody>
          <Link style={{ display: "flex" }} to="/">
            <LogoImage src={Logo} />
          </Link>
          <Menu>
            <MenuLink>Выйти</MenuLink>
          </Menu>
        </HeaderBody>
      </ContainerFluid>
    </HeaderWrapper>
  );
};

export default Header;
