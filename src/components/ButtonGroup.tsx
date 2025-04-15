import React, { ReactNode } from "react";

export default ({ children }: React.PropsWithChildren<{}>): ReactNode => {
    return (
        <div className="btn-group">
            {children}
        </div>
    )
}