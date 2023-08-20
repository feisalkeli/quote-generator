import React, { useEffect, useState } from "react";
import "./Main.css";

const Main = () => {
  const [data, setData] = useState([]);
  //Fetch Random Quote
  const fetchRandomQuote = () => {
    fetch("https://api.quotable.io/random", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setData({
          content: data.content,
          author: data.author,
        })
      );
  };
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <p className="heading">{data.content}</p>
        <p className="heading" style={{ color: "red" }}>
          {data.author}
        </p>
        <button onClick={fetchRandomQuote} className="button">
          <span>Generate Quote</span>
        </button>
      </div>
    </div>
    //
    //   <p style={{ color: "red" }}>{data.author}</p>
    //   <button onClick={fetchRandomQuote}>Generate Quote</button>
  );
};

export default Main;
