import { useRouter } from 'next/router.js'
import * as S from './Styled'
import Img from '../image/postTestImg.png'

export default function NoticeCard() {

  return (
    <S.NoticeCardWrap>
        <S.NoticeImg src={Img} alt='Img' />
        <S.NoticeText>
          <S.NoticeDay>2023-08-27</S.NoticeDay>
          <S.NoticeMore>더보기</S.NoticeMore>
        </S.NoticeText>
    </S.NoticeCardWrap>
  )
}