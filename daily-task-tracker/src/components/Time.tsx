import { useEffect, useState } from "react";

export function Time({ currentTime }: any) {
  return (
    <div className="timer-block">
      <h2>current time: {currentTime}</h2>
    </div>
  );
}
