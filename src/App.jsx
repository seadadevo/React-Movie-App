import React from "react";
import Header from "./Components/Header";
import Add from "./Components/Add";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WatchList from "./Components/WatchList";
import Watched from "./Components/Watched";
import ContextProvider from "./Components/context/GlobalContext";
const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<WatchList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
};

export default App;
