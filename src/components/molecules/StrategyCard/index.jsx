import React from 'react'
import Card from '../../atoms/Card'
import Button from '../../atoms/Button'
import Divide from '../../atoms/Divide'

function StrategyCard({ symbolImage, symbol, apr, mdd, usdt, balance }) {
  return (
    <Card>
      <img src={symbolImage} alt="symbol image" width={200} height={200}/>
      <h1 className='text-purple-3 font-medium text-2xl mb-1'>{symbol}</h1>
      <h2 className='text-purple-1 font-medium text-xl'>APR:{apr}%</h2>
      <h2 className='text-purple-1 font-medium text-xl'>MDD:{mdd}%</h2>
      <div className='w-full flex flex-col space-y-3 mt-3'>
        <div className='w-full flex items-center justify-between'>
          <div className='text-purple-3 font-medium'>USDT</div>
          <div>{usdt}</div>
          <div className='w-[100px]'>
            <Button>
              Deposit
            </Button>
          </div>
        </div>
        <Divide />
        <div className='w-full flex items-center justify-between'>
          <div className='text-purple-3 font-medium'>Balance</div>
          <div>{balance}</div>
          <div className='w-[100px]'>
            <Button>
              Withdraw
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default StrategyCard