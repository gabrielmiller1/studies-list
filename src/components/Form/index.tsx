import React, { useState } from "react";
import { ITask } from "../../types/task";
import { Button } from "../Button";
import { v4 as uuidv4 } from "uuid";

import style from "./Form.module.scss";

export function Form({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}) {
  const [task, setTask] = useState({
    task: "",
    time: "00:00",
    selected: false,
    completed: false,
    id: uuidv4(),
  });

  function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTask({
      task: "",
      time: "00:00",
      selected: false,
      completed: false,
      id: uuidv4(),
    });
    setTasks((oldTasks) => [...oldTasks, { ...task }]);
  }

  return (
    <form className={style.novaTarefa} onSubmit={handleAddTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="Oque você quer estudar ?"
          value={task.task}
          onChange={(event) => setTask({ ...task, task: event.target.value })}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          value={task.time}
          onChange={(event) => setTask({ ...task, time: event.target.value })}
          required
        />
      </div>
      <Button type="submit">Criar</Button>
    </form>
  );
}
