import NoticeCard from '@/components/notice/NoticeCard';
import * as S from '../_styled/noticeStyled'
import { faBell } from "@fortawesome/free-solid-svg-icons";


export default function Notice() {

  return (
    <S.NoticeWrap>
        <S.NoticeHeader>
            <S.NoticeHeaderIcon icon={faBell} />
            공지사항
        </S.NoticeHeader>

        <S.NoticePosts>
            <S.NoticePost>
              <NoticeCard />
            </S.NoticePost>
            <S.NoticePost>
              <NoticeCard />
            </S.NoticePost>
            <S.NoticePost>
              <NoticeCard />
            </S.NoticePost>
        </S.NoticePosts>
    </S.NoticeWrap>
  )
}