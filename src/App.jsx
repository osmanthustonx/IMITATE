import './App.css'
import Header from './components/molecules/Header'
import StrategyTable from './components/organisms/StrategyTable'

function App() {
  return (
    <div className='bg-black-2 h-screen'>
      <div className="flex justify-center items-center bg-[url('./assets/bg.svg')] h-screen">
        <Header />
        <div className='flex flex-col items-center space-y-10'>
          <div className='text-white text-5xl font-medium'>Select Strategy</div>
          <StrategyTable />
        </div>
      </div>
    </div>
  )
}

export default App
