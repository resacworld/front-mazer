import React, { ReactNode } from "react";

export default ({ 
    children, 
    className
}: React.PropsWithChildren<{ 
    className?: string
}>): ReactNode => {
    return (
        <div className={`card-footer ${className}`}>
            {children}
        </div>
    );
}