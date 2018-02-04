import * as React from 'react'
import * as MediaQuery from 'react-responsive'

export class Main extends React.Component<null, null> {
  public render() {
    return (
      <div>
        <a href="https://www.google.com" target="_parent">
          Replace parent url!
        </a>
      </div>
    )
  }
}
