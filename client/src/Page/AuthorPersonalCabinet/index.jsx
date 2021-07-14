import React from "react";
import styled from "styled-components";
import { mobile } from "../../App";
import { Link } from "react-router-dom";
import Header from "../../Sections/Header/index";
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
import { BlockWrapper, BlockWrapper2 } from "../../UI/Helpers/BlockWrapper";
import { TabsWithHeader } from "../../UI/Tabs/TabsWithHeader";
import StarFilledImage from "../../Assets/star_filled.svg";
import StarHalfFilledImage from "../../Assets/star_half_filled.svg";
import StarNotFilledImage from "../../Assets/star_not_filled.svg";
import Project from "../../Entity/Project/index";

const Avatar = styled.div`
  width: 220px;
  height: 200px;
  border-radius: 10px;
  border: 1px solid rgba(0 0 0 / 10%);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  background-image: ${(p) => "url(" + p.image + ")" || "nill"};
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-size: 103%;
  }
`;
const Name = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  margin: 8px 0;
  @media (max-width: 480px) {
    font-size: 20px;
    margin: 14px 0 8px 0;
    line-height: 24px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    width: calc(100% - 56px);
  }
`;
const Status = styled.div`
  font-size: 15px;
  line-height: 18px;
  color: ${BLACK};
  opacity: 0.5;

  @media (max-width: 480px) {
    text-align: center;
    /* font-size: 20px;
    margin: 14px 0 8px 0; */
    /* line-height: 24px; */
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100%);
  }
`;
const Info = styled.div`
  margin-left: 24px;
  @media (max-width: 480px) {
    margin-left: 0px;
    width: 100%;
  }
`;
const SkillWrapper = styled.div`
  overflow: hidden;
  @media (max-width: 480px) {
    /* white-space: nowrap; */
    /* overflow-x: scroll; */
    /* padding: 0 15px; */
    margin-left: -15px;
    margin-right: -15px;
  }
`;
const SkillBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 14px 0;

  @media (max-width: 480px) {
    white-space: nowrap;
    overflow-x: scroll;
    /* margin-left: -15px;
    margin-right: -15px; */
    padding: 12px 0px;
    margin-bottom: -12px;
    margin-top: 4px;
  }
`;
const VerifiedIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 6px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${VerifiedImage});
  flex-shrink: 0;
  @media (max-width: 480px) {
    margin-right: 0;
  }
`;
const Skill = styled.div`
  background: ${GRAY2};
  border-radius: 4px;
  padding: 7px 9px;
  font-size: ${SKILL_FONTSIZE};
  margin-right: 6px;

  @media (max-width: 480px) {
    padding: 9px 14px;
    font-size: 14px;
    &:first-child {
      margin-left: 15px;
    }
    &:last-child {
      margin-right: 15px !important;
    }
  }

  &:last-child {
    margin-right: 0;
  }
`;
const StatBlock = styled.div`
  margin-right: 48px;
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 480px) {
    &:first-child {
      margin-left: 15px;
    }
    &:last-child {
      margin-right: 15px;
    }
  }
`;
const StatHeader = styled.div`
  font-size: 13px;
  color: ${BLACK};
  margin-bottom: 8px;
  opacity: 0.6;
`;
const StatOpinion = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${GREEN_LIGHT};
`;
const StatNumber = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: ${BLACK};
`;
const Star = styled.img``;
const EditProfile = styled.div`
  font-size: 13px;
  color: ${PRIMARY_COLOR};
  text-decoration: none;
  margin-left: 16px;
`;
const Projects = styled.div`
  margin: 20px 0 20px 0;
`;
const Flex2 = styled.div`
  display: flex;
  @media (max-width: 480px) {
    align-items: center;
    flex-direction: column;
  }
`;
const Flex3 = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    justify-content: center;
    align-items: center;
    /* flex-wrap: wrap; */
  }
`;
const StatsWrapper = styled.div`
  align-items: baseline;
  display: flex;

  @media (max-width: 480px) {
    white-space: nowrap;
    overflow-x: scroll;
    padding: 0 0 12px 0;
    margin: 0 -15px -12px -15px;
  }
`;

