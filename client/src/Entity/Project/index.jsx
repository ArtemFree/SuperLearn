import React from "react";
import styled from "styled-components";
import {
  BORDER_INPUT,
  BLACK,
  PRIMARY_COLOR,
  GREEN_MONEY,
  BORDER_BUTTON_PRIMARY,
} from "../../UI/Constants";
import Button from "../../UI/Button/Button";

import { Link } from "react-router-dom";

const ProjectWrapper = styled.div`
  border: ${BORDER_INPUT};
  padding: 20px;
  border-radius: 6px;
  width: 30%;
  transition: box-shadow 0.2s ease, border 0.2s ease;
  &:not(:last-child) {
    margin-right: 12px;
  }
  &:hover {
    /* box-shadow: 0 6px 19px rgb(0 0 0 / 16%); */
    /* box-shadow: 0 27px 31px rgb(0 0 0 / 9%), 0 0px 2px rgb(0 0 0 / 13%); */
    box-shadow: 0 20px 36px rgb(0 0 0 / 15%), 0 0 3px rgb(0 0 0 / 8%);
    border: 1px solid transparent;
  }
  @media (max-width: 480px) {
    width: 100%;
    padding: 16px 20px 16px 20px;
    &:not(:first-child) {
      margin-top: 12px;
    }
    &:hover {
      box-shadow: none;
      border: ${BORDER_BUTTON_PRIMARY};
    }
  }
`;
const Header = styled.h2`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: ${BLACK};
  margin: 0;
  cursor: pointer;
  &:hover {
    color: ${PRIMARY_COLOR};
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
const Subject = styled.div`
  opacity: 1;
  font-size: 13px;
  color: ${BLACK};
  margin-top: 6px;
  @media (max-width: 480px) {
    margin-top: 6px;
    line-height: 18px;
  }
`;
const Topic = styled.div`
  font-size: 16px;
  margin-top: 16px;
  line-height: 24px;
  color: ${BLACK};

  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 28px;
    margin-top: 20px;
  }
`;
export const Stats = styled.div`
  margin-top: 16px;
  display: flex;
  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;
export const Stat = styled.div`
  &:not(:first-child) {
    margin-top: 20px;
  }
`;
export const StatHeader = styled.div`
  font-size: 11px;
  color: ${BLACK};
`;
export const StatContent = styled.div`
  font-size: 16px;
  color: ${BLACK};
  margin-top: 4px;
  @media (max-width: 480px) {
    white-space: nowrap;
  }
`;
export const StatRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const StatColumn = styled.div`
  margin-right: 32px;
`;
export const Payment = styled.span`
  font-weight: 500;
  color: ${GREEN_MONEY};
`;
const ButtonBlock = styled.div`
  margin-top: 20px;
`;

const rouble = "???";

const Project = ({
  id,
  type,
  subject,
  topic,
  pages,
  remaining,
  originality,
  sources,
  payment,
}) => {
  return (
    <ProjectWrapper>
      <Link to={`/project/${id}`}>
        <Header>{type}</Header>
      </Link>
      <Subject>{subject}</Subject>
      <Topic>{topic}</Topic>
      <Stats>
        <StatColumn>
          <Stat>
            <StatHeader>??????????????</StatHeader>
            <StatContent>{pages}</StatContent>
          </Stat>
          <Stat>
            <StatHeader>????????????????????</StatHeader>
            <StatContent>{sources}</StatContent>
          </Stat>
        </StatColumn>
        <StatColumn>
          <Stat>
            <StatHeader>????????</StatHeader>
            <StatContent>{remaining}</StatContent>
          </Stat>
          <Stat>
            <StatHeader>????????????</StatHeader>
            <StatContent>
              <Payment>
                {payment} {rouble}
              </Payment>
            </StatContent>
          </Stat>
        </StatColumn>
        <StatColumn>
          <Stat>
            <StatHeader>????????????????????????????</StatHeader>
            <StatContent>{originality}</StatContent>
          </Stat>
        </StatColumn>
      </Stats>
      <ButtonBlock>
        <Link to={`/project/${id}`}>
          <Button simple fixedWidth>
            ??????????????????
          </Button>
        </Link>
      </ButtonBlock>
    </ProjectWrapper>
  );
};

export default Project;
