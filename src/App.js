import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Main, Login } from "./pages";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
