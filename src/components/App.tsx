import * as React from 'react'

export interface AppProps {
  name: string
}

export const App: React.SFC<AppProps> = props => {
  return <div>{props.name}</div>
}
