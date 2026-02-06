import type { LucideIcon } from 'lucide-react';
import Reveal from './reveal';

type ServiceItem = {
    name: string;
    description: string;
    icon: LucideIcon;
};

type ServicesOverviewProps = {
    title: string;
    subtitle: string;
    services: ServiceItem[];
};

export default function ServicesOverview({
    title,
    subtitle,
    services,
}: ServicesOverviewProps) {
    return (
        <section
            id="services"
            className="mx-auto w-full max-w-[var(--container)] px-[var(--space-6)] py-[var(--space-20)]"
        >
            <div className="flex flex-col gap-[var(--space-4)]">
                <Reveal>
                    <p className="text-[length:var(--text-small)] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                        Everything your customers need
                    </p>
                </Reveal>
                <Reveal delay="80ms">
                    <h2 className="font-[var(--font-heading)] text-[length:var(--text-display)] leading-[var(--leading-display)]">
                        {title}
                    </h2>
                </Reveal>
                <Reveal delay="120ms">
                    <p className="max-w-[var(--container-narrow)] text-[length:var(--text-subtitle)] text-[var(--color-text-muted)]">
                        {subtitle}
                    </p>
                </Reveal>
            </div>
            <div className="mt-[var(--space-12)] grid gap-[var(--space-5)] md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => {
                    const Icon = service.icon;

                    return (
                        <Reveal key={service.name} delay={`${index * 70}ms`}>
                            <div className="group h-full rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-[var(--space-5)] transition-all duration-[var(--motion-base)] ease-[var(--motion-ease)] hover:-translate-y-[4px] hover:shadow-xl">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mt-[var(--space-4)] text-[length:var(--text-subtitle)] font-semibold">
                                    {service.name}
                                </h3>
                                <p className="mt-[var(--space-2)] text-[length:var(--text-small)] text-[var(--color-text-muted)]">
                                    {service.description}
                                </p>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
