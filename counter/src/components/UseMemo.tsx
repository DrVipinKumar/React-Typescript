import React, { useState } from "react";

const UseMemo = () => {
  const [num, setNum] = useState<number>(0);
  const [color, setColor] = useState<string>("#000000");
  const changeColor = (e: React.MouseEvent) => {
    e.preventDefault();
    const color = "#" + Math.floor(Math.random() * 6177722).toString(16);
    setColor(color);
  };
  const displayTable = (): string[] => {
    let table: string[] = [];
    let j = 0;
    while (j < 2000000000) j++;
    for (let i = 1; i <= 10; i++) table.push(`${num} X ${i}=${num * i}`);
    return table;
  };
  return (
    <div>
      <form>
        <input
          type="number"
          value={num}
          name="num"
          onChange={(e) => setNum(parseInt(e.target.value))}
        />
        <button className="btn btn-primary m-2" onClick={(e) => changeColor(e)}>
          Change Color
        </button>
        <span style={{ color: color }}>
          {displayTable().map((t) => (
            <h3 key={t}>{t}</h3>
          ))}
        </span>
      </form>
    </div>
  );
};

export default UseMemo;
