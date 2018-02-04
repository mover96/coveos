import * as React from 'react'

import { Scene } from './Scene'

export const ResponsiveShell: React.SFC<null> = props => {
  return (
    <div style={{ fontSize: '1em' }}>
      <Scene />
    </div>
  )
}
