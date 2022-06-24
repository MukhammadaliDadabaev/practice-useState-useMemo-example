import React, { useState, useMemo } from "react";
import ChildMessage from "./components/ChildMessage";

import "./App.css";

function App() {
  // STATE
  const [messages, setMessage] = useState(0);

  // FUNCTION
  function addMessage() {
    setMessage((prev) => prev + 1);
  }
  function delMessage() {
    setMessage((prev) => prev - 1);
  }

  // BU useMemo PAGE-LARDAGI ISHGA TA`SIR QILDIRMAYDI
  const childMessage = useMemo(() => {
    return <ChildMessage />;
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="title">
          <h1 className="mt-0 text-center">MESSAGE USERS</h1>
          <hr />
          <div>
            <a href="!#" className=" position-relative">
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {messages}
              </span>
            </a>
            <h2>
              <i className="fa-solid fa-message"></i>
              MESSAGE : <b className="text-dark">{messages}</b>
            </h2>
          </div>
          <hr />
          <ChildMessage />
          {childMessage}
          <hr />
          <button
            type="button"
            className="btn btn-primary"
            onClick={addMessage}
          >
            ADDED <span className="badge text-bg-danger">{messages}</span>
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={delMessage}
          >
            ADDED <span className="badge text-bg-danger">{messages}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
