import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SelectBox = styled.div`
  width: 280px;
  padding: 12px;
  padding-right: 20px;
  border-radius: 5px;
  border: 1px solid #c6c6c6;
  background-color: #ffffff;
  align-self: center;
  cursor: pointer;
  display: flex;
  font-size: 13px;
  align-items: center;
  position: relative;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5px;
  height: 25px;
  line-height: 25px;
  width: 220px;
`;

export const DropdownIcon = styled.span`
  margin-left: 25px;
  display: inline-flex;
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  ${(props) => props.show && `transform: rotate(180deg); `}
`;

export const DropdownFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #04c96b;
  width: 10px;
`;

export const SelectOptions = styled.ul`
  position: absolute;
  margin-top: 40px;
  list-style: none;
  width: 275px;
  margin-left: -10px;
  overflow: hidden;
  height: 95px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  border-radius: 5px;
  background-color: #ffffff;
  color: #282828;
  top: 20%;
`;

export const Option = styled.li`
  font-size: 13px;
  height: 45px;
  transition: background-color 0.2s ease-in;
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: flex-start;
  padding-left: 24px;
  border: 1px solid #c6c6c6;
  background: ${(props) => (props.type ? "#e8ffee" : "")};
  color: ${(props) => (props.type ? "#04c96b" : "")};

  &:hover {
    background: #e8ffee;
    color: #04c96b;
  }
`;

export const DropdownWrap = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
