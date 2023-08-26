import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SuggestionWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

// 제보헤더
export const ReportHeader = styled.div`
  display: flex;
  margin-left: 30px;
  text-align: left;
  color: #04c96b;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -2px;
`;

export const ReportHeaderIcon = styled(FontAwesomeIcon)`
  width: 18px;
`;

export const SuggestionForm = styled.form``;

export const TextSection = styled.div`
  font-size: 18px;
  text-align: left;
  font-weight: 500;
  margin: 30px 30px 20px 30px;
`;

export const NoticeSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px 0 30px;
  font-size: 10px;
  text-align: left;
  color: #04c96b;
  padding: 3px 0;
`;

export const NoticeSectionRound = styled.div`
  border: 1px solid #04c96b;
  width: 100px;
  border-radius: 10px;
  text-align: center;
  padding: 4px;
`;

export const NoticeSectionLi = styled.li`
  padding: 3px 0;
  margin-left: 5px;
  line-height: 14px;
`;

export const ContentSectionWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ContentSection = styled.textarea`
  width: 280px;
  padding: 17px;
  height: 160px;
  align-items: flex-start;
  display: flex;
  border: 1px solid #b8b8b8;
  border-radius: 10px;
  line-height: 1.5;

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

export const PasswordSection = styled.input`
  border: 1px solid #b8b8b8;
  border-radius: 10px;
  width: 200px;
  height: 35px;
  padding: 1px 10px;

  &:focus {
    outline: none;
    border: 1px solid #04c96b;
    box-shadow: 0 0 0 1px rgba(4, 201, 107, 0.3);

    ::placeholder {
      color: #b8b8b8;
    }
    /* 비밀번호 가리기 */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-security: disc;
    }
  }
`;
export const PasswordSectionWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;
export const PasswordText = styled.div`
  width: 80px;
  text-align: left;
  font-size: 12px;
`;

export const Question = styled.span`
  color: #7a7a7a;
  margin-bottom: -10px;
  margin-top: 25px;
  padding-bottom: 0;
  font-size: 15px;
`;

export const Logo = styled.img`
  width: 5%;
  margin-right: 10px;
`;

export const CircleExclamationIcon = styled(FontAwesomeIcon)`
  width: 10px;
`;

export const QuestionNotice = styled.span`
  color: #000;
  margin-top: -10px;
  line-height: 1.4;
`;

// 제출 버튼
export const SubmitButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px 40px 0px;
  background-color: #04c96b;
  color: #fff;
  padding: 15px 130px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
`;

// 비밀번호 일치/불일치
export const passwordMatch = styled.div`
  display: flex;
  justify-content: center;
  color: #04c96b;
  font-size: 13px;
  position: relative;
  left: -10px;
`;

export const passwordMisMatch = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  left: 30px;
  color: #ff3636;
  font-size: 13px;
`;
