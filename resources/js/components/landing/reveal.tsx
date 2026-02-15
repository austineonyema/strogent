import type { CSSProperties, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: string;
};

export default function Reveal({
    children,
    className = '',
    delay = '0ms',
}: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(() => {
        if (typeof window === 'undefined') {
            return true;
        }

        const prefersReducedMotion = window.matchMedia?.(
            '(prefers-reduced-motion: reduce)',
        ).matches;

        return prefersReducedMotion || !('IntersectionObserver' in window);
    });

    useEffect(() => {
        if (isVisible || typeof window === 'undefined') {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.2 },
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    return (
        <div
            ref={ref}
            data-in-view={isVisible}
            style={{ '--reveal-delay': delay } as CSSProperties}
            className={`translate-y-(--motion-distance-md) opacity-0 transition-all delay-(--reveal-delay) duration-(--motion-base) ease-(--motion-ease) data-[in-view=true]:translate-y-0 data-[in-view=true]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${className}`}
        >
            {children}
        </div>
    );
}
