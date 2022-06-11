import {Homepage,Bookmarkpage,Explorepage} from "../src/Pages/index";
import {Sidebar} from "../src/Components/index";
import { Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import { ThemeProvider } from "@mui/system";
import { theme } from "./styes/theme";

function App() {
  return (
    
     <ThemeProvider theme={theme}>
<Container maxWidth="xl" 
className="App">
  
  <Sidebar/>

    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="explore" element={<Explorepage />} />
        <Route path="bookmarks" element={<Bookmarkpage />} />
   
      </Routes>
</Container>
     </ThemeProvider>

     
 
    
  );
}

export default App;

