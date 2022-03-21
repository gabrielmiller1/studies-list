import { ITask } from "../../../types/task";
import style from "./Item.module.scss";

interface ItemProps extends ITask {
  handleSelectedTask: (selectedTask: ITask) => void;
}

export function Item({
  task,
  time,
  completed,
  selected,
  id,
  handleSelectedTask,
}: ItemProps) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""} ${
        completed ? style.itemCompletado : ""
      }`}
      onClick={() =>
        !completed &&
        handleSelectedTask({
          task,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.concluido} area-label="task concluida"></span>
      )}
    </li>
  );
}
