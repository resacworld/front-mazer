import React, { ReactNode } from "react";

export default ({ children }: React.PropsWithChildren<{}>): ReactNode => {
    return (
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ margin: 0 }}>
            {children}
        </div>
    );
}