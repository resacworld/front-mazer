import React, { ReactNode } from 'react';

export enum ButtonSizes {
    small,
    medium,
    large,
}

export enum ButtonStatus {
    primary = "btn-primary",
    primaryOutline = "btn-outline-primary",
    secondary = "btn-secondary",
    secondaryOutline = "btn-outline-secondary",
    info = "btn-info",
    infoOutline = "btn-outline-info",
    warning = "btn-warning",
    warningOutline = "btn-outline-warning",
    danger = "btn-danger",
    dangerOutline = "btn-outline-danger",
    success = "btn-success",
    successOutline = "btn-outline-success",
    light = "btn-light",
    lightOutline = "btn-outline-light",
    dark = "btn-dark",
    darkOutline = "btn-outline-dark"
}

export default ({ 
    label, 
    status = ButtonStatus.primary, 
    isRounded = false, 
    disabled = false, 
    size = ButtonSizes.medium, 
    icon, 
    className, 
    onClick 
}: React.PropsWithChildren<{
    label: string,
    status?: ButtonStatus,
    isRounded?: boolean,
    disabled?: boolean,
    size?: ButtonSizes,
    icon?: ReactNode,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}>): ReactNode => {
    const getClassStatus = (val: ButtonStatus) => {
        return val.toString();
    }

    const setIsRounded = (val: boolean) => {
        return val ? "rounded-pill" : "";
    }

    const setDisabled = (val: boolean) => {
        return val ? "disabled" : ""
    }

    const setIcon = (val: ReactNode) => {
        return val ? "icon" : ""
    }

    const getClassSize = (val: ButtonSizes) => {
        return val.toString();
    }

    return (
        <button 
            onClick={onClick}
            className={`btn ${getClassStatus(status)} ${getClassSize(size)} ${setIsRounded(isRounded)} ${setIcon(icon)} ${setDisabled(disabled)} ${className}`}
        >
            {icon}{label}
        </button>
    );
}