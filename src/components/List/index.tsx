import { useState } from "react";
import { ITask } from "../../types/task";
import { Item } from "./Item";
import style from "./List.module.scss";

interface listProps{
  tasks: ITask[];
  handleSelectedTask: (selectedTask: ITask) => void;
}

export function List({ tasks, handleSelectedTask }: listProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item
            key={item.id}
            task={item.task}
            time={item.time}
            selected={item.selected}
            completed={item.completed}
            id={item.id}
            handleSelectedTask={handleSelectedTask}
          />
        ))}
      </ul>
    </aside>
  );
}
