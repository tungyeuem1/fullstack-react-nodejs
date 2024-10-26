import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchHelloWord = async () => {
      const res = await axios.get("http://localhost:8080/v1/api/");
      console.log("check res:", res);
    };
    fetchHelloWord();
  });
  return <>hello word</>;
}

export default App;
