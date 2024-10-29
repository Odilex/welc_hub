// File: components/ui/use-toast.ts
import { useState } from 'react';

const useToast = () => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message) => {
        setToasts([...toasts, { message }]);
        setTimeout(() => {
            setToasts(toasts => toasts.filter(t => t.message !== message));
        }, 3000);
    };

    return { toasts, addToast };
};

export default useToast;