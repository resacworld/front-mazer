import { ComponentProps, createContext, PropsWithChildren, useCallback, useContext, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Toast from "../components/Toast";

type Params = ComponentProps<typeof Toast> & { duration?: number };
type ToastItem = ComponentProps<typeof Toast> & { id: number, timer: ReturnType<typeof setTimeout> };

const defaultPush = (toast: Params) => {}; // Méthode de base que l'on mettra dans le contexte par défaut

const ToastContext = createContext({
  pushToastRef: { current: defaultPush },
});

// On entourera notre application de ce provider pour rendre le toasts fonctionnel
export function ToastContextProvider({ children }: PropsWithChildren) {
  const pushToastRef = useRef(defaultPush);
  return (
    <ToastContext.Provider value={{ pushToastRef }}>
      <Toasts />
      {children}
    </ToastContext.Provider>
  );
}

// =========================================================================

export function Toasts() {
  const [toasts, setToasts] = useState([] as ToastItem[]);
  // On modifie la méthode du contexte
  const { pushToastRef } = useContext(ToastContext);
  pushToastRef.current = ({ duration, ...props }) => {
    // On génère un id pour différencier les messages
    const id = Date.now();
    // On sauvegarde le timer pour pouvoir l'annuler si le message est fermé
    const timer = setTimeout(() => {
      setToasts((v) => v.filter((t) => t.id !== id));
    }, (duration ?? 5) * 1000);
    const toast = { ...props, id, timer };
    setToasts((v) => [...v, toast]);
  };

  const onRemove = (toast: ToastItem) => {
    clearTimeout(toast.timer);
    setToasts((v) => v.filter((t) => t !== toast));
  };

  return (
    <div className="toast-container position-absolute bottom-0 end-0 p-1 m-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Toast {...toast} onClose={() => onRemove(toast)} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// =========================================================================

export function useToasts() {
  const { pushToastRef } = useContext(ToastContext);
  return {
    pushToast: useCallback(
      (toast: Params) => {
        pushToastRef.current(toast);
      },
      [pushToastRef]
    ),
  };
}
