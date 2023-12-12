import Button from '@ui/Button'
import { Add } from 'iconsax-react'
import React from 'react'

interface ProblemsDataProps {
  id: number
  title: string
  description: string
  createdAt: Date
}


const Problems: React.FC<{openNewIdeaModal: () => void}> = ({openNewIdeaModal})=> {
  return (
      <div className='w-full flex flex-col'>
          <div className='w-fit self-end mr-12'>
          <Button onClick={openNewIdeaModal} leftIcon={<Add/>} className="text-sm leading-6 font-medium rounded-lg my-4 py-4 px-12">New Idea</Button>
          </div>
      <ul className='border-y w-full'>
        
        </ul>
    </div>
  )
}

export default Problems
