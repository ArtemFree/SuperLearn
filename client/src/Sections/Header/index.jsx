import React from "react";
import styled from "styled-components";
import Logo from "../../Assets/LogoColor.svg";
import { Link } from "react-router-dom";
import { ContainerFluid } from "../../UI/Helpers/Container";
import { mobile } from "../../App";
import MenuHamburgerIconImage from "../../Assets/menu_black_24dp.svg";
import MenuCloseIconImage from "../../Assets/close_black_24dp.svg";
import LogoutIconImage from "../../Assets/logout_black_24dp.svg";

import {
  WHITE,
  BLACK,
  PRIMARY_COLOR,
  BASE_FONTSIZE,
  BORDER_INPUT,
  GRAY2,
  RED,
} from "../../UI/Constants";

const LogoImage = styled.img``;
const HeaderWrapper = styled.div`
  background-color: ${WHITE};
  border-bottom: ${BORDER_INPUT};
  padding: 18px 0;

  @media screen and (max-width: 480px) {
    padding: 8px 0;
  } ;
`;
const HeaderBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MobileMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const MobileMenuElement = styled.li`
  color: ${PRIMARY_COLOR};
  font-size: 20px;
  padding: 16px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: ${GRAY2};
  }
`;
const NegativeMenuElement = styled(MobileMenuElement)`
  color: ${RED};
`;
const MobileMenuIcon = styled.img`
  padding: 8px;
`;
const MobileMenuWrapper = styled.div`
  height: calc(100% - 57px);
  overflow-y: scroll;
  width: 100%;
  background: ${WHITE};
  position: fixed;
  top: 57px;
  right: 0;
  z-index: 100;
`;
const Menu = styled.ul`
  display: flex;
`;
const MenuElement = styled.li`
  color: ${BLACK};
  font-size: 14px;
  padding: 4px 0;
  margin-right: 32px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: ${PRIMARY_COLOR};
  }
`;

const links = [
  {
    type: "simple",
    link: "/",
    text: "Главная",
  },
  {
    type: "simple",
    link: "/offer",
    text: "Заказать работу",
  },
  {
    type: "simple",
    link: "/cabinet",
    text: "Личный кабинет",
  },
  {
    type: "simple",
    link: "/about",
    text: "О компании",
  },
  {
    type: "simple",
    link: "/authors",
    text: "Авторам",
  },
  {
    type: "simple",
    link: "/offer",
    text: "Заказать работу",
  },
  {
    type: "negative",
    link: "/logout",
    text: "Выйти из системы",
  },
];

const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  React.useEffect(() => {
    if (mobileMenu) {
      document.querySelector("body").classList.add("noscroll");
    } else {
      document.querySelector("body").classList.remove("noscroll");
    }
  }, [mobileMenu]);

  return (
    <HeaderWrapper>
      <ContainerFluid>
        <HeaderBody>
          <Link style={{ display: "flex" }} to="/">
            <LogoImage src={Logo} />
          </Link>
          {!mobile && (
            <Menu>
              {links.map((link) => {
                if (link.type === "simple") {
                  return (
                    <MenuElement>
                      <Link to={link.link}>{link.text}</Link>
                    </MenuElement>
                  );
                }
              })}
            </Menu>
          )}
          {mobile && (
            <MobileMenuIcon
              onClick={() => setMobileMenu(!mobileMenu)}
              src={mobileMenu ? MenuCloseIconImage : MenuHamburgerIconImage}
            />
          )}
          {mobile && mobileMenu && (
            <MobileMenuWrapper>
              <MobileMenu>
                {links.map((link) => {
                  if (link.type === "simple") {
                    return (
                      <Link to={link.link}>
                        <MobileMenuElement>{link.text}</MobileMenuElement>
                      </Link>
                    );
                  } else if (link.type === "negative") {
                    return (
                      <Link to={link.link}>
                        <NegativeMenuElement>{link.text}</NegativeMenuElement>
                      </Link>
                    );
                  }
                })}
              </MobileMenu>
            </MobileMenuWrapper>
          )}
        </HeaderBody>
      </ContainerFluid>
    </HeaderWrapper>
  );
};

export default Header;
