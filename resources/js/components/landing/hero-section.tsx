import type { ReactNode } from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import Reveal from './reveal';

type Action = {
    label: string;
    href: string | { url: string };
};

type Stat = {
    label: string;
    value: string;
    description: string;
};

type HeroSectionProps = {
    eyebrow: string;
    title: ReactNode;
    subtitle: string;
    primaryAction: Action;
    secondaryAction: Action;
    stats: Stat[];
    highlights: string[];
};

const buttonBase =
    "inline-flex items-center justify-center gap-[var(--space-2)] rounded-full px-[var(--space-6)] py-[var(--space-3)] text-[length:var(--text-small)] font-semibold transition-all duration-[var(--motion-base)] ease-[var(--motion-ease)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]";

export default function HeroSection({
    eyebrow,
    title,
    subtitle,
    primaryAction,
    secondaryAction,
    stats,
    highlights,
}: HeroSectionProps) {
    const renderAction = (
        action: Action,
        className: string,
        icon?: ReactNode,
    ) => {
        if (typeof action.href === 'string') {
            return (
                <a href={action.href} className={className}>
                    {action.label}
                    {icon}
                </a>
            );
        }

        return (
            <Link href={action.href} className={className}>
                {action.label}
                {icon}
            </Link>
        );
    };

    return (
        <section
            id="hero"
            className="mx-auto flex w-full max-w-[var(--container)] scroll-mt-[var(--space-24)] flex-col gap-[var(--space-16)] px-[var(--space-6)] pb-[var(--space-24)] pt-[var(--space-12)] lg:flex-row lg:items-center lg:gap-[var(--space-20)]"
        >
            <div className="flex flex-1 flex-col gap-[var(--space-6)]">
                <Reveal>
                    <span className="inline-flex w-fit items-center gap-[var(--space-2)] rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-micro)] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                        <Sparkles className="h-3 w-3 text-[var(--color-accent)]" />
                        {eyebrow}
                    </span>
                </Reveal>
                <Reveal delay="80ms">
                    <h1 className="font-[var(--font-heading)] text-[length:var(--text-hero)] leading-[var(--leading-hero)]">
                        {title}
                    </h1>
                </Reveal>
                <Reveal delay="140ms">
                    <p className="max-w-[var(--container-narrow)] text-[length:var(--text-subtitle)] leading-[var(--leading-subtitle)] text-[var(--color-text-muted)]">
                        {subtitle}
                    </p>
                </Reveal>
                <Reveal delay="200ms" className="flex flex-wrap gap-[var(--space-3)]">
                    {renderAction(
                        primaryAction,
                        `${buttonBase} bg-[var(--color-primary)] text-white shadow-lg hover:-translate-y-[2px] hover:bg-[var(--color-primary-hover)]`,
                        <ArrowRight className="h-4 w-4" />,
                    )}
                    {renderAction(
                        secondaryAction,
                        `${buttonBase} border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-text)] hover:-translate-y-[2px]`,
                    )}
                </Reveal>
                <Reveal delay="260ms">
                    <ul className="flex flex-wrap gap-[var(--space-3)] text-[length:var(--text-small)] text-[var(--color-text-muted)]">
                        {highlights.map((item) => (
                            <li
                                key={item}
                                className="inline-flex items-center gap-[var(--space-2)] rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-[var(--space-3)] py-[var(--space-1)]"
                            >
                                <ShieldCheck className="h-4 w-4 text-[var(--color-success)]" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
            <div className="flex flex-1 flex-col gap-[var(--space-6)]">
                <Reveal>
                    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-[var(--space-6)] shadow-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[length:var(--text-small)] font-semibold text-[var(--color-text-muted)]">
                                    Wallet balance
                                </p>
                                <p className="mt-[var(--space-1)] text-[length:var(--text-title)] font-semibold">
                                    ₦28,450,900.32
                                </p>
                            </div>
                            <div className="rounded-full bg-[var(--color-secondary)]/10 px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-small)] font-semibold text-[var(--color-secondary)]">
                                +18.2% today
                            </div>
                        </div>
                        <div className="mt-[var(--space-6)] grid grid-cols-2 gap-[var(--space-4)]">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--space-4)] py-[var(--space-3)]"
                                >
                                    <p className="text-[length:var(--text-small)] font-semibold text-[var(--color-text-muted)]">
                                        {stat.label}
                                    </p>
                                    <p className="mt-[var(--space-1)] text-[length:var(--text-subtitle)] font-semibold">
                                        {stat.value}
                                    </p>
                                    <p className="mt-[var(--space-1)] text-[length:var(--text-micro)] text-[var(--color-text-muted)]">
                                        {stat.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
                <Reveal delay="140ms">
                    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-primary)] p-[var(--space-6)] text-white shadow-xl">
                        <p className="text-[length:var(--text-small)] font-semibold uppercase tracking-[0.18em] text-white/70">
                            Marketplace escrow
                        </p>
                        <h3 className="mt-[var(--space-3)] font-[var(--font-heading)] text-[length:var(--text-title)] leading-[var(--leading-title)]">
                            Hold buyer funds securely until delivery is verified.
                        </h3>
                        <p className="mt-[var(--space-3)] text-[length:var(--text-small)] text-white/80">
                            Automate dispute resolution, KYC checks, and instant
                            payouts to trusted sellers.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
