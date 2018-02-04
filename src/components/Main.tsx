/// <reference path="../../react-iframe.d.ts" />

import * as React from 'react'
import Iframe from 'react-iframe'
import * as MediaQuery from 'react-responsive'
import * as openSocket from 'socket.io-client'

import { ResponsiveShell } from './ResponsiveShell'

export interface MainState {
  timestamp: string
}

const socket = openSocket('http://localhost:8000')

export class Main extends React.Component<null, MainState> {
  constructor(props: any) {
    super(props)
    subscribeToTimer((err: any, timestamp: string) =>
      this.setState({
        timestamp
      })
    )
    this.state = {
      timestamp: 'no timestamp yet'
    }
  }
  public render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 400px)">
          <div style={{ fontSize: '1em' }}>
            {this.state.timestamp}
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

const subscribeToTimer = (cb: any) => {
  socket.on('timer', (timestamp: any) => cb(null, timestamp))
  socket.emit('subscribeToTimer', 1000)
}
