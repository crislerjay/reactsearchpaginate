import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseFetch(url) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, serError] = useState(null)

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      .catch(err => {
        serError(err)
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [url])

  return { data, isLoading, error }
}

export default UseFetch