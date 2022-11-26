import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Listrs from "./pages/listrs/Listrs";
import Single from "./pages/single/Single";
import Singlers from "./pages/singlers/Singlers";
import New from "./pages/new/New";
import { userInputs, realEstateInputs } from "./formSource"

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
        <Route path="users">
          <Route index element={<List />}/>
          <Route path=":userId" element={<Single />}/>
          <Route path="new" element={<New inputs={userInputs} title="Add new User" />}/>
        </Route>
        <Route path="realEstate">
          <Route index element={<Listrs />}/>
          <Route path=":realEstateId" element={<Singlers />}/>
          <Route path="new" element={<New inputs={realEstateInputs} title="Add new RealEstate" />}/>
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
