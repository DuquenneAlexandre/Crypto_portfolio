import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Get_all_portfolios from './Get_all_portfolios'
import Find_portfolo_by_id from './Find_portfolo_by_id'


class App extends Component {
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Get_all_portfolios}/>
        <Route exact path="/portfolios/:id" component={Find_portfolo_by_id} />
      </Switch>
    )
  }
}

export default App;
