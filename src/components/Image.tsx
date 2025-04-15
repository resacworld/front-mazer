import React, { ReactNode } from "react";

export default ({ src }: React.PropsWithChildren<{ src: string }>): ReactNode => {
    return (
        <img className="img-fluid w-100" src={src} />
    );
}