import React, { useState } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import * as S from "./Styled";

// 드롭다운 아이콘 스타일
const Dropdown = ({ currentSelected, setSelected, setPostReport }) => {
  const type = ["🎋 일반 제보", "🐠 니모 제보"];
  const [showOptions, setOptions] = useState(false);

  const handleChangeType = (type) => {
    setSelected(type);
    setPostReport(type === "🎋 일반 제보" ? "COMMON" : "NEMO");
  };

  return (
    <S.DropdownWrap>
      <S.SelectBox onClick={() => setOptions((prev) => !prev)}>
        <S.Label>{currentSelected}</S.Label>
        <S.SelectOptions show={showOptions}>
          {type.map((type) => (
            <S.Option
              key={type}
              value={type}
              onClick={() => handleChangeType(type)}
              type={type === currentSelected}
            >
              {type}
            </S.Option>
          ))}
        </S.SelectOptions>
        {/* 드롭다운 아이콘 */}
        <S.DropdownIcon show={showOptions}>
          <S.DropdownFontAwesomeIcon icon={faCaretDown} />
        </S.DropdownIcon>
      </S.SelectBox>
    </S.DropdownWrap>
  );
};

export default Dropdown;
