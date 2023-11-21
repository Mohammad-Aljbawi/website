import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./core/Router";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <Router />
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
