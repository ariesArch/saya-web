import { RefObject, useEffect, useState } from "react";

const useIntersection = (element: RefObject<Element>, rootMargin = "0px") => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const { current } = element;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            },
            { rootMargin }
        );

        if (current) observer.observe(current);

        return () => observer.unobserve(current as Element);
    }, [element, rootMargin]);

    return isVisible;
};

export default useIntersection;
