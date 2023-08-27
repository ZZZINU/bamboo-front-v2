import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 건의 컨테이너
export const ReportContainer = styled.div`
  margin: 20px 30px;
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

// 건의 폼
export const ReportForm = styled.form``;

// 건의 문항별 헤더
export const ReportOptionHeader = styled.div`
  font-size: 18px;
  text-align: left;
  font-weight: 500;
  margin: 30px 0px 17px 0px;
  line-height: 1.3;
  letter-spacing: -0.3px;
`;

export const ReportTextArea = styled.textarea`
  width: 332px;
  padding: 17px;
  height: 160px;
  align-items: flex-start;
  display: flex;
  border: 1px solid #b8b8b8;
  border-radius: 10px;
  line-height: 1.5;
  resize: none;
  margin-bottom: 63px;

  ::placeholder {
    color: #b8b8b8;
    text-align: left;
    padding-left: 10px;
    padding: 0;
    margin: 0;
  }
  &:focus {
    outline: none;
    border: 1px solid #04c96b;
    box-shadow: 0 0 0 1px rgba(4, 201, 107, 0.3);
  }
`;

export const ReportNoticeSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  text-align: left;
  color: #04c96b;
  padding: 3px 0;
`;

export const ReportNoticeSectionSpan = styled.span`
  color: #000;
  margin-top: -8px;
  line-height: 1.4px;
`;

export const ReportNoticeFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 10px;
`;

export const RowInputBoxWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const RowInputBox = styled.input`
  width: 332px;
  padding: 17px;
  align-items: flex-start;
  display: flex;
  border: 1px solid #b8b8b8;
  border-radius: 10px;
  line-height: 1.5;
  margin-top: 22px;

  ::placeholder {
    color: #b8b8b8;
    text-align: left;
    padding-left: 10px;
    padding: 0;
    margin: 0;
  }

  &:focus {
    outline: none;
    border: 1px solid #04c96b;
    box-shadow: 0 0 0 1px rgba(4, 201, 107, 0.3);
  }
`;

// 제출 버튼
export const SubmitButton = styled.button`
  text-align: center;
  margin: 70px 0px 40px 0px;
  background-color: #04c96b;
  color: #fff;
  padding: 15px 136.8px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
`;
