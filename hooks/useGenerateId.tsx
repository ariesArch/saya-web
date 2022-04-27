import { useEffect, useLayoutEffect, useState } from "react";

import { generateUniqueId } from "@/utils/index";

const useGenerateId = () => {
    const [uniqueId, setUniqueId] = useState<string>("");
    const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

    useIsomorphicLayoutEffect(() => {
        setUniqueId(generateUniqueId());
    }, []);

    return uniqueId;
};

export default useGenerateId;
