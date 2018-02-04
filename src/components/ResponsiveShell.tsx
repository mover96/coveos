/// <reference path="../../react-iframe.d.ts" />

import * as React from 'react'
import Iframe from 'react-iframe'
import * as openSocket from 'socket.io-client'

import { Apps } from './Apps'

export interface ResponsiveState {
  renderFrame: boolean
}

const socket = openSocket('http://localhost:8000/')

export class ResponsiveShell extends React.Component<null, ResponsiveState> {
  constructor(props: any) {
    super(props)
    subscribeToKillFrame((err: any) => {
      console.log('made it')
      this.setState({
        renderFrame: false
      })
    })
    this.state = {
      renderFrame: false
    }
  }

  public render() {
    let el = (
      <div
        onClick={() => {
          console.log('ay bb')
          this.setState({ renderFrame: true })
        }}
      >
        Start Frame
      </div>
    )
    if (this.state.renderFrame) {
      el = (
        <div
          onClick={() => {
            socket.emit('killMe', socket.id)
          }}
        >
          autokill
          <Iframe url="http://localhost:8000/appStore" />
        </div>
      )
    }
    return <div>{el}</div>
  }
}

const subscribeToKillFrame = (cb: any) => {
  console.log('subbing')
  socket.on('killFrame', () => {
    console.log('about to call cb')
    cb()
  })
}
