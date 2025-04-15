import React, { ReactNode, useMemo } from "react";
import clsx from "clsx";
import "./Spinner.css";
import colors from "../constants/colors";

// constant of props
export enum SpinnerTypes {
  border,
  growing
}

export enum SpinnerSizes {
  small,
  medium,
  large
}

export default ({ type = SpinnerTypes.border, status, size = SpinnerSizes.medium }: React.PropsWithChildren<{
  type: SpinnerTypes, 
  status: colors, 
  size: SpinnerSizes
}>): ReactNode => {

  const typeDef = useMemo(() => {
    let typed;
    if (type === SpinnerTypes.border) typed = "border";
    if (type === SpinnerTypes.growing) typed = "grow";

    return typed;
  }, [type]);

  // type class
  const typeClass = useMemo(() => `spinner-${typeDef}`, [typeDef]);

  // status class by bootstrap's colors
  const statusClass = useMemo(() => (status ? `text-${status}` : null), [
    status,
  ]);

  // size class
  const sizeClass = useMemo(() => {
    if (size === SpinnerSizes.small) return `spinner-${typeDef}-sm`;
    if (size === SpinnerSizes.large) return `spinner-${typeDef}-lg`;

    return null;
  }, [size, typeDef]);

  return (
    <div className={clsx(typeClass, statusClass, sizeClass)} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
