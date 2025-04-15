import React, { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/toast";

export enum ToastStatus {
  Info = "",
  Success = "bg-success",
  Warning = "bg-warning",
  Error = "bg-danger",
}

const Toast = ({
  status = ToastStatus.Info,
  header = "Bootstrap",
  body = "Hello, world! This is a toast message.",
  dark = false,
  time,
  onClose,
}: React.PropsWithChildren<{
  status?: ToastStatus,
  header: ReactNode,
  body: ReactNode,
  dark?: boolean,
  time?: number
  onClose?: () => void
}>): ReactNode => {
  const styles = {
    darkBody: {
      backgroundColor: "#292B3F",
      color: "#A5ACCB"
    }
  }

  return (
    <div className="toast show d-block mt-1" role="alert" aria-live="assertive" aria-atomic="true">
      <div className={`toast-header rounded-top border-0 ${(status == ToastStatus.Info)?(dark && "bg-dark text-white"):(status)}`}>
          {(()=>{
            switch (status) {
              case ToastStatus.Info:
                return <i className="h-100 bi bi-info-square"></i>
              case ToastStatus.Success:
                return <i className="h-100 bi bi-check2-square"></i>
              case ToastStatus.Warning:
                return <i className="h-100 bi bi-exclamation-diamond"></i>
              default:
                return <i className="h-100 bi bi-bug"></i>
            }
          })()}
          <strong className="me-auto mx-1">{header}</strong>
          {time && <small>{time} mins ago</small>}
          <button type="button" className={`btn-close ${dark && "btn-close-white"}`} onClick={onClose}></button>
      </div>
      <div className={"toast-body rounded-bottom opacity-75 " + status} style={dark ? styles.darkBody : {}}>
          {body}
      </div>
    </div>
  )
}

export default Toast
