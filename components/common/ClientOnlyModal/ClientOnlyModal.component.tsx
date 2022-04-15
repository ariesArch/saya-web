import { ReactNode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const ClientOnlyModal = ({ children }: { children: ReactNode }) => {
    const ref = useRef();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // @ts-ignore
        ref.current = document.querySelector("body");
        setMounted(true);
    }, []);

    // @ts-ignore
    return mounted ? ReactDOM.createPortal(children, ref.current) : null;
};

export default ClientOnlyModal;
