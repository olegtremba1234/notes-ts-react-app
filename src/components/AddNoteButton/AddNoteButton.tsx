import React from "react"

interface AddNoteButtonProps {
  onClick: () => void;
}

const buttonStyle = "bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer text-base transition duration-200 ease-in-out shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 active:bg-blue-600"


const AddNoteButton : React.FC<AddNoteButtonProps> = ({ onClick }) => {
    return <div className=" flex justify-end mt-5">
            <button onClick={onClick}
              className={buttonStyle}
            >
                Add note
            </button>
          </div>
}

export default AddNoteButton