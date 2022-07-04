import type { NextPage } from 'next'
import { useEffect } from 'react'

import { Top } from '@/components/pages/Top/'

const TopPage: NextPage = () => {
  useEffect(() => {
    fetch('/csr')
      .then((res) => res.json())
      .then((res) => console.log(res))
  })

  return <Top />
}

export default TopPage
