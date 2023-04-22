function Button({ children, onClick }) {
  return (
    <button className='w-full rounded-2xl px-[15px] py-[5px] text-white bg-linear-primary' onClick={onClick}>{children}</button>
  )
}
export default Button