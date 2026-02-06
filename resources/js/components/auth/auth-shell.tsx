import { Head, Link } from '@inertiajs/react';
import type { CSSProperties, PropsWithChildren, ReactNode } from 'react';
import { home } from '@/routes';
import { colorCssVars } from '@/theme/colors';
import { motionCssVars } from '@/theme/motion';
import { spacingCssVars } from '@/theme/spacing';
import { typographyCssVars } from '@/theme/typography';

type AuthShellProps = PropsWithChildren<{
    title: string;
    subtitle: string;
    footer?: ReactNode;
}>;

const themeVars = {
    ...colorCssVars,
    ...spacingCssVars,
    ...typographyCssVars,
    ...motionCssVars,
} as CSSProperties;

const featureList = [
    'Escrow-backed marketplace protection',
    'VTU automation with instant settlement',
    'KYC-ready onboarding and risk controls',
];

export default function AuthShell({
    title,
    subtitle,
    children,
    footer,
}: AuthShellProps) {
    return (
        <div
            style={themeVars}
            className="min-h-screen bg-[var(--color-surface)] font-[var(--font-body)] text-[var(--color-text)]"
        >
            <Head>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=sora:400,500,600,700&instrument-sans:400,500,600,700"
                    rel="stylesheet"
                />
            </Head>
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute top-[-15%] left-[-10%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,var(--color-glow-primary)_0%,transparent_70%)] opacity-70 blur-2xl" />
                <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,var(--color-glow-accent)_0%,transparent_70%)] opacity-60 blur-2xl" />
                <div className="mx-auto flex min-h-screen w-full max-w-[var(--container)] flex-col px-[var(--space-6)] pb-[var(--space-16)] pt-[var(--space-10)]">
                    <header className="flex items-center justify-between">
                        <Link
                            href={home()}
                            className="flex items-center gap-[var(--space-2)] text-[length:var(--text-subtitle)] font-[var(--font-heading)] font-semibold"
                        >
                            Strogent
                            <span className="rounded-full bg-[var(--color-surface-elevated)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-micro)] font-semibold text-[var(--color-text-muted)] shadow-sm">
                                Secure access
                            </span>
                        </Link>
                    </header>

                    <main className="grid flex-1 items-center gap-[var(--space-12)] pt-[var(--space-12)] lg:grid-cols-[1.05fr_0.95fr] lg:pt-[var(--space-16)]">
                        <section className="flex flex-col gap-[var(--space-6)]">
                            <p className="text-[length:var(--text-small)] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                                Strogent Access
                            </p>
                            <h1 className="font-[var(--font-heading)] text-[length:var(--text-display)] leading-[var(--leading-display)]">
                                {title}
                            </h1>
                            <p className="max-w-[420px] text-[length:var(--text-subtitle)] text-[var(--color-text-muted)]">
                                {subtitle}
                            </p>
                            <div className="grid gap-[var(--space-3)] text-[length:var(--text-small)] text-[var(--color-text-muted)]">
                                {featureList.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-[var(--space-3)] rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-[var(--space-4)] py-[var(--space-3)]"
                                    >
                                        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-success)]" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section>{children}</section>
                    </main>

                    {footer && (
                        <footer className="mt-[var(--space-12)] text-[length:var(--text-small)] text-[var(--color-text-muted)]">
                            {footer}
                        </footer>
                    )}
                </div>
            </div>
        </div>
    );
}
