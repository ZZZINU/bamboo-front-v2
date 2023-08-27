import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 건의 컨테이너
export const ReportContainer = styled.div`
  margin: 0px 30px;
`;

// 건의 헤더
export const ReportHeader = styled.div`
  display: flex;
  text-align: left;
  color: #04c96b;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
`;

// 건의 헤더 아이콘
export const ProposalFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #04c96b;
  width: 18px;
`;
