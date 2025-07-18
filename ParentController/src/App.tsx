import * as React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  const [countB, setCountB] = React.useState(0);
  const [countC, setCountC] = React.useState(0);
  const iframeBRef = React.useRef<HTMLIFrameElement>(null);
  const iframeCRef = React.useRef<HTMLIFrameElement>(null);

  const handleClick = (type: "inc" | "dec", id: string) => {
    const newTotalCount = type === "inc" ? count + 1 : count - 1;
    let newCountB = countB;
    let newCountC = countC;
    setCount(newTotalCount);

    if (id === "b") {
      newCountB = type === "inc" ? countB + 1 : countB - 1;
      setCountB(newCountB);
    }
    if (id === "c") {
      newCountC = type === "inc" ? countC + 1 : countC - 1;
      setCountC(newCountC);
    }
    iframeBRef.current?.contentWindow?.postMessage(
      {
        type: `COUNT_FOR_${id.toUpperCase()}`,
        payload: {
          id,
          totalCount: newTotalCount,
          value: newCountB,
          cousinCount: newCountC,
        },
      },
      "http://localhost:5174"
    );
    iframeCRef.current?.contentWindow?.postMessage(
      {
        type: `COUNT_FOR_${id.toUpperCase()}`,
        payload: {
          id,
          totalCount: newTotalCount,
          value: newCountC,
          cousinCount: newCountB,
        },
      },
      "http://localhost:5174"
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <h1>Parent Controller</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "space-between",
          width: "300px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button onClick={() => handleClick("inc", "b")}>B +</button>
          <button onClick={() => handleClick("dec", "b")}>B -</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button onClick={() => handleClick("inc", "c")}>C +</button>
          <button onClick={() => handleClick("dec", "c")}>C -</button>
        </div>
      </div>
      <p>Count: {count}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ width: "500px", height: "300px" }}>
          <iframe
            style={{ width: "100%", height: "100%" }}
            ref={iframeBRef}
            src="http://localhost:5174/?id=b"
            id="iframe-b"
          />
        </div>
        <div style={{ width: "500px", height: "300px" }}>
          <iframe
            style={{ width: "100%", height: "100%" }}
            ref={iframeCRef}
            src="http://localhost:5174/?id=c"
            id="iframe-c"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
