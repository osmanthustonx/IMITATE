import EthUsdt from '../../../assets/ethusdt.jpg'
import BtcUsdt from '../../../assets/btcusdt.jpg'
import StrategyCard from '../../molecules/StrategyCard'

function StrategyTable() {
  return (
    <div className='grid grid-cols-3 gap-8 p-7 bg-black bg-opacity-30 rounded-2xl'>
      <StrategyCard symbolImage={EthUsdt} symbol={"ETH/USDT"} apr={126.8} mdd={16.6} usdt={200} balance={300}/>
      <StrategyCard symbolImage={BtcUsdt} symbol={"BTC/USDT"} apr={58.4} mdd={10.6} usdt={200} balance={300}/>
      <StrategyCard symbolImage={EthUsdt} symbol={"ETH/USDT"} apr={302.4} mdd={39.5} usdt={200} balance={300}/>
    </div>
  )
}

export default StrategyTable