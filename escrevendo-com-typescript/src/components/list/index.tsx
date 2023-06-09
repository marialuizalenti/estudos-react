import React from "react";

function List() {
  const task = [
    {
      tarefa: "React",
      tempo: "01:30:00",
    },
    {
      tarefa: "Typescript",
      tempo: "01:00:00",
    },
  ];

  return (
    <aside>
        <h2>Estudos do Dia</h2>
        <ul>
            {task.map((item, index) => (
                <li key={index}>
                    <h3> {item.tarefa} </h3>
                    <span> {item.tempo} </span>
                </li>
            ))}
        </ul>
    </aside>
  )
}
export default List;
