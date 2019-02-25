import React, { Component } from 'react'
import routes from './routes'
import { Route, Switch } from 'react-router-dom'
import NoMatch from './presentational/NoMatch'
import Navigation from './presentational/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Navigation}/>
        <Switch>
          {
            routes.map(({path, exact, component: Component, ...rest}) => (
              <Route key={path} path={path} exact={exact} render={(props) => (
                <Component {...props} />
              )} />
            )
          )}
        </Switch>

      </div>
    )
  }
}

export default App


//rest = {}
