import { useEffect, useRef, useState } from "react"

const useImageLoader = (imageUrls) => {
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)
    const imageRefs = useRef([])

    useEffect(() => {
        if (imageUrls.length === 0) return;

        let loadedCount = 0;
        setLoaded(false);
        setError(false);

        const handleLoad = () => {
            loadedCount += 1;
            if (loadedCount === imageUrls.length) {
                setLoaded(true);
            }
        };

        const handleError = () => {
            setError(true);
        };

        imageRefs.current = imageUrls.map((url) => {
            const img = new Image();
            img.src = url;
            img.onload = handleLoad;
            img.onerror = handleError;
            return img;
        });
    }, [imageRefs])

    return { loaded, error, imageRefs };
}

export default useImageLoader