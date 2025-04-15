import React, { ReactNode } from "react";

export default ({ children }: React.PropsWithChildren<{}>): ReactNode => {
    return (
        <a href="#" className="dropdown-item">
            {children}
        </a>
    );
}