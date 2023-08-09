const Label: React.FC<{ htmlFor: string; text: string }> = ({ htmlFor, text }) => (
  <label htmlFor={htmlFor} className='mt-3 w-full'>
    {text}
  </label>
);

export default Label