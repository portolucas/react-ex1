import React, {Component} from "react";
import './App.css';
import {NavBar} from "./navBar.js";
import {Logo} from "./logo.js";
import {Search} from "./search";

function App() {
  return (
    <>
    <Logo />
    <NavBar items={['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4',]} />
    <Search />
    <NavBar items={['Section 1', 'Section2', 'Section 3', 'Section 4',]}  />
    <NavBar items={[<img src="#" alt=" "/>, <img src=" " alt=" "/>, <img src="#" alt=" "/>]}  />
    <NavBar items={[<p>Artigo</p>, <p>Artigo</p>, <p>Artigo</p> ]} />
    <NavBar items={['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5', 'Section 6', 'Section 7', 'Section 8', 'Section 9', 'Section 10', 'Section 11', 'Section 12', 'Section 13', 'Section 14', 'Section 15']} /> 
    </>
  );
}

export default App;
