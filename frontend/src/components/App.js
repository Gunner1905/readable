import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Root from './Root'
import PageNotFound from './PageNotFound'
import PostStructureDesign from './PostStructureDesign'
import FormDesign from './FormDesign'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Root} />
          <Route exact path="/:category" component={Root} />
          <Route exact path="/post/new" component={FormDesign} />
		  <Route exact path="/post/edit/:id" component={FormDesign} />
          <Route exact path="/post/:id" component={PostStructureDesign} />
          <Route path="*" component ={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App