import React from 'react';
import { RecoilRoot } from "recoil"
import Page from "./page";
import "./reset.css";

function App() {
  React.useEffect(() => {
    document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
  }, []);

  return (
    <RecoilRoot>
      <Page />
    </RecoilRoot>
  );
}

export default App;
