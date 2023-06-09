function Card({ children }) {
  return (
    <div
    className='flex flex-col items-center bg-white bg-opacity rounded-3xl p-6 max-w-[400px]'
    >
      {children}
    </div>
  )
}

export default Card