import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'

const style = {
  margin: 'auto',
  alignSelf: 'center',
  opacity: 0.5,
  animationDuration: '4s'
}

const Loading = React.memo(() => (
  <FontAwesomeIcon size='10x' icon={faSnowflake} spin style={style} />
))

export default Loading
