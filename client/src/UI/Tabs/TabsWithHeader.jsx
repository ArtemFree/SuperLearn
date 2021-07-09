import React from "react";
import styled from "styled-components";
import Flex from "../Helpers/Flex";

import { PRIMARY_COLOR, BORDER_INPUT } from "../Constants";

const TabHeader = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-right: 48px;
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
`;
const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const TabsWrapper = styled.div`
  width: 100%;
  border-bottom: ${BORDER_INPUT};
  padding-bottom: 16px;
`;

export const TabsWithHeader = ({ title, tabs, selected, setTab }) => {
  return (
    <>
      <TabsWrapper>
        <Flex baseline>
          <TabHeader>{title}</TabHeader>
          <TabsContainer>
            {tabs.map((tab, index) => {
              return (
                <Tab
                  onClick={() => setTab(index)}
                  selected={selected === index}
                >
                  {tab}
                </Tab>
              );
            })}
          </TabsContainer>
        </Flex>
      </TabsWrapper>
    </>
  );
};
