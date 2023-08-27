import Image from "next/image";
import styled from "styled-components";

export const NoticeCardWrap = styled.div`
    width: 100%;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
`

export const NoticeImg = styled(Image)`
    height: 150px;
    width: auto;
    border-radius: 10px 10px 0 0;
`

export const NoticeText = styled.div`
    width: 100%;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 10px;
`

export const NoticeDay = styled.span`
    
`

export const NoticeMore = styled.span`
    color: #B6B6B6;
`