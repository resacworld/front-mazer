import React, { ReactNode } from "react";

export default ({ name }: React.PropsWithChildren<{ name: string }>): ReactNode => {
    return (
        <i className={`${name} align-middle mx-2`} />
    )
}