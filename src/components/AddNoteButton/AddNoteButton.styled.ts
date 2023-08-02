import  styled  from 'styled-components';

export const Button = styled.button`
background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.2s ease-in-out;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #0056b3;
    }

    &:focus,
    &:active {
        outline: none;
        background-color: #0056b3;
    }
`

export const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: end;
`