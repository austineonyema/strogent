import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import Reveal from './reveal';

type Action = {
    label: string;
    href: string | { url: string };
};

type CallToActionProps = {
    title: string;
    subtitle: string;
    primaryAction: Action;
    secondaryAction: Action;
};

const buttonBase =
    "inline-flex items-center justify-center gap-[var(--space-2)] rounded-full px-[var(--space-6)] py-[var(--space-3)] text-[length:var(--text-small)] font-semibold transition-all duration-[var(--motion-base)] ease-[var(--motion-ease)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]";

export default function CallToAction({
    title,
    subtitle,
    primaryAction,
    secondaryAction,
}: CallToActionProps) {
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
            id="cta"
            className="scroll-mt-[var(--space-24)] py-[var(--space-20)]"
        >
            <div className="mx-auto w-full max-w-[var(--container)] px-[var(--space-6)]">
                <Reveal>
                    <div className="rounded-3xl bg-[linear-gradient(135deg,var(--color-primary)_0%,var(--color-secondary)_70%)] px-[var(--space-8)] py-[var(--space-10)] text-white shadow-2xl">
                        <div className="flex flex-col gap-[var(--space-4)] lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <p className="text-[length:var(--text-small)] font-semibold uppercase tracking-[0.2em] text-white/70">
                                    Get started
                                </p>
                                <h2 className="mt-[var(--space-3)] font-[var(--font-heading)] text-[length:var(--text-display)] leading-[var(--leading-display)]">
                                    {title}
                                </h2>
                                <p className="mt-[var(--space-2)] text-[length:var(--text-small)] text-white/80">
                                    {subtitle}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-[var(--space-3)]">
                                {renderAction(
                                    primaryAction,
                                    `${buttonBase} bg-white text-[var(--color-primary)] shadow-sm hover:-translate-y-[2px]`,
                                    <ArrowRight className="h-4 w-4" />,
                                )}
                                {renderAction(
                                    secondaryAction,
                                    `${buttonBase} border border-white/40 text-white hover:-translate-y-[2px]`,
                                )}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
