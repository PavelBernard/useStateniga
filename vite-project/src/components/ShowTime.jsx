import { useEffect, useState } from 'react';

export const ShowTime = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        // Funkce pro aktualizaci času
        const updateTime = () => {
            setTime(new Date().toLocaleTimeString()); // Nastaví aktuální čas ve formátu HH:MM:SS
        };

        // Nastav interval pro aktualizaci času každou sekundu
        const intervalId = setInterval(updateTime, 1000);

        // Čistící funkce pro zrušení intervalu při odpojení komponenty
        return () => clearInterval(intervalId);
    }, []); // Pustí se pouze jednou při mountování komponenty

    return <p>Aktuální čas: {time}</p>;
};
