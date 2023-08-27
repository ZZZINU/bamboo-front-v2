import * as S from "../_styled/proposalStyled";

// 아이콘
import {
  faPaperPlane,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export default function Proposal() {
  return (
    <>
      <S.ReportContainer>
        {/* 건의하기 헤더 */}
        <S.ReportHeader>
          <S.ProposalFontAwesomeIcon icon={faPaperPlane} />
          &nbsp;건의하기
        </S.ReportHeader>

        {/* 건의하기 폼 작성 */}
        <S.ReportForm>
          <S.ReportOptionHeader>
            1. 건의사항을 남겨주세요 *
          </S.ReportOptionHeader>
          <S.ReportTextArea
            placeholder="텍스트를 입력해주세요."
            // value={content}
            // onChange={handleContentChange}
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
              placeholder="elepahnt@dgu.ac.kr"
              // value={contact}
              type="email"
              // onChange={handleContactChange}
            ></S.RowInputBox>
          </S.RowInputBoxWrap>
          <S.SubmitButton type="submit">제출하기</S.SubmitButton>
        </S.ReportForm>
      </S.ReportContainer>
    </>
  );
}
