import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import React from "react";
import NavBarForm from "./components/NavBarForm";

// App.js
import React from 'react';
import NavBarForm from './components/NavBarForm';

const App = () => {
    return (
        <div className="App">
            {/* <NavBarSimple /> Uncomment this line to use NavBarSimple */}
            <NavBarForm />
        </div>
    );
};

export default App;