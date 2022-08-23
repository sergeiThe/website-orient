import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import OtherPages from "./components/pages/OtherPages";



function App() {
  return (
    <Fragment>

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/sider" exact element={<OtherPages />} />
      </Routes>

    </Fragment>
  );
}

export default App;
