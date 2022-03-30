import { FC, useEffect, useRef } from "react";

import useIntersection from "@/hooks/useIntersection";

interface Props {
    onChange: (isVisible: boolean) => void;
}

const VisibilitySensor: FC<Props> = ({ children, onChange, ...rest }) => {
    const ref = useRef(null);
    const isVisible = useIntersection(ref, "-70px");

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
