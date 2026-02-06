import Reveal from './reveal';

type TrustItem = {
    label: string;
    value: string;
    description: string;
};

type TrustBadgesProps = {
    items: TrustItem[];
};

export default function TrustBadges({ items }: TrustBadgesProps) {
    return (
        <section className="bg-[var(--color-surface-muted)] py-[var(--space-12)]">
            <div className="mx-auto flex w-full max-w-[var(--container)] flex-col gap-[var(--space-6)] px-[var(--space-6)]">
                <Reveal>
                    <p className="text-[length:var(--text-small)] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                        Built for scale and trust
                    </p>
                </Reveal>
                <div className="grid gap-[var(--space-4)] md:grid-cols-3">
                    {items.map((item, index) => (
                        <Reveal key={item.label} delay={`${index * 80}ms`}>
                            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-[var(--space-5)]">
                                <p className="text-[length:var(--text-title)] font-semibold">
                                    {item.value}
                                </p>
                                <p className="mt-[var(--space-2)] text-[length:var(--text-small)] font-semibold text-[var(--color-text)]">
                                    {item.label}
                                </p>
                                <p className="mt-[var(--space-2)] text-[length:var(--text-small)] text-[var(--color-text-muted)]">
                                    {item.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
