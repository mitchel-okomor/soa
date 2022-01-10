import React, { Suspense } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar/Navbar';
import { OpenRoutes } from './routes/publicRoutes';
import { openRoutesData } from './routes/routesData';

function App() {
  const appRoute = openRoutesData.map((route) => (
    <OpenRoutes
      exact={route.exact}
      path={route.path}
      component={route.component}
      key={route.name}
      name={route.name}
    />
  ));
  return (
    <div className='App'>
      <Suspense fallback={<div>is loading</div>}>
        <Router>
          <Navbar />
          <Switch>{appRoute}</Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
