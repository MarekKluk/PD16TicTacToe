import React from 'react';
import './index.css';
import { MyApp } from "./MyApp";
import root from "react-dom";

const App = () => <MyApp />;

root.render(<App />, document.getElementById("root"));
