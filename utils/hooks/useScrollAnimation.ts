import { useEffect, useRef, useState } from 'react';

type ObserverOptions = {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
};

/**
 * Custom hook untuk mendeteksi kapan sebuah elemen masuk ke dalam viewport.
 * Menggunakan Intersection Observer API untuk efisiensi.
 * 
 * @param {ObserverOptions} options - Opsi untuk Intersection Observer (threshold, rootMargin, etc).
 * @returns {[React.RefObject<HTMLDivElement>, boolean]} - Mengembalikan ref untuk elemen yang akan diamati dan status visibilitasnya.
 */
const useScrollAnimation = (options: ObserverOptions = { threshold: 0.1, rootMargin: '0px' }): [React.RefObject<HTMLDivElement>, boolean] => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Memicu animasi hanya sekali saat elemen pertama kali terlihat
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Berhenti mengamati setelah terlihat untuk mencegah pemicu berulang
                    if (containerRef.current) {
                        observer.unobserve(containerRef.current);
                    }
                }
            },
            options
        );

        const currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        // Cleanup function untuk berhenti mengamati saat komponen di-unmount
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [containerRef, options]);

    return [containerRef, isVisible];
};

export default useScrollAnimation;
