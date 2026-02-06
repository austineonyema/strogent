import type { LucideIcon } from 'lucide-react';
import Reveal from './reveal';

type FeatureItem = {
    title: string;
    description: string;
    icon: LucideIcon;
};

type VTUFeaturesProps = {
    title: string;
    subtitle: string;
    features: FeatureItem[];
};

export default function VTUFeatures({
    title,
    subtitle,
    features,
}: VTUFeaturesProps) {
    return (
        <section
            id="vtu"
            className="mx-auto w-full max-w-[var(--container)] px-[var(--space-6)] py-[var(--space-20)]"
        >
            <div className="grid gap-[var(--space-10)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="flex flex-col gap-[var(--space-4)]">
                    <Reveal>
                        <p className="text-[length:var(--text-small)] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                            VTU automation
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
                <div className="grid gap-[var(--space-4)] md:grid-cols-2">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Reveal key={feature.title} delay={`${index * 80}ms`}>
                                <div className="h-full rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-[var(--space-5)]">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-[var(--space-4)] text-[length:var(--text-subtitle)] font-semibold">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-[var(--space-2)] text-[length:var(--text-small)] text-[var(--color-text-muted)]">
                                        {feature.description}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
