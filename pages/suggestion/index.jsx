import * as S from '../_styled/suggestionStyled'
import { faPen } from '@fortawesome/free-solid-svg-icons'

export default function Suggestion() {
  return (
    <>
      <S.SuggestionWrap>
        <S.ReportHeader>
          <S.ReportHeaderIcon icon={faPen} />
          &nbsp;제보하기
        </S.ReportHeader>
      </S.SuggestionWrap>
    </>
  )
}
