import { Homepage, Bookmarkpage, Explorepage, Login ,Signup,Notificationpage,Profilepage } from "../src/Pages/index";
import {PrivateRoute} from "../src/Components/index"
import {  Container } from "./utils/material-ui/materialComponents";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <Container>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<PrivateRoute/>} >
           <Route path="/" element={<Homepage />} />
           <Route path="explore" element={<Explorepage />} />
           <Route path="bookmarks" element={<Bookmarkpage />} />
           <Route path="notifications" element={<Notificationpage />} />
           <Route path="profile" element={<Profilepage/>} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
