import React, { ReactNode } from "react";

export default ({ 
    item, 
    className
}: React.PropsWithChildren<{
    item: Array<{ label: string, active: boolean}>, 
    className?: string
}>): ReactNode => {
    // TODO : add custom class item

    const isActive = (val: boolean) => {
        return val ? "active" : "";
    }

    return (
        <nav className={`breadcrumb ${className}`}>
            {item.map((v, i) => (
                <li key={i} className={`breadcrumb-item ${isActive(v.active)}`}>
                    {v.active ? (
                        <>{v.label}</>
                    ) : (
                        <a href="#">{v.label}</a>
                    )}
                </li>
            ))}
        </nav>
    );
}