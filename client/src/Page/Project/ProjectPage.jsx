import React from "react";
import styled from "styled-components";
import Header from "../../Sections/Header/index";
import Button from "../../UI/Button/Button";
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
  GREEN_MONEY,
} from "../../UI/Constants";
import {
  Stats,
  Stat,
  StatHeader,
  StatContent,
  StatRow,
  StatColumn,
  Payment,
} from "../../Entity/Project/index";
import { ROUBLE } from "../../Data/Constants";
import DocIcon from "../../Assets/doc2.svg";
import PdfIcon from "../../Assets/pdf2.svg";
import XlsxIcon from "../../Assets/xlsx2.svg";
import XlsIcon from "../../Assets/xls2.svg";
import ErrorIcon from "../../Assets/error_red.svg";
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
  font-weight: 600;
  /* font-size: 20px; */
  font-size: 24px;
  line-height: 29px;
  margin: 8px 0;
  @media (max-width: 480px) {
    font-size: 26px;
    line-height: 36px;
    font-weight: 600;
    margin: 2px 0 0 0;
  }
`;
const Topic = styled(Title)`
  font-weight: 400;
  font-size: 16px;
  margin-top: 12px;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    margin: 12px 0 20px 0;
  }
`;
const About = styled.div`
  font-size: 14px;
  line-height: 26px;
`;
const SmallAbout = styled(About)`
  cursor: pointer;
`;

const SmallHead = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin: 30px 0 0 0;
  @media (max-width: 480px) {
    font-size: 18px;
    margin: 28px 0 0 0;
  }
`;
const SmallHeadInteractive = styled(SmallHead)`
  cursor: pointer;
  &:hover {
    color: ${PRIMARY_COLOR};
  }
`;
const SmallHead2 = styled(SmallHead)`
  margin: 0;
`;
const ExpandButton = styled.button`
  font-size: 14px;
  color: ${PRIMARY_COLOR};
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-weight: 500;
`;
const P = styled.p`
  &:first-child {
    margin-top: 8px;
  }
`;
const FileIcon = styled.img`
  margin-right: 14px;
`;
const File = styled.div`
  display: flex;
  margin-top: 18px;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    span {
      color: ${PRIMARY_COLOR};
    }
  }
`;
const FileText = styled.div`
  overflow: hidden;
`;
const FileTitle = styled.span`
  font-weight: 500;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const FileLabel = styled.div`
  font-size: 14px;
  opacity: 0.6;
  margin-top: 5px;
  color: ${BLACK};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    color: ${BLACK};
  }
`;
const InfoPanel = styled.div`
  position: sticky;
  top: 16px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25),
    0px 15px 25px -11px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  padding: 14px 16px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
const CautionBlock = styled.div`
  font-size: 14px;
  line-height: 26px;
  border-radius: 6px;
  border: 1px solid #ff2f2f;
  padding: 12px 16px;
  margin-bottom: 24px;
  color: #ff2f2f;
  display: flex;
  align-items: center;
`;
const ErrorImg = styled.img`
  margin-right: 8px;
`;

const StatsList = styled.ul`
  width: 100%;
  margin-top: 14px;
  border-top: ${BORDER_INPUT};
`;
const StatListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: ${BORDER_INPUT};
  padding: 14px 0;
`;
const StatListButton = styled(StatListItem)`
  color: ${PRIMARY_COLOR};
  font-weight: 500;
  border-bottom: none;
  cursor: pointer;
`;
const StatListKey = styled.div`
  font-size: 16px;
`;
const StatListValue = styled.div`
  font-size: 16px;
`;
const StatListValueGreen = styled.div`
  color: ${GREEN_MONEY};
  font-weight: 500;
