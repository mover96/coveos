import * as React from 'react'
import * as MediaQuery from 'react-responsive'

import { ResponsiveShell } from './ResponsiveShell'

export class Main extends React.Component<null, null> {
  public render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 400px)">
          <div style={{ fontSize: '1em' }}>
            <ResponsiveShell />
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 399px)">
          <div style={{ fontSize: '2.5em' }}>
            <ResponsiveShell />
          </div>
        </MediaQuery>
      </div>
    )
  }
}
