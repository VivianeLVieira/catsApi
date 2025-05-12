import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CatContent from "./components/CatContent";

function App() {
  return (
    <>
      <div>
        <Header />
        <CatContent />
      </div>
    </>
  );
}

export default App;
