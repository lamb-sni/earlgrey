import React from 'react';
import { RecoilRoot } from "recoil"
import Page from "./page";
import "./reset.css";

function App() {
  return (
    <RecoilRoot>
      <Page />
    </RecoilRoot>
  );
}

export default App;
