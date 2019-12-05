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
        <div>
          <Home />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
