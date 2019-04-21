import * as React from 'react'
import * as ReactDOM from 'react-dom'
import '@/assets/styles/index.css'
import Header from '@/components/Header/index.tsx'

export interface AppProps {
  user: string
}

// 'AppProps' describes the shape of props.
// State is never set so we use the '{}' type.
class App extends React.Component<AppProps, {}> {
  static defaultProps = {
    user: 'user'
  }
  render () {
    return (
      <div>
        <Header />
        Hello {this.props.user}!
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
