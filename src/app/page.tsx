"use client"

import Publication from '@/components'
import fetchNewsData from '@/services/fetchNewsData'
import { useState, useEffect } from 'react'

export default function Home() {

  const [newsData, setNewsData] = useState(undefined);

  const loadData = async () => {
    const response = await fetchNewsData();
    setNewsData(response?.data?.articles);
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <>
      <main>
        <Publication newsData={newsData} />
      </main>
    </>
  )
}
