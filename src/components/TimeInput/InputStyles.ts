import styled from 'styled-components';

export const StyledInput = styled.input.attrs({ type: 'datetime-local' })`
    padding: 5px 10px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1em;
    `;

export const StyledLabel = styled.label`
    padding: 5px 5px;
    font-family:  ${(props) => props.theme.primary_font_family.bold};
    font-size: ${(props) => props.theme.text.primary_text_size};
    color: ${(props) => props.theme.text.primary_text_color};
  `;