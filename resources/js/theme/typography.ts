export const typography = {
    fontFamily: {
        heading: '"Sora", "Instrument Sans", ui-sans-serif, system-ui',
        body: '"Instrument Sans", "Sora", ui-sans-serif, system-ui',
        mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
    },
    fontSize: {
        hero: 'clamp(2.5rem, 4vw + 1rem, 4.5rem)',
        display: 'clamp(2rem, 3vw + 1rem, 3.25rem)',
        title: 'clamp(1.5rem, 1.5vw + 1rem, 2.25rem)',
        subtitle: 'clamp(1.125rem, 0.8vw + 0.9rem, 1.5rem)',
        body: '1rem',
        small: '0.875rem',
        micro: '0.75rem',
    },
    lineHeight: {
        hero: '1.05',
        display: '1.1',
        title: '1.2',
        subtitle: '1.35',
        body: '1.6',
        small: '1.5',
    },
} as const;

export const typographyCssVars = {
    '--font-heading': typography.fontFamily.heading,
    '--font-body': typography.fontFamily.body,
    '--font-mono': typography.fontFamily.mono,
    '--text-hero': typography.fontSize.hero,
    '--text-display': typography.fontSize.display,
    '--text-title': typography.fontSize.title,
    '--text-subtitle': typography.fontSize.subtitle,
    '--text-body': typography.fontSize.body,
    '--text-small': typography.fontSize.small,
    '--text-micro': typography.fontSize.micro,
    '--leading-hero': typography.lineHeight.hero,
    '--leading-display': typography.lineHeight.display,
    '--leading-title': typography.lineHeight.title,
    '--leading-subtitle': typography.lineHeight.subtitle,
    '--leading-body': typography.lineHeight.body,
    '--leading-small': typography.lineHeight.small,
} as const;
