import React from 'react';
import Header from './Header';
import Home from './Home';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />

          <Home />

      </div>
    </ThemeProvider>
  );
}

export default App;
