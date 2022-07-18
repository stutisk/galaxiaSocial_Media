import { Homepage, Bookmarkpage, Explorepage, Login ,Signup,Profilepage,} from "../src/Pages/index";
import {PrivateRoute} from "../src/Components/index"
import {  Container } from "./utils/material-ui/materialComponents";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import React  from 'react';



function App() {
  return (
    <Container>
      <Routes>
      <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<PrivateRoute/>} >
           <Route path="/" element={<Homepage />} />
           <Route path="explore" element={<Explorepage />} />
           <Route path="bookmarks" element={<Bookmarkpage />} />
        
           <Route path="profile" element={<Profilepage/>} />
           {/* <Route path="users-profile/:userId" element={<SingleUserProfile/>} /> */}
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
