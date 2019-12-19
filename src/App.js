import React from 'react';
import RootComponent from './components/RootComponent'
import './App.css';
import { Provider } from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
        <RootComponent />
    </Provider>
  );
}

export default App;
