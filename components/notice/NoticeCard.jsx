import { useRouter } from 'next/router.js'
import * as S from './Styled'
import Img from '../image/postTestImg.png'

export default function NoticeCard({post}) {

  const router = useRouter();

  const date = post.created_at.slice(0,10);

  return (
    <S.NoticeCardWrap onClick={()=>{router.push(`/notice/${post.id}`)}}>
        <S.NoticeImg src={Img} alt='Img' />
        <S.NoticeText>
          <S.NoticeDay>{date}</S.NoticeDay>
          <S.NoticeMore>더보기</S.NoticeMore>
        </S.NoticeText>

    </S.NoticeCardWrap>
  )
}