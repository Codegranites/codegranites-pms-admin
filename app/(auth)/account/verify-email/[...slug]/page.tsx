"use client"

import VerifyEmail from '@/components/auth/VerifyEmail'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {

  const params = useParams()

  console.log(params)


  return (
    <div>
      <VerifyEmail  token={`${params.slug}`}/>
    </div>
  )
}



export default page
