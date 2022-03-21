import { useEffect, useState } from "react";
import { convertToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import { Clock } from "./Clock";

import style from "./Stopwatch.module.scss";

interface StopwatchProps {
  selected: ITask | undefined;
  finishTask: () => void;
}

export function Stopwatch({ selected, finishTask }: StopwatchProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(convertToSeconds(selected.time));
    }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro!</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Começar!</Button>
    </div>
  );
}
