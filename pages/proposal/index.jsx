import React, { useState } from "react";
import { useRouter } from "next/router";
import * as S from "../_styled/proposalStyled";

import { API } from "../api";
import Cookies from "js-cookie";

// 아이콘
import {
  faPaperPlane,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export default function Proposal() {
  const router = useRouter();

  const [content, setContent] = useState("");
  const [contact, setContact] = useState("");

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handleSubmission = (event) => {
    event.preventDefault(); // 폼 제출의 기본 동작인 페이지 새로고침을 방지합니다.

    // 쿠키 값을 확인하여 제출 가능 여부를 판단합니다.
    const isButtonClicked = Cookies.get("submitButtonClicked");
    if (isButtonClicked) {
      alert("건의를 너무 자주 제출할 수 없습니다. 나중에 다시 시도해주세요.");
      return;
    }

    // 비밀번호 체크
    if (password1 !== password2) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      // 폼 데이터를 서버로 전송하는 POST 요청
      const formData = {
        content: content,
        contact: contact,
      };

      API.post("suggestions", formData)
        .then((response) => {
          // 서버로부터의 응답을 처리합니다.
        })
        .catch((error) => {
          // 오류 처리 로직을 추가합니다.
          // console.log("건의사항 제출");
          // console.log(formData);
          // console.error('Error:', error);
        });

      // 화면 위로
      window.scrollTo({ top: 50, behavior: "smooth" });

      // 쿠키 값을 설정하여 버튼을 비활성화합니다.
      Cookies.set("submitButtonClicked", "true", { expires: 1 / (24 * 6) }); // 10분(1/24*6) 후에 만료됩니다.

      // 성공했을 때 건의 Done으로 이동
      router.push("/proposal/done");
    }
  };

  return (
    <>
      <S.ReportContainer>
        {/* 건의하기 헤더 */}
        <S.ReportHeader>
          <S.ProposalFontAwesomeIcon icon={faPaperPlane} />
          &nbsp;건의하기
        </S.ReportHeader>

        {/* 건의하기 폼 작성 */}
        <S.ReportForm onSubmit={handleSubmission}>
          <S.ReportOptionHeader>
            1. 건의사항을 남겨주세요 *
          </S.ReportOptionHeader>
          <S.ReportTextArea
            placeholder="텍스트를 입력해주세요"
            value={content}
            onChange={handleContentChange}
            required
          />

          <S.ReportOptionHeader>
            2. 답변을 받길 원하시면 이메일을 남겨주세요.(선택)
          </S.ReportOptionHeader>
          <S.ReportNoticeSection>
            <S.ReportNoticeSectionSpan>
              <S.ReportNoticeFontAwesomeIcon icon={faCircleExclamation} />
              &nbsp;제보글, 댓글 삭제 요청일 시 이메일을 꼭 입력해주세요
            </S.ReportNoticeSectionSpan>
          </S.ReportNoticeSection>

          <S.RowInputBoxWrap>
            <S.RowInputBox
              placeholder="elephant@gmail.com"
              value={contact}
              type="email"
              onChange={handleContactChange}
            ></S.RowInputBox>
          </S.RowInputBoxWrap>
          <S.SubmitButton type="submit">제출하기</S.SubmitButton>
        </S.ReportForm>
      </S.ReportContainer>
    </>
  );
}
