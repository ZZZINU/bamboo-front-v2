import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5%;
`;

export const Type = styled.div`
  color: ${(props) => (props.isSelected ? "#04C96B" : "#A4A4A4")};
  font-size: 15px;
  margin: 3% 0;
  cursor: pointer;
`;

export const Suggestion = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 95%;
  margin: 5% 2.5%;
  font-size: 14px;
`;

export const SuggestionFont = styled(FontAwesomeIcon)`
  color: #fff;
  width: 14px;
`;

export const SuggestionBtn = styled.button`
  cursor: pointer;
  width: 35%;
  border: none;
  background-color: #04c96be0;
  border-radius: 20px;
  color: #fff;
  padding: 2% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 5%;
`;
