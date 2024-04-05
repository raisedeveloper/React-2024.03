import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {

  const [burger, setBurger] = useState([]);   // 배열 기본값 (변수)초기화  String uid = ""; 이런 느낌
    useEffect(() => {
      axios.get('/burger/burger/Hamburger')
      .then(burger => setBurger(burger.data))
      .catch(err => console.log(err));
    }, [])
  return (
    <div>
      <h2>
        {burger.map((burger, index) => (
          <li key={index}>
            <p>BID: {burger.bid}</p>
            <p>BNAME: {burger.bname}</p>
            <p>BPRICE: {burger.bprice}</p>
            <p>BTEXT: {burger.btext}</p>
          </li>
        ))}
      </h2>
    </div>
  ) 
}