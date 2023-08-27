import React from "react";
import * as S from "../_styled/reportDoneStyled";
import logo from "../../components/image/logo.png";
import { useRouter } from "next/router";

export default function Done() {
  const router = useRouter();
  return (
    <>
      <S.ReportDoneWrapper>
        <S.ReportDoneText>건의 사항이 작성되었습니다.</S.ReportDoneText>
        <S.Img src={logo} alt="logo" />
        <S.ReportContent>
          관리자가 건의사항 확인후
          <br />
          이메일을 남겨주신 분들께 연락드릴 예정입니다.
          <br />
          <br /> <br />
          이용해주셔서 감사합니다.
        </S.ReportContent>
        <S.SubmitButton onClick={() => router.push("/")}>확인</S.SubmitButton>
      </S.ReportDoneWrapper>
    </>
  );
}
