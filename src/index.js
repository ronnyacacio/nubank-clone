import React from 'react';
import { StatusBar } from 'react-native';

import Main from './screens/Main';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <Main />
    </>
  );
}
