import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NoticeWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 5%;
  width: 90%;
`;

export const NoticeHeader = styled.div`
  display: flex;
  gap: 2%;
  text-align: left;
  color: #04c96b;
  font-size: 18px;
  font-weight: 700;
`;

export const NoticeHeaderIcon = styled(FontAwesomeIcon)`
  width: 18px;
`;

export const NoticePosts = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 5%;
`

export const NoticePost = styled.div`
    width: 45%;
    margin-top: 5%;
`