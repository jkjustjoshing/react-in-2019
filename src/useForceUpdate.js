import { useState } from 'react'

const useForceUpdate = () => {
  const [, update] = useState(null)

  return () => update({})
}

export default useForceUpdate
