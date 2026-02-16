import { Head } from '@inertiajs/react';
import type { CSSProperties } from 'react';
import BrandLogoIcon from '@/components/brand-logo-icon';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { colorCssVars } from '@/theme/colors';
import { motionCssVars } from '@/theme/motion';
import { spacingCssVars } from '@/theme/spacing';
import { typographyCssVars } from '@/theme/typography';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

const themeVars = {
    ...colorCssVars,
    ...spacingCssVars,
    ...typographyCssVars,
    ...motionCssVars,
} as CSSProperties;

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div
                style={themeVars}
                className="flex h-full flex-1 flex-col gap-[var(--space-6)] overflow-x-auto bg-[var(--color-surface)] p-[var(--space-6)] text-[var(--color-text)]"
            >
                <div className="flex flex-col gap-[var(--space-4)] rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-[var(--space-6)] shadow-xl md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-[var(--space-4)]">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10">
                            <BrandLogoIcon className="h-9 w-9" />
                        </div>
                        <div className="flex flex-col gap-[var(--space-1)]">
                            <p className="text-[length:var(--text-small)] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                                Strogent Dashboard
                            </p>
                            <h2 className="text-[length:var(--text-title)] font-semibold">
                                Monitor VTU, wallet, and marketplace signals.
                            </h2>
                            <p className="text-[length:var(--text-small)] text-[var(--color-text-muted)]">
                                Real-time visibility across agents, settlements,
                                and escrow activity.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-[var(--space-3)] sm:grid-cols-3">
                        {[
                            { label: 'Today volume', value: '₦4.2B' },
                            { label: 'Settlements', value: '1,208' },
                            { label: 'Escrow holds', value: '₦612M' },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--space-4)] py-[var(--space-3)]"
                            >
                                <p className="text-[length:var(--text-micro)] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                                    {item.label}
                                </p>
                                <p className="mt-[var(--space-1)] text-[length:var(--text-subtitle)] font-semibold">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid auto-rows-min gap-[var(--space-4)] md:grid-cols-3">
                    {['VTU activity', 'Marketplace ops', 'Wallet flow'].map(
                        (label) => (
                            <div
                                key={label}
                                className="relative aspect-video overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)]"
                            >
                                <div className="absolute left-[var(--space-4)] top-[var(--space-4)] z-10 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-micro)] font-semibold text-[var(--color-text-muted)]">
                                    {label}
                                </div>
                                <PlaceholderPattern className="pointer-events-none absolute inset-0 z-0 size-full stroke-[var(--color-border)] opacity-50" />
                            </div>
                        ),
                    )}
                </div>
                <div className="relative min-h-[60vh] flex-1 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
                    <div className="absolute left-[var(--space-4)] top-[var(--space-4)] z-10 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-micro)] font-semibold text-[var(--color-text-muted)]">
                        Operations overview
                    </div>
                    <PlaceholderPattern className="pointer-events-none absolute inset-0 z-0 size-full stroke-[var(--color-border)] opacity-50" />
                </div>
            </div>
        </AppLayout>
    );
}
