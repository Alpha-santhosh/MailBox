import { createContext, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import RightSide from "./Components/RightSide";
import { Data } from "./Data";

export const GLOBAL_DATA = createContext();

function App() {
  const [inboxD, setinboxD] = useState([]);
  const [spanD, setspanD] = useState([]);
  const [trash, settrashD] = useState([]);
  const [key, setKey] = useState("");

  useEffect(() => {
    setinboxD(Data);
  }, []);

  return (
    <div className="app">
      <GLOBAL_DATA.Provider
        value={{
          inboxD,
          spanD,
          trash,
          key,
          setinboxD,
          setspanD,
          settrashD,
          setKey,
        }}
      >
        <Navbar />
        <RightSide />
      </GLOBAL_DATA.Provider>
    </div>
  );
}

export default App;
