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
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') {
            setIsVisible(true);
            return;
        }

        const prefersReducedMotion = window.matchMedia?.(
            '(prefers-reduced-motion: reduce)',
        ).matches;

        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            setIsVisible(true);
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
    }, []);

    return (
        <div
            ref={ref}
            data-in-view={isVisible}
            style={{ '--reveal-delay': delay } as CSSProperties}
            className={`opacity-0 translate-y-[var(--motion-distance-md)] transition-all duration-[var(--motion-base)] ease-[var(--motion-ease)] delay-[var(--reveal-delay)] data-[in-view=true]:opacity-100 data-[in-view=true]:translate-y-0 motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none ${className}`}
        >
            {children}
        </div>
    );
}
