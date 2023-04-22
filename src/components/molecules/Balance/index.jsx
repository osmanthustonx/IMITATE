import { useContractWrite, usePrepareContractWrite, useContractRead } from 'wagmi'
import { useDebounce } from 'use-debounce'
import ABI from '../../../constants/abi'
import Button from '../../atoms/Button'
import TextInput from '../../atoms/TextInput'
import { useState } from 'react'

function Balance() {
  const [amount, setAmount] = useState('')
  const [debouncedAmount] = useDebounce(amount, 500)
  const { data: balance } = useContractRead({
    address: '0x19A9fBddD53B33620B4AA82FB41967DFBE813ECD',
    abi: ABI,
    functionName: 'myBalance',
    args: ["0xFF613131cD48c30C8759F8bf0fB1547B5D8513E3"]
  })

  const { config } = usePrepareContractWrite({
    address: '0x19A9fBddD53B33620B4AA82FB41967DFBE813ECD',
    abi: ABI,
    functionName: 'withdraw',
    args: [debouncedAmount]
  })
  const { write } = useContractWrite(config)

  return (
    <div className='w-full flex items-center justify-between'>
      <div className='w-full flex items-center justify-between'>
        <div className='text-green-2 font-medium'>Balance</div>
        <TextInput
          placeholder={`Max ${balance}`}
          value={amount}
          onChange={(t) => { setAmount(t.target.value) }}
        />
        <div className='w-[100px]'>
          <Button onClick={() => {
            write()
            setAmount('')
          }}>
            Withdraw
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Balance