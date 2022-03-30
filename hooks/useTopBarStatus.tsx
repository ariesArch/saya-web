import { useEffect, useState } from "react";

import { useScrollPosition } from "@/hooks/useScrollPosition";

const useTopBarStatus = () => {
    const [isFloating, setIsFloating] = useState<boolean>(false);
    const [isHidden, setIsHidden] = useState<boolean>(false);

    const scrollPosition = useScrollPosition();

    useEffect(() => {
        if (Math.abs(scrollPosition) > 100) {
            if (!isFloating) {
                setIsHidden(true);
                setTimeout(() => {
                    setIsHidden(false);
                    setIsFloating(true);
                }, 100);
            }
        } else {
            setIsFloating(false);
        }
    }, [isFloating, scrollPosition]);

    return { isFloating, isHidden };
};

export default useTopBarStatus;
