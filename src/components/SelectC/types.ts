import { ChangeEventHandler } from "react";

export interface SelectProps {
  onChange?: ChangeEventHandler<HTMLSelectElement>,
  coins?: Array<any>,
  description?: string,
  order?: Array<any>,
  currentOption?: any,
}
