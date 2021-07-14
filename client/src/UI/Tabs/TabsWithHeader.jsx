import React from "react";
import styled from "styled-components";
// import Flex from "../Helpers/Flex";

import { PRIMARY_COLOR, BORDER_INPUT } from "../Constants";

const TabHeader = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-right: 48px;

  @media (max-width: 480px) {
    margin: 24px 0 6px 0;
    font-size: 20px;
  }
`;
const Tab = styled.div`
  font-size: 16px;
  margin-right: 48px;
  position: relative;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: ${PRIMARY_COLOR};
  }
  &:last-child {
    margin-right: 0;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -19px;
    display: ${(p) => (p.selected ? "flex" : "none")};
    height: 4px;
    width: 100%;
    background-color: ${PRIMARY_COLOR};
    border-radius: 4px 4px 0px 0px;
  }

  @media (max-width: 480px) {
    margin-right: 12px;
    font-size: 16px;
    &:after {
      content: "";
      bottom: -16px;
    }
  }
`;
const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 480px) {
    margin-top: 12px;
    justify-content: space-between;
    width: 100%;
    overflow-x: scroll;
    padding-bottom: 20px;
    margin-bottom: -21px;
    white-space: nowrap;
  }
`;
const TabsWrapper = styled.div`
  width: 100%;
  border-bottom: ${BORDER_INPUT};
  padding-bottom: 16px;
`;
const TabsContainerWrapper = styled.div`
  @media (max-width: 480px) {
    justify-content: space-between;
    width: 100%;
    padding-bottom: 17px;
    margin-bottom: -16px;
    overflow-y: hidden;
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: baseline;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const TabsWithHeader = ({ title, tabs, selected, setTab }) => {
  const currentTab = React.useRef(null);

  return (
    <>
      <TabsWrapper>
        <Flex baseline>
          <TabHeader>{title}</TabHeader>
          <TabsContainerWrapper>
            <TabsContainer>
              {tabs.map((tab, index) => {
                return (
                  <Tab
                    key={tab + index}
                    ref={index === selected ? currentTab : null}
                    onClick={() => setTab(index)}
                    selected={selected === index}
                  >
                    {tab}
                  </Tab>
                );
              })}
            </TabsContainer>
          </TabsContainerWrapper>
        </Flex>
      </TabsWrapper>
    </>
  );
};
