import { useState, useEffect } from "react";

const useMobile = () => {
    const [isMobile, setIsMobile] = useState(null);

    function handleResize() {
        setIsMobile(window.innerWidth < 768);
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    return isMobile;
};

export default useMobile;
