import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Clearfix } from  'react-bootstrap';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';
import Header from 'components/Header';
import Timers from 'components/Timers';

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Clearfix style={{ 'height': '50px' }} />
          <Timers />
        </div>
      </Provider>
    );
  }
}

export default App;
