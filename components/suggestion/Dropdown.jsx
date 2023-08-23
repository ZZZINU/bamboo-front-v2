import React, { useState } from 'react'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as S from './Styled'

// 드롭다운 아이콘 스타일

const Dropdown = ({
  currentSelected,
  setSelected,
  postReport,
  setPostReport,
}) => {
  const type = ['🎋 일반 제보', '🐠 니모 제보']
  const [showOptions, setOptions] = useState(false)

  const handleChangeType = type => {
    setSelected(type)
    setPostReport(type === '🎋 일반 제보' ? 'COMMON' : 'NEMO')
  }

  return (
    <div
      style={{
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
      }}
    >
      <S.SelectBox onClick={() => setOptions(prev => !prev)}>
        <S.Label>{currentSelected}</S.Label>
        <S.SelectOptions show={showOptions}>
          {type.map(type => (
            <S.Option
              key={type}
              value={type}
              onClick={() => handleChangeType(type)}
              className={type === currentSelected ? 'focused' : 'submenu'}
            >
              {type}
            </S.Option>
          ))}
        </S.SelectOptions>
        <S.DropdownIcon show={showOptions}>
          <FontAwesomeIcon
            icon={faCaretDown}
            style={{ color: '#04C96B' }}
            size="lg"
          />
        </S.DropdownIcon>{' '}
        {/* 드롭다운 아이콘 */}
      </S.SelectBox>
    </div>
  )
}

export default Dropdown
