import EthUsdt from '../../../assets/ethusdt.jpg'
import BtcUsdt from '../../../assets/btcusdt.jpg'
import StrategyCard from '../StrategyCard'

function StrategyTable() {
  return (
    <div className='grid grid-cols-3 gap-8 p-7 bg-white bg-opacity-10 rounded-2xl'>
      <StrategyCard symbolImage={EthUsdt} symbol={"ETH/USDT"} apr={146.8} mdd={14.6} usdt={200} balance={300}/>
      <StrategyCard symbolImage={BtcUsdt} symbol={"BTC/USDT"} apr={58.4} mdd={10.6} usdt={200} balance={300}/>
      <StrategyCard symbolImage={EthUsdt} symbol={"ETH/USDT"} apr={302.4} mdd={39.5} usdt={200} balance={300}/>
    </div>
  )
}

export default StrategyTable