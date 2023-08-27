import styled from "styled-components";
import Image from "next/image";

export const ReportDoneText = styled.h1`
  color: #04c96b;
  margin-top: 143px;
  font-weight: 700;
  font-size: 24px;
`;

export const ReportDoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReportContent = styled.div`
  margin-top: 50px;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 100px;
  text-align: center;
  line-height: normal;
`;
export const Img = styled(Image)`
  margin-top: 50px;
  width: 20%;
`;

// 제출 버튼
export const SubmitButton = styled.button`
  margin: 10px 0px 80px 0px;
  background-color: #04c96b;
  color: #fff;
  padding: 15px 130px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
`;
