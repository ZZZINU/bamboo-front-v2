import * as S from "../_styled/proposalStyled";

// 아이콘
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Proposal() {
  return (
    <>
      <S.ReportContainer>
        <S.ReportHeader>
          <S.ProposalFontAwesomeIcon icon={faPaperPlane} />
          &nbsp;건의하기
        </S.ReportHeader>
      </S.ReportContainer>
    </>
  );
}
