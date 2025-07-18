import * as React from "react";
import "./App.css";

function App() {
  // const instanceId =
  //   new URLSearchParams(window.location.search).get("instance") ?? "UNKNOWN";
  const search = new URLSearchParams(window.location.search);
  const id = search.get("id") || "unknown";
  const [totalCount, setTotalCount] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [cousinCount, setCousinCount] = React.useState(0);

  React.useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "http://localhost:5173") return;

      const { type, payload } = event.data;
      console.info(`${id}: COUNTER APP -- MESSAGE RECEIVED: `, {
        type,
        payload,
      });
      setTotalCount(payload.totalCount);
      if (payload.id === id) {
        setCount(payload.value);
      }
      setCousinCount(payload.cousinCount);
    };

    window.addEventListener("message", handleMessage);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "blue", color: "white" }}>
        <h1>Counter for: {id}</h1>
        <p>Total Count: {totalCount}</p>
        <p>Count: {count}</p>
      </div>
      <div style={{ backgroundColor: "orange", color: "white" }}>
        <h1>Cousin Count</h1>
        <p>Count: {cousinCount}</p>
      </div>
    </>
  );
}

export default App;
