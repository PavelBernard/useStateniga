import { useState, useEffect } from 'react';

export const AutoCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((lastCount) => lastCount + 1 / 2);
        }, 1000);

        return () => console.log("Komponenta je odpojena");
    }, []);

    return <p>Počet: {count}</p>;
};
