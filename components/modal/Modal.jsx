import { Container, InstaFont, LogoImg, LogoText, ModalBtn, PageBtn, PageBtnProposal, PageFontawesomeIcon, PageInsta } from './Styled'
import logo from '../image/logo.png'
import { faPen, faComment, faPaperPlane, faBell } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from 'next/router';
import { useRef, useEffect } from 'react';

export default function Modal({ modalOpenHandler }) {
    const router = useRouter()

    // 모달창 밖에 눌렀을 때
    const outSection = useRef();

    const useOnClickOutside = (ref, handler) => {
        useEffect(() => {
        const listener = (e) => {
            if (!ref.current || ref.current.contains(e.target)) {
            return;
            }
            handler();
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
        });
    };

    useOnClickOutside(outSection, modalOpenHandler);

    return(
        <Container ref={outSection}>
            <ModalBtn onClick={modalOpenHandler}>
                X
            </ModalBtn>
            <LogoImg src={logo} alt='logo' />
            <LogoText>DGU-Bamboo</LogoText>
            <PageBtn href='/suggestion' onClick={modalOpenHandler}>
                <PageFontawesomeIcon icon={faPen} />
                제보하기
            </PageBtn>
            <PageBtn href='/notice' onClick={modalOpenHandler}>
                <PageFontawesomeIcon icon={faBell} />
                공지사항
            </PageBtn>
            <PageBtnProposal href='/proposal' onClick={modalOpenHandler}>
                <PageFontawesomeIcon icon={faPaperPlane} />
                건의하기
            </PageBtnProposal>
            <PageInsta onClick={()=>router.push('/dgu-bamboo-home')}>
                <InstaFont icon={faInstagram} />
                인스타 바로가기
            </PageInsta>
        </Container>
    )
}