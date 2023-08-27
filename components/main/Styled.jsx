import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

// search
export const SearchContainer = styled.form`
  width: 95%;
  margin: 5% 2.5%;
  padding: 3% 7%;
  background-color: #FFF;
  border-radius: 20px;
  border: 1px solid #BCBCBC;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SearchText = styled.input`
  font-size: 10px;
  width: 80%;
  outline: none;
  border: none;
  color: #BCBCBC;
  &::placeholder {
    color: #BCBCBC; /* Placeholder text color */
  }
`

export const SearchBtn = styled.button`
  background-color: #FFF;
  cursor: pointer;
  border: none;
  color: #BCBCBC;
  width: 8%;
`

export const SearchFont = styled(FontAwesomeIcon)`
  width: 5px;
  color: #BCBCBC;
`

// card
export const Card = styled.div`
  background: #FFF;
  border: 1px solid #04C96B;
  border-radius: 10px;
  width: 45%;
  height: 160px;
  margin: 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`

export const CardNum = styled.p`
  font-size: 16px;
  padding: 10%;
  color: #04C96B;
`

// nemo
export const NemoTime = styled.p`
  text-align: center;
  font-size: 12px;
  color: #2b2b2b;
`
export const NemoTitle = styled.p`
  text-align: center;
  font-size: 16px;
  color: #04C96B;
`

export const NemoCnt = styled.p`
  text-align: center;
  font-size: 12px;
  color: #B6B6B6;
  margin-bottom: 25%;
`

// common
export const CommonTitle = styled.p`
  font-size: 12px;
  padding: 5% 10%;
`

export const CommonBottom = styled.div`
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: auto 10% 20% 10%;
`

export const CommonTime = styled.p`
  color: #B6B6B6;
`

export const CommonMore = styled.p`
  color: #04C96B;
`

export const Deleted = styled.p`
  text-align: center;
  font-size: 12px;
  color: #B6B6B6;
  margin-bottom: 50%;
`