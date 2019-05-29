import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {hot} from 'react-hot-loader';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});

const Root = ({store, history}) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
);

export default hot(module)(Root);
