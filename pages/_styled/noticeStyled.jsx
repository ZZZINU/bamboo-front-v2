import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

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

// 상세페이지

export const NoticeNum = styled.div`
  color: #A4A4A4;
  font-size: 15px;
  margin: 7% 0 5% 0;
`

export const NoticeTitle = styled.div`
  color: #04C96B;
  font-size: 20px;
`

export const NoticeDate = styled.div`
  color: #B6B6B6;
  font-size: 16px;
  margin: 2% 0;
`

export const NoticeImg = styled(Image)`
  width: 100%;
`

export const NoticeInsta = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
  margin: 2% 0;
`

export const NoticeInstaFont = styled(FontAwesomeIcon)`
  width: 20px;
`

export const NoticeInstaText = styled.span`
  font-size: 14px;
`

export const NoticeContent = styled.div`
  font-size: 16px;
  margin-top: 5%;
`