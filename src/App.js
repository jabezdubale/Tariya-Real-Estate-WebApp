import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import Home from "./pages/home/Home";
import Edituser from "./pages/edituser/Edituser";
import Editrs from "./pages/editrs/Editrs";
import Nolog from "./pages/Nolog/Nolog";
import List from "./pages/list/List";
import Listrs from "./pages/listrs/Listrs";
import Single from "./pages/single/Single";
import Singlers from "./pages/singlers/Singlers";
import New from "./pages/new/New";
import Newrs from "./pages/newrs/Newrs";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {

  return (
    <div className="App"> 
      <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index  element={<Home/>} />
        <Route path="signin" element={<AppContainer><AccountBox /></AppContainer>} />
        <Route path="nolog" element={<Nolog/>}/>
        <Route path="users">
          <Route index element={<List />}/>
          <Route path=":userId" element={<Single />}/>
          <Route path="new" element={<New/>}/>
          <Route path="edit/:userId" element={<Edituser/>}/>
        </Route>
        <Route path="realEstate">
          <Route index element={<Listrs />}/>
          <Route path=":realEstateId" element={<Singlers />}/>
          <Route path="new" element={<Newrs/>}/>
          <Route path="edit/:realEstateId" element={<Editrs/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  {/*
    <AppContainer><AccountBox /></AppContainer>
  */}
    </div>
  );
}

export default App;
