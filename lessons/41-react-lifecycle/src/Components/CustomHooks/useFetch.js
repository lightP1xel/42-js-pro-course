import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState()

  useEffect(() => {
    const getData = async () => {
      const responce = await fetch(url)
      const data = await responce.json()
      setData(data)
    }
    getData()
  }, [url])
  return { data }
}

export default useFetch
