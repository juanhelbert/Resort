import React from 'react';
import './App.css';
import { Home } from './pages/Home'
import { Header } from './components/Header/Header'
import { Rooms } from './pages/Rooms'
import { SingleRoom } from './pages/SingleRoom'
import { ErrorPage } from './pages/ErrorPage'
import { Route, Switch } from 'react-router-dom'
import client from './Contentful'

const App = () => {
  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'resort'
      })
      return console.log('response', response.items.map(i => i.fields))
    } catch (err) {
      return console.log(err)
    }
  }

  getData()

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;