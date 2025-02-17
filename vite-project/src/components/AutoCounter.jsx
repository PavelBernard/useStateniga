import { useState, useEffect } from 'react';

export const AutoCounter = () => {
    const [count, setCount] = useState(0);
    const [stop, setStop] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (stop) {
                setCount((lastCount) => lastCount + 1);
            }
        }, 1000);
        return () => clearInterval(interval);

        return () => console.log("Komponenta je odpojena");
    }, []);

    return(
    <>
        <ul>
            <p>Počet: {count}</p>;
            <button onClick={() => setStop(true)}>Zastav</button>
        </ul>
    </>
    );
};
