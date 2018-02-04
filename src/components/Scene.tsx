import * as React from 'react'
import Iframe from 'react-iframe'

import { Apps } from './Apps'

export const Scene: React.SFC<null> = props => {
  return (
    <div>
      {/* <Apps /> */}
      <Iframe url="http://localhost:8000/appStore" />
    </div>
  )
}
