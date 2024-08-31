import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Time } from "./components/Time";
import { Input } from "./components/Input";

function App() {
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString()
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeNow = new Date();
  const hours = timeNow.getHours();
  const isDay = (hours: number) => {
    if (hours >= 6 && hours <= 18) {
      return true;
    }
    return false;
  };

  return (
    <div className="App">
      <div className={isDay(hours) ? "day-header" : "night-header"}>
        <header className="">
          <h1>Daily-Task-Tracker</h1>
        </header>
        <div>
          <Time currentTime={currentTime} />
        </div>
        <div>
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
