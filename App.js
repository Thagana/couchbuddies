/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Root from './src/Root';
import {createStore, StoreProvider as Provider} from 'easy-peasy';
import STORE from './src/Store/model';

const store = createStore(STORE);
const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <Root />
      </Provider>
    </>
  );
};

export default App;
