import Card from '../../atoms/Card'
import Divide from '../../atoms/Divide'
import Deposit from '../../molecules/Deposit'
import Balance from '../../molecules/Balance'

function StrategyCard({ symbolImage, symbol, apr, mdd, usdt, balance }) {
  return (
    <Card>
      <img src={symbolImage} alt="symbol image" width={200} height={200} />
      <h1 className='text-green-2 font-medium text-2xl mb-1'>{symbol}</h1>
      <h2 className='text-green-1 font-medium text-xl'>APR:{apr}%</h2>
      <h2 className='text-green-1 font-medium text-xl'>MDD:{mdd}%</h2>
      <div className='w-full flex flex-col space-y-3 mt-3'>
        <Deposit />
        <Divide />
        <Balance/>
      </div>
    </Card>
  )
}

export default StrategyCard