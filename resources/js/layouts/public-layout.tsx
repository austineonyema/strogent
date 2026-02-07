import { Head } from '@inertiajs/react';
import type { CSSProperties, PropsWithChildren } from 'react';
import Navbar from '@/components/landing/navbar';
import { colorCssVars } from '@/theme/colors';
import { motionCssVars } from '@/theme/motion';
import { spacingCssVars } from '@/theme/spacing';
import { typographyCssVars } from '@/theme/typography';

type PublicLayoutProps = PropsWithChildren<{
    title?: string;
    description?: string;
}>;

const themeVars = {
    ...colorCssVars,
    ...spacingCssVars,
    ...typographyCssVars,
    ...motionCssVars,
} as CSSProperties;

export default function PublicLayout({
    children,
    title = 'Strogent | Fintech & Marketplace Infrastructure',
    description = 'Strogent powers VTU, wallets, and marketplace infrastructure for modern African businesses.',
}: PublicLayoutProps) {
    return (
        <div
            style={themeVars}
            className="min-h-screen bg-(--color-surface) font-(--font-body) text-(--color-text)"
        >
            <Head title={title}>
                <meta name="description" content={description} />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=sora:400,500,600,700&instrument-sans:400,500,600,700"
                    rel="stylesheet"
                />
            </Head>
            <a
                href="#content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-(--space-4) focus:left-[var(--space-4)] focus:z-50 focus:rounded-full focus:bg-[var(--color-surface-elevated)] focus:px-[var(--space-4)] focus:py-[var(--space-2)] focus:text-[length:var(--text-small)] focus:font-semibold focus:shadow-lg"
            >
                Skip to content
            </a>
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute top-[-10%] left-[-10%] h-105 w-105 rounded-full bg-[radial-gradient(circle,var(--color-glow-primary)_0%,transparent_65%)] opacity-70 blur-2xl" />
                <div className="pointer-events-none absolute top-[10%] right-[-15%] h-95 w-95 rounded-full bg-[radial-gradient(circle,var(--color-glow-accent)_0%,transparent_70%)] opacity-60 blur-2xl" />
                <Navbar />
                <main
                    id="content"
                    className="relative z-10 pt-[var(--space-20)] lg:pt-[var(--space-24)]"
                >
                    {children}
                </main>
            </div>
        </div>
    );
}
