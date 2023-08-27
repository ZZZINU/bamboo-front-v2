import { faSearch } from '@fortawesome/free-solid-svg-icons'
import * as S from './Styled.jsx'
import { useState } from 'react';

export default function Search() {

  const [search, setSearch] = useState('');
  
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  const handleSubmit = (event) => {
    console.log(search)
  }
    
  return (
    <S.SearchContainer onSubmit={handleSubmit}>
      <S.SearchText
        placeholder='검색어를 입력해주세요'
        value={search}
        onChange={handleSearchChange}
      />
      <S.SearchBtn>
        <S.SearchFont icon={faSearch}/>
      </S.SearchBtn>
    </S.SearchContainer>
  )
}