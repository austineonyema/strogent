import { Link } from '@inertiajs/react';
import { home } from '@/routes';
import Reveal from './reveal';

type FooterLink = {
    label: string;
    href: string;
    external?: boolean;
};

type FooterProps = {
    links: FooterLink[];
};

export default function Footer({ links }: FooterProps) {
    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)] py-[var(--space-10)]">
            <div className="mx-auto flex w-full max-w-[var(--container)] flex-col gap-[var(--space-6)] px-[var(--space-6)] lg:flex-row lg:items-center lg:justify-between">
                <Reveal>
                    <div className="flex flex-col gap-[var(--space-2)]">
                        <Link
                            href={home()}
                            className="font-[var(--font-heading)] text-[length:var(--text-subtitle)] font-semibold"
                        >
                            Strogent
                        </Link>
                        <p className="text-[length:var(--text-small)] text-[var(--color-text-muted)]">
                            Fintech-grade VTU + marketplace infrastructure for
                            modern African businesses.
                        </p>
                    </div>
                </Reveal>
                <Reveal delay="120ms">
                    <div className="flex flex-wrap gap-[var(--space-4)] text-[length:var(--text-small)]">
                        {links.map((link) =>
                            link.external ? (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-semibold text-[var(--color-text-muted)] transition-colors duration-[var(--motion-fast)] hover:text-[var(--color-text)]"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="font-semibold text-[var(--color-text-muted)] transition-colors duration-[var(--motion-fast)] hover:text-[var(--color-text)]"
                                >
                                    {link.label}
                                </a>
                            ),
                        )}
                    </div>
                </Reveal>
            </div>
        </footer>
    );
}
