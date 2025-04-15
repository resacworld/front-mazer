import React, { ReactNode } from "react";
import "bootstrap/js/dist/alert";
import colors from "../constants/colors";

export default ({ 
    status = colors.primary, 
    heading, 
    content, 
    light, 
    isOpen, 
    toggle 
}: React.PropsWithChildren<{
    status: colors,
    heading: string,
    content: string,
    light: boolean,
    isOpen: boolean,
    toggle: React.MouseEventHandler<HTMLButtonElement>
}>): ReactNode => {
    const getClassStatus = (val: boolean) => {
        return val ? `alert-light-${status}` : `alert-${status}`;
    }

    return (
        <>
            {typeof toggle == "function" ? (
                <>
                    {isOpen ? (
                        <div className={`alert ${getClassStatus(light)} alert-dismissible fade show`} role="alert">
                            {heading ? (
                                <h4 className="alert-heading">{heading}</h4>
                            ) : null}

                            {content ? (
                                <p>{content}</p>
                            ) : null}

                            <button type="button" className="btn-close" aria-label="Close" onClick={toggle} />
                        </div>
                    ) : null}
                </>
            ) : (
                <div className={`alert ${getClassStatus(light)}`} role="alert">
                    {heading ? (
                        <h4 className="alert-heading">{heading}</h4>
                    ) : null}

                    {content ? (
                        <p>{content}</p>
                    ) : null}
                </div>
            )}
        </>
    )
}