const AuthorPersonalCabinet = () => {
  const [tab, setTab] = React.useState(0);

  return (
    <>
      <Header />
      <BlockWrapper>
        <ContainerFluid>
          <Flex2>
            <Avatar image={Photo} />
            <Info>
              <Flex3 alignItemsCenter>
                <Name>Артём Апаркин Алексанович Человек</Name>
                <VerifiedIcon title="" />
                {!mobile && (
                  <Link to={"/edit"}>
                    <EditProfile>Редактировать профиль</EditProfile>
                  </Link>
                )}
              </Flex3>
              <Status>
                Занимаюсь программированием с шести лет Занимаюсь
                программированием с шести лет
              </Status>

              <SkillWrapper>
                <SkillBlock>
                  <Skill>Программирование</Skill>
                  <Skill>C++</Skill>
                  <Skill>Математика</Skill>
                  <Skill>React TypeScript</Skill>
                  <Skill>JavaScript</Skill>
                </SkillBlock>
              </SkillWrapper>
              <Line margin="18px 0" />
              <StatsWrapper>
                <StatBlock>
                  <StatHeader>Общее впечателение</StatHeader>
                  <StatOpinion>Профессионал (87%)</StatOpinion>
                </StatBlock>
                <StatBlock>
                  <StatHeader style={{ marginBottom: "5px" }}>
                    Оценка
                  </StatHeader>
                  <Flex alignItemsCenter>
                    <Star src={StarFilledImage} />
                    <Star src={StarFilledImage} />
                    <Star src={StarFilledImage} />
                    <Star src={StarFilledImage} />
                    <Star src={StarHalfFilledImage} />
                  </Flex>
                </StatBlock>
                <StatBlock>
                  <StatHeader>Завершено</StatHeader>
                  <StatNumber>245</StatNumber>
                </StatBlock>
                <StatBlock>
                  <StatHeader>Заработано</StatHeader>
                  <StatNumber>89 743 ₽</StatNumber>
                </StatBlock>
                <StatBlock>
                  <StatHeader>Отзывов</StatHeader>
                  <StatNumber>154</StatNumber>
                </StatBlock>
              </StatsWrapper>
            </Info>
          </Flex2>
        </ContainerFluid>
      </BlockWrapper>
      <BlockWrapper2>
        <ContainerFluid>
          <TabsWithHeader
            title="Мои работы"
            tabs={["В процессе (3)", "Завершенные (23)", "Отменённые (0)"]}
            selected={tab}
            setTab={setTab}
          />
          <Projects>
            <Flex mobileColumn fullWidth>
              <Project
                id="0934-2332-32434-6546"
                type="Лабораторная работа"
                topic="Положение о стипендиальном обеспечении и других формах материальной
        поддержки обучающихся СФУ"
                pages="30"
                payment="40 000"
                remaining="4 дня"
                subject="Прикладная информатика в бизнесе"
                originality="50"
                sources="20"
              />
              <Project
                id="undefined"
                type="Диплом"
                topic="Положение о стипендиальном обеспечении и других формах материальной
        поддержки обучающихся СФУ"
                pages="80"
                payment="100 000"
                remaining="14 дней"
                subject="Прикладная информатика в бизнесе и моделирование бизнес-процессов"
                originality="90"
                sources="20"
              />
              <Project
                type="Курсовая работа"
                topic="Положение о стипендиальном обеспечении и других формах материальной
        поддержки обучающихся СФУ"
                pages="80"
                payment="100 000"
                remaining="14 дней"
                subject="Прикладная информатика в бизнесе и моделирование бизнес-процессов"
                originality="90"
                sources="20"
              />
            </Flex>
          </Projects>
        </ContainerFluid>
      </BlockWrapper2>
    </>
  );
};

export default AuthorPersonalCabinet;
