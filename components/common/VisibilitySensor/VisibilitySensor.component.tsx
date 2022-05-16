import { FC, useEffect, useRef } from "react";

import useIntersection from "@/hooks/useIntersection";

interface Props {
    onChange: (isVisible: boolean) => void;
    rootMargin?: string;
}

const VisibilitySensor: FC<Props> = ({ children, onChange, rootMargin = "-70px", ...rest }) => {
    const ref = useRef(null);
    const isVisible = useIntersection(ref, rootMargin);

    useEffect(() => {
        onChange(isVisible);
    }, [isVisible, onChange]);

    return (
        <div {...rest} ref={ref}>
            {children}
        </div>
    );
};

export default VisibilitySensor;
