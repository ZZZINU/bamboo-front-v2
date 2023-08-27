import React, { useState, useEffect } from "react";
import { API } from "../api";
import * as S from "../_styled/suggestionStyled";
import { faComment, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Comment() {

  // // id 값 가져오기
  // const location = useLocation();
  // const search = (location.search).substring(1);

  const router = useRouter();

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [content, setContent] = useState("");
  const [reportNum, setReportNum] = useState("");

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleReportNumChange = (event) => {
    setReportNum(event.target.value)
  }

  const handlePassword1Change = (event) => {
    const inputValue = event.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      setPassword1(inputValue);
      setPasswordMatch(event.target.value === password2);
    }
  };

  const handlePassword2Change = (event) => {
    const inputValue = event.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      setPassword2(inputValue);
      setPasswordMatch(event.target.value === password1);
    }
  };

  const handleSubmission = (event) => {
    event.preventDefault(); // 폼 제출의 기본 동작인 페이지 새로고침을 방지합니다.

    // 쿠키 값을 확인하여 제출 가능 여부를 판단합니다.
    const isButtonClicked = Cookies.get("submitSuggestionButtonClicked");
    if (isButtonClicked) {
      alert("댓글을 너무 자주 제출할 수 없습니다. 나중에 다시 시도해주세요.");
      return;
    }

    // 비밀번호 체크
    if (password1 !== password2) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      // 폼 데이터를 서버로 전송하는 POST 요청

      const formData = {
        content: content,
        password: password1,
        post_num : reportNum
      };
      
      console.log(formData)
      // API.post("comments", formData)
      //   .then((response) => {
      //     // console.log(response.data);
      //   })
      //   .catch((error) => {
      //     // console.log( "제보 제출에러!");
      //     // 오류 처리 로직을 추가합니다.
      //     console.error("Error:", error);
      //   });

      // 페이지 제출 후 스크롤 위로 이동
      window.scrollTo({ top: 50, behavior: "smooth" });

      // 쿠키 값을 설정하여 버튼을 비활성화합니다.
      Cookies.set("submitSuggestionButtonClicked", "true", {
        expires: 1 / (24 * 6),
      }); // 10분(1/24*6) 후에 만료됩니다.

      // 성공했을시 CommentDone으로 이동
      // router.push("/comment/done");
    }
  };

  return (
    <>
      <S.SuggestionWrap>
        <S.ReportHeader>
          <S.ReportHeaderIcon icon={faComment} />
          댓글달기
        </S.ReportHeader>

        <S.SuggestionForm onSubmit={handleSubmission}>
          {/* 댓글달기 #1 */}
          <S.TextSection>1. 제보 글 번호를 입력해주세요*</S.TextSection>

            <S.ReportNumInput 
              placeholder="제보 글 번호를 입력해주세요."
              value={reportNum}
              onChange={handleReportNumChange}
              required
            />

          {/* 댓글달기 #2 */}
          <S.TextSection>2. 댓글 내용을 입력해주세요*</S.TextSection>
          <S.CommentNotice>
            <S.CircleExclamationIcon icon={faCircleExclamation} width={12}/>
            니모 제보의 댓글은 세부번호를 댓글내용에 예시와 같이 적어주세요
          </S.CommentNotice>
          <S.ContentSectionWrap>
            <S.ContentSection
              placeholder="(1)번 분 아코학과세요"
              value={content}
              onChange={handleContentChange}
              required
            />
          </S.ContentSectionWrap>

          {/* 댓글달기 #3 */}
          <S.TextSection>
            3. 댓글 삭제를 위한 비밀번호 4자리를 입력해주세요*
          </S.TextSection>
          <S.CommentNotice>
            <S.CircleExclamationIcon icon={faCircleExclamation} width={12}/>
            게시글 보안을 위해 자주사용하는 비밀번호는 피해주세요.
          </S.CommentNotice>
          <S.PasswordSectionWrap>
            <S.PasswordText>비밀번호</S.PasswordText>
            <S.PasswordSection
              placeholder="숫자 4자리"
              minLength={4}
              maxLength={4}
              type="password"
              value={password1}
              onChange={handlePassword1Change}
              required
              inputMode="numeric"
            ></S.PasswordSection>
          </S.PasswordSectionWrap>
          <S.PasswordSectionWrap>
            <S.PasswordText>비밀번호 확인</S.PasswordText>
            <S.PasswordSection
              inputMode="numeric"
              placeholder="숫자 4자리"
              minLength={4}
              maxLength={4}
              type="password"
              value={password2}
              onChange={handlePassword2Change}
              required
            ></S.PasswordSection>
          </S.PasswordSectionWrap>
          {password1 === "" || password2 === ""
            ? " "
            : !passwordMatch && (
                <S.passwordMisMatch>
                  비밀번호가 일치하지않습니다.
                </S.passwordMisMatch>
              )}
          {password1 === "" || password2 === ""
            ? " "
            : passwordMatch && (
                <S.passwordMatch>확인되었습니다.</S.passwordMatch>
              )}
          <S.SubmitButtonWrap>
            <S.SubmitButton>제출하기</S.SubmitButton>
          </S.SubmitButtonWrap>
        </S.SuggestionForm>
      </S.SuggestionWrap>
    </>
  );
}