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
            공지사항 카드
            </S.NoticePost>
            <S.NoticePost>
            공지사항 카드
            </S.NoticePost>
            <S.NoticePost>
            공지사항 카드
            </S.NoticePost>
        </S.NoticePosts>
    </S.NoticeWrap>
  )
}