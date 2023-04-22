import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { useDebounce } from 'use-debounce'
import ABI from '../../../constants/abi'
import Button from '../../atoms/Button'
import TextInput from '../../atoms/TextInput'
import { useState } from 'react'

function Deposit() {
  const [amount, setAmount] = useState('')
  const [debouncedAmount] = useDebounce(amount, 500)
  const { config } = usePrepareContractWrite({
    address: '0x19A9fBddD53B33620B4AA82FB41967DFBE813ECD',
    abi: ABI,
    functionName: 'deposit',
    args: [Number(debouncedAmount)]
  })
  const { write } = useContractWrite(config)
  return (
    <div className='w-full flex items-center justify-between'>
      <div className='text-green-2 font-medium'>USDT</div>
      <TextInput
        placeholder={"Deposit Amount"}
        value={amount}
        onChange={(t) => { setAmount(t.target.value) }}
      />
      <div className='w-[100px]'>
        <Button onClick={() => {
          write()
          setAmount('')
        }}>
          Deposit
        </Button>
      </div>
    </div>
  )
}

export default Deposit