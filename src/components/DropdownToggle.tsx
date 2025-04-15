import React, { ReactNode } from "react";
import colors from "../constants/colors";

export default (props: React.PropsWithChildren<{ 
    status: colors, 
    id: string
}>): ReactNode => {
    const {children, status, id} = props;
    
    return (
        <button {...props} className={`btn btn-${status} dropdown-toggle  me-1`} type="button" id={id} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {children}
        </button>
    );
}