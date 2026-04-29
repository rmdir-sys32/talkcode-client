import { useId } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputEndButtonDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with end button</Label>
      <div className='flex rounded-md shadow-xs'>
        
      </div>
    </div>
  )
}

export default InputEndButtonDemo
