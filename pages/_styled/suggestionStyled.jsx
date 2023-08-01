import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SuggestionWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`
// 제보헤더
export const ReportHeader = styled.div`
  display: flex;
  margin-left: 30px;
  text-align: left;
  color: #04c96b;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -2px;
`

export const ReportHeaderIcon = styled(FontAwesomeIcon)`
  width: 18px;
`
