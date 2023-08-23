import * as S from "../_styled/suggestionStyled";
import { faPen, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "@/components/suggestion/Dropdown";
import logo from "../../components/image/logo.png";

export default function Suggestion() {
  return (
    <>
      <S.SuggestionWrap>
        <S.ReportHeader>
          <S.ReportHeaderIcon icon={faPen} />
          &nbsp;제보하기
        </S.ReportHeader>

        <S.SuggestionForm form>
          {/* 제보하기 #1 */}
          <S.TextSection>1. 제보 종류를 선택해주세요</S.TextSection>
          <Dropdown /> {/*컴포넌트 데이터 전달 필요*/}
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
