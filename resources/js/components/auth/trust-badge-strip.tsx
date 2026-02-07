import { ShieldCheck, Lock, BadgeCheck } from 'lucide-react';

const items = [
    {
        label: 'PCI-aligned security',
        icon: ShieldCheck,
    },
    {
        label: 'KYC + AML ready',
        icon: BadgeCheck,
    },
    {
        label: 'Encrypted sessions',
        icon: Lock,
    },
];

export default function TrustBadgeStrip() {
    return (
        <div className="flex flex-wrap gap-(--space-3) text-(length:--text-micro) text-(--color-text-muted)">
            {items.map((item) => {
                const Icon = item.icon;
                return (
                    <div
                        key={item.label}
                        className="inline-flex items-center gap-(--space-2) rounded-full border border-border bg-(--color-surface-elevated) px-(--space-3) py-(--space-2)"
                    >
                        <Icon className="h-4 w-4 text-(--color-success)" />
                        <span className="font-semibold">{item.label}</span>
                    </div>
                );
            })}
        </div>
    );
}
