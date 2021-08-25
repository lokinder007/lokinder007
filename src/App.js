// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/layout/Footer";
import Navbar from "./Components/layout/Navbar";
import  ToDoLists  from "./ToDoLists";

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
       setItems((oldItems) => {
         return oldItems.filter((arrElem, index) => {
           return index !== id;
         });
       })    
          };

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input 
          type="text" 
          placeholder="Add a Item" 
          value = {inputList}
          onChange={itemEvent} 

          />
          <button onClick={listOfItem}> + </button>

          <ol>
            {/* <li> {inputList} </li> */}

            {Items.map((itemval, index) => {
              return <ToDoLists 
              key={index}
              id={index}
              text={itemval}
              onSelect={deleteItems}
               />;
            })}
          </ol>
        </div>
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
