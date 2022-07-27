import { useEffect, useState } from "react";

export const usePosition = () => {
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    const onChange = ({ coords }) => {
        setPosition(coords);
    };

    const onError = (error) => {
        setError(error.message);
    };

    useEffect(() => {
        const geo = navigator.geolocation;

        if (!geo) {
            setError("Геолокация не поддерживается браузером");
            return;
        }

        const watcher = geo.watchPosition(onChange, onError);

        return () => geo.clearWatch(watcher);
    }, []);

    return { position, error };
};
