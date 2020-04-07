import React from 'react';
import './App.css';
import { Home } from './pages/Home'
import { Header } from './components/Header/Header'
import { Rooms } from './pages/Rooms'
import { SingleRoom } from './pages/SingleRoom'
import { ErrorPage } from './pages/ErrorPage'
import { Route, Switch } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalContext'

const App = () => {

  return (
    <GlobalProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={ErrorPage} />
      </Switch>
    </GlobalProvider>
  );
}

export default App;