import ReactDOM from 'react-dom/client'
import { App } from './App'
import {ThemeProvider, createTheme} from '@mui/material/styles'

const APP_THEME = createTheme({
      typography: {
        fontFamily: 'Wellfleet, monospace',
      },
      palette: {
        secondary: {
          main: '#000000', 
        }
      }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
        <ThemeProvider theme={APP_THEME}>
        <App />
        </ThemeProvider>
)
