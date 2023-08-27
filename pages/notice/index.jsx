import NoticeCard from '@/components/notice/NoticeCard';
import * as S from '../_styled/noticeStyled'
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';


export default function Notice() {

  const [noticePosts, setNoticePosts] = useState([])
  const fetchNoticePosts = async() => {
    try{
      // dummy
      const dummy = [
          {
              id: 1,
              title: "공지다",
              content: "잠 좀 자라",
              created_at: "2023-05-22T01:29:51",
              images: [
                // 걍 사진 가져옴
                  "https://play-lh.googleusercontent.com/Kbu0747Cx3rpzHcSbtM1zDriGFG74zVbtkPmVnOKpmLCS59l7IuKD5M3MKbaq_nEaZM=w480-h960-rw"
              ]
          },
          {
              id: 2,
              title: "이미지없는공지다.",
              content: "이미지없다고",
              created_at: "2023-05-22T01:31:45",
              images: []
          },
          {
            id: 3,
            title: "이미지없는공지다.",
            content: "이미지없다고",
            created_at: "2023-05-22T01:31:45",
            images: []
        }
      ];

      setNoticePosts(dummy)
      console.log(noticePosts)
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(()=>{
    fetchNoticePosts()
  }, [])

  return (
    <S.NoticeWrap>
        <S.NoticeHeader>
            <S.NoticeHeaderIcon icon={faBell} />
            공지사항
        </S.NoticeHeader>

        <S.NoticePosts>
          {noticePosts.map((post)=>(
            <S.NoticePost key={post.id}>
              <NoticeCard
                post={post}
              />
            </S.NoticePost>
          ))}
        </S.NoticePosts>
    </S.NoticeWrap>
  )
}