import React, { ReactNode } from "react";
import "bootstrap/js/dist/dropdown";

export default ({ children }: React.PropsWithChildren<{}>): ReactNode => {
    // const { label, children, direction } = props;

    return (
        <div className="btn-group">
            <div className="dropdown dropup">
                {children}
            </div>
        </div>
    );
}