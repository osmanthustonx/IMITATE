function TextInput({ value, placeholder, onChange }) {
  return (
    <input type='text' className="text-center outline-0" value={value} placeholder={placeholder} onChange={onChange} />
  )
}

export default TextInput