"use client";
import React, { useEffect } from 'react';

function useScroller<T>(data: T[]) {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [data.length]);

    const currentItem = data[currentIndex];

    return { currentItem };
}

export default useScroller;