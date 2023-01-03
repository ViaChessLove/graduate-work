import { ChangeEventHandler } from "react";

export interface SelectProps {
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  coins?: Array<any>;
}
