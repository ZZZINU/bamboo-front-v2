import React from "react";
import * as S from "../_styled/reportDoneStyled";
import logo from "../../components/image/logo.png";
import { useRouter } from "next/router";

export default function ReportDone() {
  const router = useRouter();
  return (
    <>
      <S.ReportDoneWrapper>
        <S.ReportDoneText>댓글 작성이 완료되었습니다.</S.ReportDoneText>
        <S.Img src={logo} alt="logo" />
        <S.ReportContent>
        댓글 작성은 건강한 커뮤니티를 위해
        <br/>관리자의 승인 후 게시됩니다. 
        <br/><br/>이용해주셔서 감사합니다.
        </S.ReportContent>
        <S.SubmitButton onClick={() => router.push("/")}>확인</S.SubmitButton>
      </S.ReportDoneWrapper>
    </>
  );
}
