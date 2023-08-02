import styled from "styled-components";

export const AddNoteForm = styled.form`
            display: flex;
            flex-direction: column;

            /* Form elements */
            label {
                margin-top: 10px;
                width: 100%;
                /* Set label width to fill the container */
            }

            input,
            select,
            button {
                padding: 8px;
                margin: 5px 0;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 14px;
                /* width: 100%; */
                /* Set input and select width to fill the container */
            }

            button {
                background-color: #007bff;
                color: #fff;
                cursor: pointer;

                &:hover {
                    background-color: #0056b3;
                }
            }
        
`