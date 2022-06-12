import { Homepage, Bookmarkpage, Explorepage } from "../src/Pages/index";
import { Sidebar } from "../src/Components/index";
import {Grid,Container} from "./utils/material-ui/materialComponents";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import { theme } from "./styes/theme";




function App() {
  return (
    <Container>
    <Grid container spacing={4} maxWidth="xl"  className="App" >
      <ThemeProvider theme={theme}>
        <Grid item xs >
        
            <Sidebar />
        
        </Grid>
        <Grid item xs={6}>
          
         <Homepage/>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="explore" element={<Explorepage />} />
              <Route path="bookmarks" element={<Bookmarkpage />} />
            </Routes>
          
        </Grid>
        <Grid item xs>
      
            <Sidebar />
         
        </Grid>
      </ThemeProvider>
    </Grid>
    </Container>
  );
}

export default App;
