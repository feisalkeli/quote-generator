import React, { useEffect, useState } from "react";

const Main = () => {
  const [data, setData] = useState([]);

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
    <div>
      <p key={data}>{data.content}</p>
      <p key={data} style={{ color: "red" }}>
        {data.author}
      </p>
      <button onClick={fetchRandomQuote}>Generate Quote</button>
    </div>
  );
};

export default Main;
