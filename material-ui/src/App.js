import './App.css';
import Feed  from './components/Feed';
import SideBar from './components/SideBar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { createTheme } from '@mui/material';
// import { theme } from './theme';
// import { Create } from '@mui/icons-material';


function App() {
const [mode, setMode] = useState("dark");

const theme = createTheme({
    palette: {
       mode: mode,

    },
});
  return (
  <ThemeProvider theme={theme}>
  <Stack 
  direction="row" 
  spacing={2} 
  className="app"
  sx ={{backgroundColor: "background.default" }} 
  >
  <SideBar setMode={setMode} mode={mode}/>
  <Divider orientation="vertical" flexItem />
  <Feed/>
</Stack>
</ThemeProvider>

  );
}

export default App;

