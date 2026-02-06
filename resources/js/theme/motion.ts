export const motion = {
    duration: {
        fast: '150ms',
        base: '300ms',
        slow: '600ms',
    },
    easing: {
        standard: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        emphasized: 'cubic-bezier(0.2, 0.9, 0.2, 1.1)',
    },
    distance: {
        sm: '8px',
        md: '14px',
        lg: '22px',
    },
} as const;

export const motionCssVars = {
    '--motion-fast': motion.duration.fast,
    '--motion-base': motion.duration.base,
    '--motion-slow': motion.duration.slow,
    '--motion-ease': motion.easing.standard,
    '--motion-ease-emphasis': motion.easing.emphasized,
    '--motion-distance-sm': motion.distance.sm,
    '--motion-distance-md': motion.distance.md,
    '--motion-distance-lg': motion.distance.lg,
} as const;
