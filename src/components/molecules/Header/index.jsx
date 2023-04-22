import Button from '../../atoms/Button'

function Header() {
  return (
    <header className="fixed top-0 w-full flex justify-between bg-purple-4 px-10 py-4">
      <h1 className="text-center text-3xl text-white">IMITATE</h1>
      <div className='w-[180px]'>
        <Button>
          Connect Wallet
        </Button>
      </div>
    </header>
  )
}

export default Header