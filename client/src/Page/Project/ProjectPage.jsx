import React from "react";
import styled from "styled-components";
import Header from "../../Sections/Header/index";
import { BlockWrapper, BlockWrapper2 } from "../../UI/Helpers/BlockWrapper";
import { mobile } from "../../App";
import { Link, useParams, Redirect } from "react-router-dom";
import { ContainerFluid } from "../../UI/Helpers/Container";
import {
  BLACK,
  GRAY2,
  SKILL_FONTSIZE,
  GREEN_LIGHT,
  PRIMARY_COLOR,
  BORDER_INPUT,
} from "../../UI/Constants";
import VerifiedImage from "../../Assets/verified.svg";
import Photo from "../../Assets/photo.jpg";
import Line from "../../UI/Line/Line";
import Flex from "../../UI/Helpers/Flex";
import { TabsWithHeader } from "../../UI/Tabs/TabsWithHeader";
import StarFilledImage from "../../Assets/star_filled.svg";
import StarHalfFilledImage from "../../Assets/star_half_filled.svg";
import StarNotFilledImage from "../../Assets/star_not_filled.svg";
import Project from "../../Entity/Project/index";
import SearchSelect from "../../UI/SearchSelect/SearchSelect";

const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin: 8px 0;
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 36px;
    font-weight: 500;
    margin: 0;
  }
`;
const Topic = styled(Title)`
  font-weight: 400;
  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    margin: 12px 0 20px 0;
  }
`;

const isEmptyIdParam = (id) =>
  id === undefined || id === null || id === "" || id === "undefined";

const ProjectPage = () => {
  const { id } = useParams();

  const [list, setList] = React.useState([
    "Берлин",
    "Берн",
    "Братислава",
    "Брюссель",
    "Будапешт",
    "Бухарест",
    "Валлетта",
    "Варшава",
    "Ватикан",
    "Вена",
    "Вильнюс",
    "Дублин",
    "Киев",
    "Кишинёв",
  ]);
  const [query, setQuery] = React.useState("");

  console.log(query);

  if (isEmptyIdParam(id)) {
    return <Redirect to="/project-not-found" />;
  }

  return (
    <>
      <Header />
      <BlockWrapper>
        <ContainerFluid>
          <Title>Курсовая работа</Title>
          <Topic>
            Разработка ценностного предложения по господину Александру
            Остервальдеру
          </Topic>
          <SearchSelect
            value={query}
            onChange={setQuery}
            title="Выбор городов"
            fixedWidth
            list={list}
          />
        </ContainerFluid>
      </BlockWrapper>
    </>
  );
};

export default ProjectPage;
