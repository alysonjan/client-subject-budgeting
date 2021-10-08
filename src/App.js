import React from 'react';

import { AuthProvider } from './helpers/AuthProvider';
import RouteProvider from './routes';

function App () {
  return (
    <AuthProvider>
      <RouteProvider />
    </AuthProvider>
  )
}

export default App;