import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import React from "react";
import NavBarForm from "./components/NavBarForm";
import css from "./components/css/NavBarForm.module.css";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
    </div>
  );
}

export default App;