import React from 'react';
import logo from "../image/logo.png";
import { useRouter } from 'next/router';
import * as S from './Styled';

export default function NoticeModal({setModalOpen}) {

  const router = useRouter();

  // 선택한거 열고 모달닫기
  const openChoice = (url) => {
    setModalOpen(false);
    router.push(url);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return(
    <>
      <S.NoticeWrapper>
      <S.NoticeModalOverlay></S.NoticeModalOverlay> {/* 추가: 모달 배경에 대한 투명도 있는 검정색 오버레이 */}
        <S.NoticeBox>
          <S.NoticeBoxLogoWrap>
            <S.NoticeBoxLogoImg src={logo} alt='logo' width={30}/>
            <S.NoticeBoxLogoText>DGU-Bamboo</S.NoticeBoxLogoText>
            <S.NoticeBoxCloseButton onClick={()=>openChoice('/')} >X</S.NoticeBoxCloseButton>
          </S.NoticeBoxLogoWrap>
          <S.NoticeBoxText>동국대학교 대나무숲에 오신 것을 환영합니다!</S.NoticeBoxText>
          <S.NoticeBoxTextBlack>아래 이용사항을 읽어주신 후 제보를 외쳐주세요.</S.NoticeBoxTextBlack>
          <S.NoticeBoxTextRed>제보 내용의 모든 책임은 작성자에게 있으며 동대숲은 어떠한 책임도 입장도 가지고 있지 않습니다.</S.NoticeBoxTextRed>
          
          <S.NoticeBoxTextGreen>제보 필터 기준</S.NoticeBoxTextGreen>
          <S.NoticeBoxTextBlackSub>(1) 동국대학교 대나무숲의 취지와 부합하지 않는 글은 필터링 될 수 있습니다.</S.NoticeBoxTextBlackSub>
          <S.NoticeBoxTextBlackSub>(2) 지나친 욕설, 비방, 홍보 댓글은 사전 통보없이 삭제 및 차단될 수 있습니다.</S.NoticeBoxTextBlackSub>
          
          <S.NoticeBoxTextGreen>블라인드 기준</S.NoticeBoxTextGreen>
          <S.NoticeBoxTextBlackSub>(1) 신상 유추가 가능한 정보와 지나친 욕설은 별표로 블라인드 됩니다.(단, #니모를찾아서는 실명을 초성으로 표기합니다.)</S.NoticeBoxTextBlackSub>
          <S.NoticeBoxTextBlackSub>(2) 학교 내외의 공인에 관해서는 원색적 비난 제보가 아닌 한 블라인딩을 실시하지 않을 수 있습니다. ex) 연예인, 정치인, 총장 등</S.NoticeBoxTextBlackSub>
          <S.NoticeBoxTextBlackSub>(3) 타 커뮤니티•페이지의 명칭 및 용어가 블라인드 됩니다.(동아리 등)</S.NoticeBoxTextBlackSub>

          <S.NoticeSubmit
            onClick={()=>closeModal()}
          >확인하였습니다.</S.NoticeSubmit>
        </S.NoticeBox>
      </S.NoticeWrapper>
    </>
  );
}