import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  const elements = useRoutes(routes());
  return <div className="pt-6 pl-10">{elements}</div>;
}

export default App;
