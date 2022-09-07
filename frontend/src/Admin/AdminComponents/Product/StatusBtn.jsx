import { useState } from 'react'
import { Switch } from '@headlessui/react'
import axios from 'axios'
import { useSelector } from 'react-redux/es/exports'

export default function StatusBtn({flag , id}) {
  const Selector = useSelector((data)=> data.Reducer1)
  const [enabled, setEnabled] = useState(flag)
  async function Api(x , y){
    await axios.put(`http://localhost:5000/admin-panel/products/view/${y}`,{
      status: !x
    },
    {
      headers: {
        authorization: Selector
      }
    }).then((success)=>{
      console.log(success)
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <Switch
      checked={enabled}
      onClick={()=>{Api(enabled , id)}}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex  h-6 w-12 items-center rounded-full`}
    >
      <span
        className={`${
          enabled ? 'translate-x-7' : 'translate-x-1'
        } inline-block h-4 w-4  transform rounded-full bg-white`}
      />
    </Switch>
  )
}