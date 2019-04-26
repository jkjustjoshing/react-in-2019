import { useState } from 'react'

// This is generally a bad idea. In most cases,
// you should never need to trick React into
// re-rendering
const useForceUpdate = () => {
  const [, update] = useState(null)

  return () => update({})
}

export default useForceUpdate
