import React from 'react';

import {AuthProvider} from './Authcontext';
import Appnav from './Znavigator/Appnav';

function App() {
  return (
    <AuthProvider>
      <Appnav />
    </AuthProvider>
  );
}
export default App;
