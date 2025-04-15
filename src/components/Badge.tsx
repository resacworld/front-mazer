import React, { ReactNode } from "react";
import colors from "../constants/colors";

export default ({ 
    status, 
    label, 
    light, 
    className
}: React.PropsWithChildren<{
    status: colors,
    label: string,
    light: boolean ,
    className?: string
}>): ReactNode => {
    const getClassStatus = (val: boolean): string => {
        return val ? `bg-light-${status}` : `bg-${status}`;
    }

    return (
        <span className={`badge ${getClassStatus(light)} ${className}`}>
            {label}
        </span>
    );
}