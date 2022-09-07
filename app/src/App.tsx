import React from 'react';
import { RecoilRoot } from "recoil"
import Page from "./page";
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <Page />
    </RecoilRoot>
  );
}

export default App;
