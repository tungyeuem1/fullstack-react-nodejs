import { useEffect, useState } from "react";

import axios from "./axios/axios.custiomize";

function App() {
  useEffect(() => {
    const fetchHelloWord = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/v1/api/`
      );
      console.log("check res:", res);
    };
    fetchHelloWord();
  });
  return <>hello word</>;
}

export default App;
