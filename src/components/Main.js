import React, { useEffect, useState } from "react";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.quotable.io/random", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <button></button>;
    </div>
  );
};

export default Main;
