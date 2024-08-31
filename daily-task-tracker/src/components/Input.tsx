import { useState } from "react";

export function Input() {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) && Number(value) >= 0 && Number(value) <= 23) {
      setHours(Number(value));
    }
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) && Number(value) >= 0 && Number(value) <= 59) {
      setMinutes(Number(value));
    }
  };
  return (
    <div className="input-block">
      <div style={{ display: "flex" }}>
        Task Name:
        <input type="text" />
      </div>

      <div style={{ display: "flex" }}>
        Time Limit:
        <div>
          <input
            type="text"
            value={hours}
            onChange={handleHoursChange}
            placeholder="HH"
            style={{ width: "40px", marginRight: "5px" }}
            maxLength={2}
          />
          Hour :
          <input
            type="text"
            value={minutes}
            onChange={handleMinutesChange}
            placeholder="MM"
            style={{ width: "40px", marginLeft: "5px" }}
            maxLength={2}
          />
          Min
        </div>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </div>
  );
}
