import Reveal from './reveal';

type ApiIntegrationSectionProps = {
    title: string;
    subtitle: string;
    bullets: string[];
    codeSample: string[];
};

export default function APIIntegrationSection({
    title,
    subtitle,
    bullets,
    codeSample,
}: ApiIntegrationSectionProps) {
    return (
        <section
            id="api"
            className="mx-auto w-full max-w-[var(--container)] scroll-mt-[var(--space-24)] px-[var(--space-6)] py-[var(--space-20)]"
        >
            <div className="grid gap-[var(--space-10)] lg:grid-cols-[1fr_1fr] lg:items-center">
                <div className="flex flex-col gap-[var(--space-4)]">
                    <Reveal>
                        <p className="text-[length:var(--text-small)] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                            API-first platform
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
                            {bullets.map((bullet) => (
                                <li
                                    key={bullet}
                                    className="flex items-center gap-[var(--space-2)]"
                                >
                                    <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
                <Reveal>
                    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-[var(--space-6)] shadow-xl">
                        <p className="text-[length:var(--text-small)] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                            Example request
                        </p>
                        <pre className="mt-[var(--space-4)] overflow-x-auto rounded-2xl bg-[var(--color-surface)] p-[var(--space-4)] text-[length:var(--text-micro)] leading-[1.6] text-[var(--color-text-muted)]">
                            <code className="font-[var(--font-mono)]">
                                {codeSample.join('\n')}
                            </code>
                        </pre>
                        <p className="mt-[var(--space-3)] text-[length:var(--text-small)] text-[var(--color-text-muted)]">
                            Secure keys, webhooks, and idempotency baked in for
                            fast integrations.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
