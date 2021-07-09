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
`;
const Subject = styled.div`
  opacity: 1;
  font-size: 13px;
  color: ${BLACK};
  margin-top: 6px;
`;
const Topic = styled.div`
  font-size: 16px;
  margin-top: 16px;
  line-height: 24px;
  color: ${BLACK};
`;
const Stats = styled.div`
  margin-top: 16px;
  display: flex;
`;
const Stat = styled.div`
  &:not(:first-child) {
    margin-top: 20px;
  }
`;
const StatHeader = styled.div`
  font-size: 11px;
  color: ${BLACK};
`;
const StatContent = styled.div`
  font-size: 16px;
  color: ${BLACK};
  margin-top: 4px;
`;
const StatRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const StatColumn = styled.div`
  margin-right: 32px;
`;
const Payment = styled.span`
  font-weight: 500;
  color: ${GREEN_MONEY};
`;
const ButtonBlock = styled.div`
  margin-top: 20px;
`;

const rouble = "₽";

const Project = ({
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
      <Header>{type}</Header>
      <Subject>{subject}</Subject>
      <Topic>{topic}</Topic>
      <Stats>
        <StatColumn>
          <Stat>
            <StatHeader>Страниц</StatHeader>
            <StatContent>{pages}</StatContent>
          </Stat>
          <Stat>
            <StatHeader>Источников</StatHeader>
            <StatContent>{sources}</StatContent>
          </Stat>
        </StatColumn>
        <StatColumn>
          <Stat>
            <StatHeader>Срок</StatHeader>
            <StatContent>{remaining}</StatContent>
          </Stat>
          <Stat>
            <StatHeader>Оплата</StatHeader>
            <StatContent>
              <Payment>
                {payment} {rouble}
              </Payment>
            </StatContent>
          </Stat>
        </StatColumn>
        <StatColumn>
          <Stat>
            <StatHeader>Оригинальность</StatHeader>
            <StatContent>{originality}</StatContent>
          </Stat>
        </StatColumn>
      </Stats>
      <ButtonBlock>
        <Button simple fixedWidth>
          Подробнее
        </Button>
      </ButtonBlock>
    </ProjectWrapper>
  );
};

export default Project;
