import Reveal from './reveal';

type DownloadAppSectionProps = {
    title: string;
    subtitle: string;
    bullets: string[];
};

export default function DownloadAppSection({
    title,
    subtitle,
    bullets,
}: DownloadAppSectionProps) {
    return (
        <section
            id="download"
            className="bg-[var(--color-surface-muted)] py-[var(--space-20)]"
        >
            <div className="mx-auto w-full max-w-[var(--container)] px-[var(--space-6)]">
                <div className="grid gap-[var(--space-10)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div className="flex flex-col gap-[var(--space-4)]">
                        <Reveal>
                            <p className="text-[length:var(--text-small)] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                                Mobile access
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
                            <ul className="grid gap-[var(--space-2)] text-[length:var(--text-small)] text-[var(--color-text-muted)]">
                                {bullets.map((bullet) => (
                                    <li
                                        key={bullet}
                                        className="flex items-center gap-[var(--space-2)]"
                                    >
                                        <span className="h-2 w-2 rounded-full bg-[var(--color-secondary)]" />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                        <Reveal
                            delay="220ms"
                            className="mt-[var(--space-4)] flex flex-wrap gap-[var(--space-3)]"
                        >
                            <div className="flex items-center gap-[var(--space-2)] rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-[var(--space-4)] py-[var(--space-2)] text-[length:var(--text-small)] font-semibold">
                                Google Play
                            </div>
                            <div className="flex items-center gap-[var(--space-2)] rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-[var(--space-4)] py-[var(--space-2)] text-[length:var(--text-small)] font-semibold">
                                App Store
                            </div>
                            <div className="flex items-center gap-[var(--space-2)] rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-[var(--space-4)] py-[var(--space-2)] text-[length:var(--text-small)] font-semibold text-[var(--color-text-muted)]">
                                QR code below
                            </div>
                        </Reveal>
                    </div>
                    <Reveal>
                    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-[var(--space-6)] shadow-xl">
                            <div className="grid gap-[var(--space-6)] md:grid-cols-[0.7fr_1fr] md:items-center">
                                <div className="flex flex-col items-center gap-[var(--space-3)] rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--space-4)] py-[var(--space-6)] text-center text-[length:var(--text-small)] text-[var(--color-text-muted)]">
                                    <span className="text-[length:var(--text-micro)] font-semibold uppercase tracking-[0.2em]">
                                        QR CODE
                                    </span>
                                    {/* Placeholder QR: swap with generated QR asset */}
                                    <div className="h-24 w-24 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)]" />
                                    <span>Scan to download</span>
                                </div>
                                <div className="rounded-2xl bg-[linear-gradient(135deg,var(--color-primary)_0%,var(--color-secondary)_100%)] p-[var(--space-5)] text-white">
                                    <p className="text-[length:var(--text-small)] font-semibold uppercase tracking-[0.2em] text-white/70">
                                        Mobile preview
                                    </p>
                                    <div className="mt-[var(--space-4)] rounded-2xl bg-white/10 p-[var(--space-4)]">
                                        {/* Placeholder mockup: replace with real mobile preview */}
                                        <div className="h-40 w-full rounded-2xl border border-white/20 bg-white/10" />
                                        <p className="mt-[var(--space-3)] text-[length:var(--text-small)] text-white/80">
                                            Placeholder mockup. Replace with
                                            product screenshot when ready.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
