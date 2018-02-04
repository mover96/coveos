import * as React from 'react'
import * as MediaQuery from 'react-responsive'

import * as openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:8000')

export class Main extends React.Component<null, null> {
  public render() {
    return (
      <div>
        <div>App Store</div>
        <div
          onClick={() => {
            socket.emit('killMe')
            console.log('here')
          }}
        >
          Kill Frame
        </div>
      </div>
    )
  }
}
