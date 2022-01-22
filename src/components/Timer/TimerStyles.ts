import styled from "styled-components";

export const TimerContainer = styled.div`
background-color: #337097;
padding: 10px;
`;

export const TimerCell = styled.div`
  background-color: ${(props) => props.theme.forms.background_color};
  text-align: center;
  padding: 5px;
  width: 500px;
  border-radius: 10px;
  font-size: 20pt;
  margin: auto;
  `;