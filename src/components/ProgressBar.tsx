import React, { ReactNode } from "react";
import colors from "../constants/colors";

export default ({ status = colors.primary, value, min = 0, max = 100, label, striped, size = "" }: React.PropsWithChildren<{
  status: colors,
  value: number,
  min: number,
  max: number,
  label: boolean,
  striped: boolean,
  size: string
}>): ReactNode => {

  const setIsLabel = (val: boolean): string => {
    return val ? "progress-label" : "";
  }

  const setIsStripped = (val: boolean): string => {
    return val ? "progress-bar-striped" : "";
  }
  
  return (
    <div className={`progress progress-${status} progress-${size}`}>
      <div
        className={`progress-bar ${setIsLabel(label)} ${setIsStripped(striped)}`}
        role="progressbar"
        style={{ width: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
      ></div>
    </div>
  );
}