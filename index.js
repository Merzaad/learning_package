import { useState } from 'react'
const useMediaQuery = (query) => {
  const [is, setIs] = useState(false)
  window.matchMedia(query).onchange = () => {
    setIs(window.matchMedia(query).matches)
  }
  return is
}

export default useMediaQuery
