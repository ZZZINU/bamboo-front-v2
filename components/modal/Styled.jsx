import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// animation
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
    position: absolute;
    width: 60%;
    padding: 5%;
    right: 0;
    border-radius: 10px 0px 0px 10px;
    z-index: 999;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
`

export const ModalBtn = styled.span`
    width: 5%;
    text-align: right;
    margin: 5% 0 5% 70%;
    color: rgba(27, 47, 78, 0.40);
    cursor: pointer;
`

export const LogoImg = styled(Image)`
    margin: 5% 0;
`

export const LogoText = styled.h1`
    font-size: 1em;
    font-family: 'InterBold';
    color : #04C96B;
    font-weight: 700;
    margin: 5% 0 15% 0;
`

export const PageBtn = styled(Link)`
    background-color: #04C96BE0;
    border: none;
    border-radius: 20px;
    width: 70%;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    font-size: 12px;
    color: #FFFFFF;
    margin: 5% 0;
    font-size: 15px;
    cursor: pointer;
`

export const PageBtnProposal = styled(Link)`
    background-color: #11472D4D;
    border: none;
    border-radius: 20px;
    width: 70%;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    color: #FFFFFF;
    margin: 5% 0 20% 0;
    font-size: 15px;
    cursor: pointer;
`

export const PageFontawesomeIcon = styled(FontAwesomeIcon)`
    width: 12px;
`

export const PageInsta = styled.button`
    border: 1px solid #04C96BE0;
    border-radius: 20px;
    width: 70%;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    font-size: 12px;
    color: #04C96BE0;
    margin: 15% 0 25% 0;
    font-size: 15px;
    cursor: pointer;
    background-color: transparent;
`

export const InstaFont = styled(FontAwesomeIcon)`
    width: 12px;
`

// 안내문 NoticeModal
export const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  animation: ${fadeIn} 0.4s ease-in-out;
  margin: 0;
  position: absolute;
  z-index: 999;
`;

export const NoticeModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 투명도 있는 검정색 배경 */
  z-index: -1; /* 모달 위에 위치하도록 z-index 설정 */
`

export const NoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  background: #FFFFFF;
  border: 2px solid rgba(88, 129, 109, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  letter-spacing: -0.3px;
`;

export const NoticeBoxText = styled.div`
  text-align: left;
  padding: 0 10%;
  color: #04C96B;
  letter-spacing: -0.3px;
  font-weight: 700;
`

export const NoticeBoxTextBlack = styled.div`
  padding: 2% 10%;
  letter-spacing: -0.3px;
  color: #000000;
  font-weight: 500;
  font-size: 14px;
`
export const NoticeBoxTextRed = styled.div`
  padding: 10% 10% 2% 10%;
  letter-spacing: -0.3px;
  color: #FF3E3E;
  font-weight: 500;
  font-size: 12px;
`
export const NoticeBoxTextGreen = styled.div`
  padding: 5% 10% 2% 10%;
  letter-spacing: -0.3px;
  color: #04C96B;
  font-weight: 500;
  font-size: 12px;
`

export const NoticeBoxTextBlackSub = styled.div`
  padding: 0 10%;
  letter-spacing: -0.3px;
  color: #000;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
`

export const NoticeSubmit = styled.button`
  width: 80%;
  height: 50px;
  background: #04C96B;
  border: 1px solid #04C96B;
  border-radius: 18px;
  color: #FFF;
  font-weight: 700;
  font-size: 16px;
  margin: 80px 10% 5% 10%;
  cursor: pointer;
`;

// 로고
export const NoticeBoxLogoWrap= styled.div`
  padding: 10%;
  text-align: left;
  display: flex;
  align-items: center;
  color: #04C96B;
  font-size: 14px;
  font-weight: 700;
`

export const NoticeBoxLogoImg = styled(Image)`
  width: 30px;
  margin-right: 10px;
`

export const NoticeBoxLogoText= styled.div`
width: 90%;
`

export const NoticeBoxCloseButton = styled.button`
  width: 10%;
  border: none;
  background: transparent;
  color: #373F41;
  cursor: pointer;
`
