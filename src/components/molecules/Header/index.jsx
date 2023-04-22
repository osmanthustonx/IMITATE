import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import Button from '../../atoms/Button'

function Header() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
  return (
    <header className="fixed top-0 w-full flex justify-between bg-[#1e1e2f] px-10 py-4">
      <h1 className="text-center text-3xl text-white">IMITATE</h1>
      <div className='w-[180px]'>
        <Button onClick={() => isConnected ? disconnect() : connect()}>
          {isConnected ? `Connected to ${address}` : "Connect Wallet"}
        </Button>
      </div>
    </header>
  )
}

export default Header