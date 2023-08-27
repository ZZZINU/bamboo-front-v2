import { useRouter } from 'next/router.js'
import * as S from './Styled'
import Logo from '../image/logo.png'

export default function NoticeCard({post}) {

  const router = useRouter();

  const date = post.created_at.slice(0,10);

  return (
    <S.NoticeCardWrap onClick={()=>{router.push(`/notice/${post.id}`)}}>
      { post.images.length != 0 ? <>
        <S.NoticeImg src={post.images[0]} alt='Img' layout="responsive" width={10} height={10}/>      
      </> : <>
        <S.NoticeImg src={Logo} alt='logo' width={150} height={150}/>
      </> }
        <S.NoticeText>
          <S.NoticeDay>{date}</S.NoticeDay>
          <S.NoticeMore>더보기</S.NoticeMore>
        </S.NoticeText>

    </S.NoticeCardWrap>
  )
}