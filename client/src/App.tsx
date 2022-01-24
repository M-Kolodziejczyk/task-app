import React, { useState } from "react";
const apiHost = process.env.REACT_APP_API_HOST;

function App() {
  const [now, setNow] = useState();

  async function onClick() {
    const res = await fetch(`${apiHost}/now`);
    const json = await res.json();
    setNow(json);
  }
  return (
    <div className="App">
      <button onClick={onClick}>Present</button>
      {now && <p>{now}</p>}
    </div>
  );
}

export default App;
