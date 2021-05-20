import React from 'react'
import { LogBox } from 'react-native'

import { Provider } from 'react-redux'
import { Routes } from './src/Routes'
import { store } from './store'

export default function App() {
  React.useEffect(() => {
    LogBox.ignoreAllLogs()
  }, [])
  
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

