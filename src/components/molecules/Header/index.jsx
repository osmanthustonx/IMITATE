import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import Button from '../../atoms/Button'

function Header() {
  const { address, isConnected } = useAccount()
  const { connect, error } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
  const connectAction = () => isConnected ? disconnect() : connect()
  if (error) {
    alert(error.message)
  }
  return (
    <header className="fixed top-0 w-full flex justify-between bg-black-1 px-10 py-4">
      <h1 className="text-center text-3xl text-white">IMITATE</h1>
      <div className='w-[200px]'>
        <Button onClick={connectAction}>
          {/* TODO 重整會斷連 */}
          {isConnected ? `Connected ${address}` : "Connect Wallet"}
        </Button>
      </div>
    </header>
  )
}

export default Header