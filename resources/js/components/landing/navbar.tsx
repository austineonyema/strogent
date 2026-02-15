import { Link, usePage } from '@inertiajs/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { dashboard, home, login, register } from '@/routes';
import type { SharedData } from '@/types';

const navLinkClass =
    "text-[length:var(--text-small)] font-medium text-[var(--color-text-muted)] transition-colors duration-[var(--motion-fast)] hover:text-[var(--color-text)]";

const buttonBase =
    "inline-flex items-center justify-center gap-[var(--space-2)] rounded-full px-[var(--space-5)] py-[var(--space-2)] text-[length:var(--text-small)] font-semibold transition-all duration-[var(--motion-base)] ease-[var(--motion-ease)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]";

const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Marketplace', href: '#marketplace' },
    { label: 'Wallet', href: '#wallet' },
    { label: 'Developers', href: '#api' },
    { label: 'App', href: '#download' },
];

export default function Navbar() {
    const { auth } = usePage<SharedData>().props;
    const isAuthenticated = Boolean(auth?.user);
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <div className="fixed inset-x-0 top-0 z-50">
            <div className="mx-auto w-full max-w-[var(--container)] px-[var(--space-6)] pt-[var(--space-4)]">
                <div className="flex items-center justify-between rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-[var(--space-4)] py-[var(--space-3)] shadow-lg backdrop-blur">
                    <Link
                        href={home()}
                        className="flex items-center gap-[var(--space-2)] font-[var(--font-heading)] text-[length:var(--text-body)] font-semibold md:text-[length:var(--text-subtitle)]"
                    >
                        Strogent
                        <span className="rounded-full bg-[var(--color-surface)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-micro)] font-semibold text-[var(--color-text-muted)] shadow-sm">
                            VTU + Marketplace
                        </span>
                    </Link>
                    <nav
                        aria-label="Primary"
                        className="hidden items-center gap-[var(--space-6)] md:flex"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                className={navLinkClass}
                                href={item.href}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <div className="hidden items-center gap-[var(--space-3)] md:flex">
                        {isAuthenticated ? (
                            <Link
                                href={dashboard()}
                                className={`${buttonBase} border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-sm hover:-translate-y-[2px]`}
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
                    <button
                        type="button"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-2)] text-[var(--color-text)] shadow-sm transition-all duration-[var(--motion-base)] ease-[var(--motion-ease)] hover:-translate-y-[1px] md:hidden"
                    >
                        {isOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
                <div
                    id="mobile-menu"
                    className={`mt-[var(--space-3)] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-xl transition-all duration-[var(--motion-base)] ease-[var(--motion-ease)] md:hidden ${
                        isOpen
                            ? 'opacity-100 translate-y-0'
                            : 'pointer-events-none -translate-y-2 opacity-0'
                    }`}
                >
                    <div className="flex flex-col gap-[var(--space-3)] px-[var(--space-4)] py-[var(--space-4)]">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                className={`${navLinkClass} rounded-xl px-[var(--space-2)] py-[var(--space-2)] hover:bg-[var(--color-surface)]`}
                                href={item.href}
                                onClick={closeMenu}
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="h-px bg-[var(--color-border)]" />
                        {isAuthenticated ? (
                            <Link
                                href={dashboard()}
                                className={`${buttonBase} w-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-sm`}
                                onClick={closeMenu}
                            >
                                Dashboard
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        ) : (
                            <div className="flex flex-col gap-[var(--space-2)]">
                                <Link
                                    href={login()}
                                    className={`${buttonBase} w-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]`}
                                    onClick={closeMenu}
                                >
                                    Sign in
                                </Link>
                                <Link
                                    href={register()}
                                    className={`${buttonBase} w-full bg-[var(--color-primary)] text-white shadow-sm`}
                                    onClick={closeMenu}
                                >
                                    Create account
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
