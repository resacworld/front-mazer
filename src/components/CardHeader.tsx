import React, { ReactNode } from "react";

export default ({ 
    title, 
    className 
}: React.PropsWithChildren<{
    title: string, 
    className?: string
}>): ReactNode => {
    return (
        <h4 className={`card-title ${className}`}>
            {title}
        </h4>
    );
}