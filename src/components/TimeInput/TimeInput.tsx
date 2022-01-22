import { ChangeEvent } from 'react';
import { StyledInput, StyledLabel } from './InputStyles';

export const TimeInput = ({currentDeadline, onChange} : {currentDeadline: string, onChange : (e: string) => void}) => {

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      };

    return (<>
    <StyledLabel>Enter the Deadline:</StyledLabel>
    <StyledInput type="datetime-local" id="deadlinetime" name="deadlinetime" data-testid="deadlinetime"
    value={currentDeadline} onChange={handleInputChange} />
    </>)

};