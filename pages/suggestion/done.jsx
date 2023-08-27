import React from "react";
import * as S from "../_styled/reportDoneStyled";
import logo from "../../components/image/logo.png";
import { useRouter } from "next/router";

export default function ReportDone() {
  const router = useRouter();
  return (
    <>
      <S.ReportDoneWrapper>
        <S.ReportDoneText>제보가 완료되었습니다.</S.ReportDoneText>
        <S.Img src={logo} alt="logo" />
        <S.ReportContent>
          동국대학교 대나무 숲은 익명성을
          <br />
          철처히 보장합니다.
          <br /> <br />
          이용해주셔서 감사합니다.
        </S.ReportContent>
        <S.SubmitButton onClick={() => router.push("/")}>확인</S.SubmitButton>
      </S.ReportDoneWrapper>
    </>
  );
}
