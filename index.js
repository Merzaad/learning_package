import { useState, useEffect } from 'react'
const useMatchMedia = (query) => {
  const [match, setMatch] = useState(false)
  const matchMedia = window.matchMedia(query)
  useEffect(() => {
    matchMedia.onchange = () => {
      setMatch(matchMedia.matches)
    }
    return () => {
      matchMedia.onchange = null
    }
  }, [])

  return match
}

export default useMatchMedia
