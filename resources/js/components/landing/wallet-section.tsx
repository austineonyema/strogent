import type { LucideIcon } from 'lucide-react';
import Reveal from './reveal';

type WalletFeature = {
    title: string;
    description: string;
    icon: LucideIcon;
};

type WalletSectionProps = {
    title: string;
    subtitle: string;
    features: WalletFeature[];
};

export default function WalletSection({
    title,
    subtitle,
    features,
}: WalletSectionProps) {
    return (
        <section
            id="wallet"
            className="bg-[var(--color-surface-muted)] py-[var(--space-20)]"
        >
            <div className="mx-auto w-full max-w-[var(--container)] px-[var(--space-6)]">
                <div className="grid gap-[var(--space-10)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div className="flex flex-col gap-[var(--space-4)]">
                        <Reveal>
                            <p className="text-[length:var(--text-small)] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                                Wallet & payments
                            </p>
                        </Reveal>
                        <Reveal delay="80ms">
                            <h2 className="font-[var(--font-heading)] text-[length:var(--text-display)] leading-[var(--leading-display)]">
                                {title}
                            </h2>
                        </Reveal>
                        <Reveal delay="120ms">
                            <p className="text-[length:var(--text-subtitle)] text-[var(--color-text-muted)]">
                                {subtitle}
                            </p>
                        </Reveal>
                    </div>
                    <div className="grid gap-[var(--space-4)]">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <Reveal
                                    key={feature.title}
                                    delay={`${index * 90}ms`}
                                >
                                    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-[var(--space-5)]">
                                        <div className="flex items-center gap-[var(--space-4)]">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="text-[length:var(--text-subtitle)] font-semibold">
                                                    {feature.title}
                                                </p>
                                                <p className="mt-[var(--space-1)] text-[length:var(--text-small)] text-[var(--color-text-muted)]">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
