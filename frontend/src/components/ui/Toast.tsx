import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheck, FiAlertCircle } from "react-icons/fi";
import { useEffect, useState } from "react";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
}

const toastStyles = {
  success: "bg-green-50 text-green-800 border-green-500",
  error: "bg-red-50 text-red-800 border-red-500",
  info: "bg-blue-50 text-blue-800 border-blue-500"
};

const toastIcons = {
  success: <FiCheck className="w-5 h-5 text-green-500" />,
  error: <FiAlertCircle className="w-5 h-5 text-red-500" />,
  info: <FiAlertCircle className="w-5 h-5 text-blue-500" />
};

export function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={`fixed top-4 right-4 z-50 flex items-center p-4 rounded-lg border ${toastStyles[type]} shadow-lg max-w-md`}
      >
        <div className="flex items-center gap-3">
          {toastIcons[type]}
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-4 p-1 hover:opacity-70 transition-opacity"
        >
          <FiX className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export function useToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<ToastType>("info");

  const showToast = (newMessage: string, newType: ToastType = "info") => {
    setMessage(newMessage);
    setType(newType);
    setIsVisible(true);
  };

  const hideToast = () => {
    setIsVisible(false);
  };

  const ToastComponent = isVisible ? (
    <Toast message={message} type={type} onClose={hideToast} />
  ) : null;

  return { showToast, hideToast, ToastComponent };
}