`;

const MAX_LEN_SMALL_ABOUT = 250;

const isEmptyIdParam = (id) =>
  id === undefined || id === null || id === "" || id === "undefined";

const ProjectPage = () => {
  const { id } = useParams();

  const [moreListItemsVisible, setMoreListItemsVisible] = React.useState(false);
  const [aboutExpanded, setAboutExpanded] = React.useState(false);
  const aboutText = `Сразу подчеркну, что стену, возникшую в последние годы между
  Россией и Украиной, между частями, по сути, одного
  исторического и духовного пространства, воспринимаю как
  большую общую беду, как трагедию. Это прежде всего последствия
  наших собственных ошибок, допущенных в разные периоды. Но и
  результат целенаправленной работы тех сил, которые всегда
  стремились к подрыву нашего единства.`;

  if (isEmptyIdParam(id)) {
    return <Redirect to="/project-not-found" />;
  }
  return (
    <>
      <Header />
      <BlockWrapper>
        <ContainerFluid>
          <div className="row">
            <div className="col-md-6">
              <Title>Лабораторная работа</Title>
              <Topic>
                Оценка уязвимости микрофинансовых организаций к легализации
                доходов, полученных преступным путем
              </Topic>
              <SmallHead>Требования</SmallHead>
              {!mobile && (
                <Stats>
                  <StatColumn>
                    <Stat>
                      <StatHeader>Страниц</StatHeader>
                      <StatContent>150</StatContent>
                    </Stat>
                    <Stat>
                      <StatHeader>Источников</StatHeader>
                      <StatContent>14</StatContent>
                    </Stat>
                  </StatColumn>
                  <StatColumn>
                    <Stat>
                      <StatHeader>Срок</StatHeader>
                      <StatContent>4 дня</StatContent>
                    </Stat>
                    <Stat>
                      <StatHeader>Оплата</StatHeader>
                      <StatContent>
                        <Payment>250 000 {ROUBLE}</Payment>
                      </StatContent>
                    </Stat>
                  </StatColumn>
                  <StatColumn>
                    <Stat>
                      <StatHeader>Оригинальность</StatHeader>
                      <StatContent>30%</StatContent>
                    </Stat>
                  </StatColumn>
                </Stats>
              )}
              {mobile && (
                <StatsList>
                  <StatListItem>
                    <StatListKey>Страниц</StatListKey>
                    <StatListValue>150</StatListValue>
                  </StatListItem>
                  <StatListItem>
                    <StatListKey>Срок</StatListKey>
                    <StatListValue>5 дней</StatListValue>
                  </StatListItem>
                  <StatListItem>
                    <StatListKey>Источников</StatListKey>
                    <StatListValue>от 30</StatListValue>
                  </StatListItem>
                  <StatListItem>
                    <StatListKey>Оригинальность</StatListKey>
                    <StatListValue>от 80%</StatListValue>
                  </StatListItem>
                  <StatListItem>
                    <StatListKey>Оплата</StatListKey>
                    <StatListValueGreen>2 500 000 {ROUBLE}</StatListValueGreen>
                  </StatListItem>
                  {moreListItemsVisible && (
                    <React.Fragment>
                      <StatListItem>
                        <StatListKey>Источников</StatListKey>
                        <StatListValue>от 30</StatListValue>
                      </StatListItem>
                      <StatListItem>
                        <StatListKey>Оригинальность</StatListKey>
                        <StatListValue>от 80%</StatListValue>
                      </StatListItem>
                      <StatListItem>
                        <StatListKey>Оплата</StatListKey>
                        <StatListValueGreen>
                          2 500 000 {ROUBLE}
                        </StatListValueGreen>
                      </StatListItem>
                    </React.Fragment>
                  )}
                  <StatListButton
                    onClick={() =>
                      setMoreListItemsVisible(!moreListItemsVisible)
                    }
                  >
                    <StatListKey>
                      {!moreListItemsVisible ? "Показать полностью" : "Скрыть"}
                    </StatListKey>
                  </StatListButton>
                </StatsList>
              )}
              <SmallHeadInteractive
                onClick={() => setAboutExpanded(!aboutExpanded)}
              >
                Описание
              </SmallHeadInteractive>
              {!aboutExpanded && (
                <SmallAbout onClick={() => setAboutExpanded(true)}>
                  <P>
                    {aboutText.substr(0, MAX_LEN_SMALL_ABOUT)}…{" "}
                    <ExpandButton>Показать полностью</ExpandButton>
                  </P>
                </SmallAbout>
              )}
              {aboutExpanded && (
                <About>
                  <P>
                    Сразу подчеркну, что стену, возникшую в последние годы между
                    Россией и Украиной, между частями, по сути, одного
                    исторического и духовного пространства, воспринимаю как
                    большую общую беду, как трагедию. Это прежде всего
                    последствия наших собственных ошибок, допущенных в разные
                    периоды. Но и результат целенаправленной работы тех сил,
                    которые всегда стремились к подрыву нашего единства.
                  </P>
                  <P>
                    Формула, которая применяется, известна испокон веков:
                    разделяй и властвуй. Ничего нового. Отсюда и попытки сыграть
                    на национальном вопросе, посеять рознь между людьми. А как
                    сверхзадача – разделить, а затем и стравить между собой
                    части единого народа. Киевский княжеский стол занимал
                    главенствующее положение в Древнерусском государстве.
                  </P>
                  <P>
                    Так повелось с конца IX века. Слова Вещего Олега о Киеве:
                    «Да будет это мать городам русским» – сохранила для потомков
                    «Повесть временных лет».
                  </P>
                  <ExpandButton onClick={() => setAboutExpanded(false)}>
                    Скрыть подробное описание
                  </ExpandButton>
                </About>
              )}
              <SmallHead>Прикреплённые файлы</SmallHead>
              <File>
                <FileIcon src={DocIcon} />
                <FileText>
                  <FileTitle>Пример курсовой работы</FileTitle>
                  <FileLabel>DOC 30 МБ</FileLabel>
                </FileText>
              </File>
              <File>
                <FileIcon src={PdfIcon} />
                <FileText>
                  <FileTitle>Стандарт организации</FileTitle>
                  <FileLabel>PDF 2 МБ</FileLabel>
                </FileText>
              </File>
              <File>
                <FileIcon src={XlsxIcon} />
                <FileText>
                  <FileTitle>Пример курсовой работы</FileTitle>
                  <FileLabel>DOC 30 МБ</FileLabel>
                </FileText>
              </File>
              <File>
                <FileIcon src={XlsIcon} />
                <FileText>
                  <FileTitle>Пример курсовой работы</FileTitle>
                  <FileLabel>DOC 30 МБ</FileLabel>
                </FileText>
              </File>
            </div>
            <div className="offset-md-1"></div>
          </div>
        </ContainerFluid>
      </BlockWrapper>
    </>
  );
};

export default ProjectPage;

{
  /* <CautionBlock>
                <ErrorImg src={ErrorIcon} />
                Сдать работу нужно завтра в 14.00
              </CautionBlock> */
}

// <div className="col-md-5">
//               <InfoPanel>
//                 <SmallHead2>Требования</SmallHead2>
//                 <Stats>
//                   <StatColumn>
//                     <Stat>
//                       <StatHeader>Страниц</StatHeader>
//                       <StatContent>150</StatContent>
//                     </Stat>
//                     <Stat>
//                       <StatHeader>Источников</StatHeader>
//                       <StatContent>14</StatContent>
//                     </Stat>
//                   </StatColumn>
//                   <StatColumn>
//                     <Stat>
//                       <StatHeader>Срок</StatHeader>
//                       <StatContent>4 дня</StatContent>
//                     </Stat>
//                     <Stat>
//                       <StatHeader>Оплата</StatHeader>
//                       <StatContent>
//                         <Payment>250 000 {ROUBLE}</Payment>
//                       </StatContent>
//                     </Stat>
//                   </StatColumn>
//                   <StatColumn>
//                     <Stat>
//                       <StatHeader>Оригинальность</StatHeader>
//                       <StatContent>30%</StatContent>
//                     </Stat>
//                   </StatColumn>
//                 </Stats>
//                 <ButtonWrapper>
//                   <Button primary>Завершить работу</Button>
//                 </ButtonWrapper>
//               </InfoPanel>
//             </div>
