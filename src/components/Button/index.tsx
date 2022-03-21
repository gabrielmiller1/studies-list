import { ReactChild, ReactNode } from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  type?: string;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <button className={style.botao} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
