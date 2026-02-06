import { Head, Link, usePage } from '@inertiajs/react';
import type { CSSProperties, PropsWithChildren } from 'react';
import { ArrowRight } from 'lucide-react';
import { dashboard, home, login, register } from '@/routes';
import type { SharedData } from '@/types';
import { colorCssVars } from '@/theme/colors';
import { spacingCssVars } from '@/theme/spacing';
import { typographyCssVars } from '@/theme/typography';
import { motionCssVars } from '@/theme/motion';

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

const navLinkClass =
    "text-[length:var(--text-small)] font-medium text-[var(--color-text-muted)] transition-colors duration-[var(--motion-fast)] hover:text-[var(--color-text)]";

const buttonBase =
    "inline-flex items-center justify-center gap-[var(--space-2)] rounded-full px-[var(--space-5)] py-[var(--space-2)] text-[length:var(--text-small)] font-semibold transition-all duration-[var(--motion-base)] ease-[var(--motion-ease)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]";

export default function PublicLayout({
    children,
    title = 'Strogent | Fintech & Marketplace Infrastructure',
    description = 'Strogent powers VTU, wallets, and marketplace infrastructure for modern African businesses.',
}: PublicLayoutProps) {
    const { auth } = usePage<SharedData>().props;
    const isAuthenticated = Boolean(auth?.user);

    return (
        <div
            style={themeVars}
            className="min-h-screen bg-[var(--color-surface)] font-[var(--font-body)] text-[var(--color-text)]"
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
                className="sr-only focus:not-sr-only focus:fixed focus:left-[var(--space-4)] focus:top-[var(--space-4)] focus:z-50 focus:rounded-full focus:bg-[var(--color-surface-elevated)] focus:px-[var(--space-4)] focus:py-[var(--space-2)] focus:text-[length:var(--text-small)] focus:font-semibold focus:shadow-lg"
            >
                Skip to content
            </a>
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,var(--color-glow-primary)_0%,transparent_65%)] opacity-70 blur-2xl" />
                <div className="pointer-events-none absolute right-[-15%] top-[10%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,var(--color-glow-accent)_0%,transparent_70%)] opacity-60 blur-2xl" />
                <header className="relative z-10">
                    <div className="mx-auto flex w-full max-w-[var(--container)] items-center justify-between px-[var(--space-6)] py-[var(--space-6)]">
                        <Link
                            href={home()}
                            className="flex items-center gap-[var(--space-2)] font-[var(--font-heading)] text-[length:var(--text-subtitle)] font-semibold"
                        >
                            Strogent
                            <span className="rounded-full bg-[var(--color-surface-elevated)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-micro)] font-semibold text-[var(--color-text-muted)] shadow-sm">
                                VTU + Marketplace
                            </span>
                        </Link>
                        <nav className="hidden items-center gap-[var(--space-6)] md:flex">
                            <a className={navLinkClass} href="#services">
                                Services
                            </a>
                            <a className={navLinkClass} href="#marketplace">
                                Marketplace
                            </a>
                            <a className={navLinkClass} href="#wallet">
                                Wallet
                            </a>
                            <a className={navLinkClass} href="#api">
                                Developers
                            </a>
                            <a className={navLinkClass} href="#download">
                                App
                            </a>
                        </nav>
                        <div className="flex items-center gap-[var(--space-3)]">
                            {isAuthenticated ? (
                                <Link
                                    href={dashboard()}
                                    className={`${buttonBase} border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-text)] shadow-sm hover:-translate-y-[2px]`}
                                >
                                    Dashboard
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className={`${buttonBase} border border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)]`}
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        href={register()}
                                        className={`${buttonBase} bg-[var(--color-primary)] text-white shadow-sm hover:-translate-y-[2px] hover:bg-[var(--color-primary-hover)]`}
                                    >
                                        Create account
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </header>
                <main id="content" className="relative z-10">
                    {children}
                </main>
            </div>
        </div>
    );
}
