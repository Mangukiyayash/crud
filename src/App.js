import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Adddata from './component/Adddata';
import Showdata from './component/Showdata';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1 style={{alignItems:"center",marginLeft:"45%"}}>Show Data</h1>
        <Adddata />
        <Showdata />
      </div>
    </Provider>
  );
};

export default App;
