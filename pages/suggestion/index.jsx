import React, { useState, useEffect } from "react";
import * as S from "../_styled/suggestionStyled";
import { faPen, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import logo from "../../components/image/logo.png";

// 컴포넌트
import NoticeModal from "@/components/modal/NoticeModal";
import Dropdown from "@/components/suggestion/Dropdown";

export default function Suggestion() {
  const [isExternal, setExternal] = useState(false);
  const [answer, setAnswer] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const [content, setContent] = useState("");

  const [currentSelected, setSelected] = useState("🎋 일반 제보");
  const [postReport, setPostReport] = useState("COMMON");

  // 모달창 처음에만 뜨게
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  const handleSubmission = (event) => {
    event.preventDefault(); // 폼 제출의 기본 동작인 페이지 새로고침을 방지합니다.

    // 쿠키 값을 확인하여 제출 가능 여부를 판단합니다.
    const isButtonClicked = Cookies.get("submitSuggestionButtonClicked");
    if (isButtonClicked) {
      alert("제보를 너무 자주 제출할 수 없습니다. 나중에 다시 시도해주세요.");
      return;
    }

    // 비밀번호 체크
    if (password1 !== password2) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      // 폼 데이터를 서버로 전송하는 POST 요청
      if (isExternal === true || answer === "") {
        setAnswer("오답");
      }
      const formData = {
        content: content,
        password: password1,
        answer: answer,
        question: question.id,
        type: postReport,
      };

      axios
        .post("reports", formData)
        .then((response) => {
          // console.log(response.data);
        })
        .catch((error) => {
          // console.log( "제보 제출에러!");
          // 오류ㄴ 처리 로직을 추가합니다.
          console.error("Error:", error);
        });

      // 페이지 제출 후 스크롤 위로 이동
      window.scrollTo({ top: 50, behavior: "smooth" });

      // 쿠키 값을 설정하여 버튼을 비활성화합니다.
      Cookies.set("submitSuggestionButtonClicked", "true", {
        expires: 1 / (24 * 6),
      }); // 10분(1/24*6) 후에 만료됩니다.

      // 성공했을시 ReportDone으로 이동
      navigate("/reportDone"); // Navigate to the 'ReportDone' componen
    }
  };

  return (
    <>
      <S.SuggestionWrap>
        <S.ReportHeader>
          <S.ReportHeaderIcon icon={faPen} />
          &nbsp;제보하기
        </S.ReportHeader>

        {modalOpen && <NoticeModal setModalOpen={setModalOpen} />}

        <S.SuggestionForm form onSubmit={handleSubmission}>
          {/* 제보하기 #1 */}
          <S.TextSection>1. 제보 종류를 선택해주세요</S.TextSection>
          <Dropdown
            currentSelected={currentSelected}
            setSelected={setSelected}
            setPostReport={setPostReport}
          />
          <S.NoticeSection>
            <S.NoticeSectionRound>업로드 시간 안내</S.NoticeSectionRound>
          </S.NoticeSection>
          <S.NoticeSection>
            <S.NoticeSectionLi>
              일반제보는 관리자 승인 즉시 업로드 됩니다.
            </S.NoticeSectionLi>
            <S.NoticeSectionLi>
              니모제보는 12시, 20시에 업로드 됩니다. (오픈 이벤트로 축제기간에는
              12시, 16시, 20시에 업로드 예정)
            </S.NoticeSectionLi>
          </S.NoticeSection>
          {/* 제보하기 #2 */}
          <S.TextSection>2. 제보 내용을 입력해주세요</S.TextSection>
          <S.ContentSectionWrap>
            <S.ContentSection
              placeholder="텍스트를 입력해주세요."
              // value={content}
              // onChange={handleContentChange}
              // required
            />
          </S.ContentSectionWrap>
          {/* 제보하기 #3 */}
          <S.TextSection>
            3. 제보 글 삭제를 위한 비밀번호 4자리를 입력해주세요
          </S.TextSection>
          <S.PasswordSectionWrap>
            <S.PasswordText>비밀번호</S.PasswordText>
            <S.PasswordSection
              placeholder="숫자 4자리"
              minLength={4}
              maxLength={4}
              type="password"
              // value={password1}
              // onChange={handlePassword1Change}
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
              // value={password2}
              // onChange={handlePassword2Change}
              required
            ></S.PasswordSection>
          </S.PasswordSectionWrap>
          {/* {password1 === '' || password2 === ''
            ? ' '
            : !passwordMatch && (
                <div
                  style={{
                    color: '#FF3636',
                    fontSize: '13px',
                    position: 'relative',
                    left: '10px',
                  }}
                >
                  비밀번호가 일치하지않습니다.
                </div>
              )}
          {password1 === '' || password2 === ''
            ? ' '
            : passwordMatch && (
                <div
                  style={{
                    color: '#04C96B',
                    fontSize: '13px',
                    position: 'relative',
                    left: '-20px',
                  }}
                >
                  확인되었습니다.
                </div>
              )} */}
          <S.SubmitButtonWrap>
            <S.SubmitButton>제출하기</S.SubmitButton>
          </S.SubmitButtonWrap>
        </S.SuggestionForm>
      </S.SuggestionWrap>
    </>
  );
}
