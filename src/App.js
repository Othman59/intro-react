import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Film from "./Pages/Film";
import Accueil from "./Pages/Accueil";
import { useEffect } from "react";
import auth from "./Services/auth";

function App() {
  useEffect(() => {
    auth.setAxiosToken();
  }, []);
  
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route element={
          <Accueil/>
          } path="/"></Route>
        <Route element={
          < Film/>
          } path="/films"></Route>
       
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
