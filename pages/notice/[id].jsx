import { useRouter } from "next/router";
import * as S from '../_styled/noticeStyled'
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

export default function NoticeDetail() {

  const router = useRouter();
  const { id } = router.query;

  const [notice, setNotice] = useState([]);

  const fetchNotice = async(id) => {
    try{
      // 일단은 더미로 ..
        // dummy
        const dummy = {
                "id": 1,
                "title": "공지다",
                "content": "잠 좀 자라",
                "created_at": "2023-05-22T01:29:51",
                "image": 
                    "https://play-lh.googleusercontent.com/Kbu0747Cx3rpzHcSbtM1zDriGFG74zVbtkPmVnOKpmLCS59l7IuKD5M3MKbaq_nEaZM=w480-h960-rw",
                "instaURL":"https://www.instagram.com/dgu_bamboo/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
        };
        setNotice(dummy)
        console.log(notice)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    fetchNotice();
  },[])

  // 날짜
  // const date = notice.created_at.split('T')[0];
  // const time = notice.created_at.split('T')[1].substr(0,5);
  // const formattedDate = date + ' ' + time;

  return (
    <S.NoticeWrap>
        <S.NoticeHeader onClick={()=>{router.push(`/notice`)}}>
            <S.NoticeHeaderIcon icon={faBell} />
            공지사항
        </S.NoticeHeader>
        <S.NoticeNum>#{notice.id?.toString().padStart(3, '0')}</S.NoticeNum>
        <S.NoticeTitle>{notice.title}</S.NoticeTitle>
        <S.NoticeDate>{notice.created_at}</S.NoticeDate>

        { notice.image && <>
            <S.NoticeImg src={notice.image} alt={notice.id} layout="responsive" width={10} height={10}/>      
        </>}
        <S.NoticeImg />
        <S.NoticeInsta onClick={()=>{router.push(`${notice.instaURL}`)}}>
            <S.NoticeInstaFont icon={faInstagram} />
            <S.NoticeInstaText>인스타에서 확인하기</S.NoticeInstaText>
        </S.NoticeInsta>
        <S.NoticeContent>
            {notice.content}
        </S.NoticeContent>
    </S.NoticeWrap>
  )
}