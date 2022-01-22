import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from './components';
import { Main, Login, Register } from "./pages";

function App() {
  return (
    <Fragment>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/signin" element={<Login/>} />
          <Route exact path="/signup" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
