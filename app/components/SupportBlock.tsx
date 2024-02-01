import { Button } from '@/components/ui/button'
import React from 'react'

export default function SupportBlock() {
  return (
    <div className='border-2 rounded-lg my-20 p-6 flex flex-col items-center justify-center gap-4'>
        <span className='text-base text-center'>This blog is maintained by a Power Systems Engineer based in the UK. Sharing my journey to help others!</span>
        <Button variant={"default"}>
            Support me on X
        </Button>
    </div>
  )
}
