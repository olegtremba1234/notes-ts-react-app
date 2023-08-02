import React from "react"
import { Button, ButtonContainer } from './AddNoteButton.styled'

interface AddNoteButtonProps {
  onClick: () => void;
}

const AddNoteButton : React.FC<AddNoteButtonProps> = ({ onClick }) => {
    return <ButtonContainer>
        <Button onClick={onClick}>Add note</Button>
        </ButtonContainer>
}

export default AddNoteButton