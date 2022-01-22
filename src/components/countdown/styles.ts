import styled from "styled-components";

export const StyledCountdown = styled.div`
  background: ${(props) => props.theme.global.body_color};
`;

export const StyledTimer = styled.div`
  border: .5px solid gray;
  width: 500;
  borderRadius: 3px;
  background: ${(props) => props.theme.global.primary_border_color};
  padding: 3;
`;

export const StyleDeadline = styled.label`
    padding: 5px 5px;
    font-family:  ${(props) => props.theme.primary_font_family.bold};
    font-size: 12pt;
    color: ${(props) => props.theme.global.error_color};
  `;

export const StyleButton = styled.button`
    color: ${(props) => props.theme.buttons.primary_button_text_color};
    background: ${(props) => props.theme.buttons.primary_button_background_color};
    font-family: ${(props) => props.theme.buttons.primary_button_font_family};
    border-radius: ${(props) => props.theme.buttons.primary_button_border_radius};
    border-color: ${(props) => props.theme.buttons.primary_button_border_color};
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    width: 110px;
    &:focus {
        outline-color: ${(props) => props.theme.buttons.primary_button_border_color};
    }
    &:hover {
        background-color:${(props) => props.theme.buttons.secondary_button_background_color};
        color: white;
    }
    &:disabled {
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
      }
`;