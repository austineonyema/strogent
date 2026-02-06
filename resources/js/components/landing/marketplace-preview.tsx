import Reveal from './reveal';

type FlowStep = {
    title: string;
    description: string;
};

type MarketplacePreviewProps = {
    title: string;
    subtitle: string;
    steps: FlowStep[];
    trustPoints: string[];
};

export default function MarketplacePreview({
    title,
    subtitle,
    steps,
    trustPoints,
}: MarketplacePreviewProps) {
    return (
        <section
            id="marketplace"
            className="mx-auto w-full max-w-[var(--container)] scroll-mt-[var(--space-24)] px-[var(--space-6)] py-[var(--space-20)]"
        >
            <div className="grid gap-[var(--space-10)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="flex flex-col gap-[var(--space-4)]">
                    <Reveal>
                        <p className="text-[length:var(--text-small)] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                            Marketplace escrow
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
                    <Reveal delay="160ms">
                        <ul className="mt-[var(--space-2)] grid gap-[var(--space-2)] text-[length:var(--text-small)] text-[var(--color-text-muted)]">
                            {trustPoints.map((point) => (
                                <li
                                    key={point}
                                    className="flex items-center gap-[var(--space-2)]"
                                >
                                    <span className="h-2 w-2 rounded-full bg-[var(--color-success)]" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
                <Reveal>
                    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-[var(--space-6)] shadow-xl">
                        <p className="text-[length:var(--text-small)] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                            Escrow flow
                        </p>
                        <div className="mt-[var(--space-6)] flex flex-col gap-[var(--space-4)]">
                            {steps.map((step, index) => (
                                <div
                                    key={step.title}
                                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-4)]"
                                >
                                    <div className="flex items-center gap-[var(--space-3)]">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-[length:var(--text-small)] font-semibold text-white">
                                            {index + 1}
                                        </span>
                                        <div>
                                            <p className="text-[length:var(--text-small)] font-semibold">
                                                {step.title}
                                            </p>
                                            <p className="mt-[var(--space-1)] text-[length:var(--text-small)] text-[var(--color-text-muted)]">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
