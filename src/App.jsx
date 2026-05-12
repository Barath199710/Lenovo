import React from 'react'
import Selfintro from './Selfintro'
import Child from "./Child";
import Counter from "./Counter";
import UserStatus from "./UserStatus";
import MultiFieldForm from "./Component/Multiform";
import ValidatedForm from "./Component/ValidatedForm";
import UserTable from "./Component/UserTable";
import ImageCard from "./Component/ImageCard";
import "./App.css";
import { FormProvider } from './FormContext';
import Form from './Form';
import ThemeToggle from './ThemeToggle';
import './index.css';
import TrafficLight from './TrafficLight';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WebDev from "./pages/WebDev";
import AppDev from "./pages/AppDev";
import UIDesign from "./pages/UIDesign";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import UserList from "./component/UserList";
import UserDetails from "./component/UserDetails";
import { useState } from 'react';
import Board from "./Components/Board";
export default function App() {
  // const [message, setMessage] = useState("");      
  // const [messages, setMessages] = useState([]);    

  // const handleSend = () => {
  //   if (message.trim() !== "") {
  //     const newMessage = {
  //       text: message,
  //       time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  //     };
  //     setMessages([...messages, newMessage]); 
  //     setMessage("");                       
  //   }
  // };
 
  // ✅ Define state at the top
  const [cells, setCells] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [status, setStatus] = useState("Player X's turn");
  const [gameActive, setGameActive] = useState(true);

  const handleClick = (index) => {
    if (cells[index] !== "" || !gameActive) return;

    const newCells = [...cells];
    newCells[index] = currentPlayer;
    setCells(newCells);

    if (checkWinner(newCells)) {
      setStatus(`Player ${currentPlayer} wins! 🎉`);
      setGameActive(false);
      return;
    }

    if (!newCells.includes("")) {
      setStatus("It's a draw!");
      setGameActive(false);
      return;
    }

    const nextPlayer = currentPlayer === "X" ? "O" : "X";
    setCurrentPlayer(nextPlayer);
    setStatus(`Player ${nextPlayer}'s turn`);
  };

  const checkWinner = (cellsArray) => {
    const winningCombos = [
      [0,1,2],[3,4,5],[6,7,8], // rows
      [0,3,6],[1,4,7],[2,5,8], // columns
      [0,4,8],[2,4,6]          // diagonals
    ];
    return winningCombos.some(combo =>
      combo.every(index => cellsArray[index] === currentPlayer)
    );
  };

  const resetGame = () => {
    setCells(Array(9).fill(""));
    setCurrentPlayer("X");
    setStatus("Player X's turn");
    setGameActive(true);
  };

  return (
    <div>
     
        {/* <Selfintro /> */}
       



    {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Child
        name="Alia"
        age={25}
        email="alia@gmail.com"
        role="Frontend Developer"
        location="New Delhi"
        phone="9030309390"
        hobby="Photography"
      />
      <Child
        name="Basha"
        age={30}
        email="basha@yahoo.com"
        role="Backend Developer"
        location="Gujarat"
        phone="987-654-3210"
        hobby="Cycling"
      />
      <Child
        name="Charles"
        age={28}
        email="charles@hotmail.com"
        role="UI Designer"
        location="Mumbai"
        phone="8090290901"
        hobby="Painting"
      />
      <Child
        name="Dimple"
        age={22}
        email="dimple@gmail.com"
        role="QA Engineer"
        location="Tutikorin"
        phone="8669020292"
        hobby="Gaming"
      />
      <Child
        name="Esther"
        age={35}
        email="esther@gmail.com"
        role="Project Manager"
        location="Sozhinganallur"
        phone="8884389090"
        hobby="Cooking"
      />
    </div>
  */}
  {/* <div style={{ textAlign: "center" }}>
      <h1>Task 3 – Counter & Conditional Rendering</h1>
      <Counter />
      <UserStatus />
      
    </div> */}
       {/* <div className="App">
      <h1>Task 4 – Multi-Field Form</h1>
      <MultiFieldForm />
    </div>  */}
 {/* <div className="App">
      <header style={{ textAlign: "center", margin: "20px 0" }}>
        <h1>Task 5 – Form with Field Validation</h1>
      </header>
      <main>
        <ValidatedForm />
      </main>
    </div> */}
      {/* <div>
        <UserTable />
      </div> */}
{/* 
     <div className="App">
      <header className="App-header">
        <h1>Task 7 – Image Upload with Comments & Like Feature</h1>
      </header>
      <main>
        <ImageCard />
      </main>
    </div> */}

 {/* <FormProvider>
      <div className="app">
        <ThemeToggle />
        <Form />
      </div>
    </FormProvider> */}

       {/* <div>
      <h1 style={{ textAlign: "center" }}>Traffic Light App</h1>
      <TrafficLight />
    </div> */}
       {/* <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />}>
          <Route path="web-development" element={<WebDev />} />
          <Route path="app-development" element={<AppDev />} />
          <Route path="ui-ux" element={<UIDesign />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router> */}
 {/* <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router> */}
   {/* <div className="chat-container">
      <h2> Chat Application
        
      </h2>
      
      <div className="input-area">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send Message</button>
      </div>

      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index} className="message">
            <span className="msg-text">{msg.text}</span>
            <span className="msg-time">({msg.time})</span>
          </p>
        ))}
      </div>
    </div> */}

     <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>XO Game (Tic Tac Toe)</h1>
      <Board cells={cells} onCellClick={handleClick} />
      <div style={{ marginTop: "20px", fontWeight: "bold" }}>{status}</div>
      <button onClick={resetGame} style={{ marginTop: "15px", padding: "8px 16px" }}>
        Restart Game
      </button>
    </div>

    </div> 
  );
}


