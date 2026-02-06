import type { PropsWithChildren, ReactNode } from 'react';

type AuthCardProps = PropsWithChildren<{
    title: string;
    description: string;
    footer?: ReactNode;
}>;

export default function AuthCard({
    title,
    description,
    children,
    footer,
}: AuthCardProps) {
    return (
        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-[var(--space-8)] shadow-xl">
            <div className="flex flex-col gap-[var(--space-2)]">
                <h2 className="text-[length:var(--text-title)] font-semibold">
                    {title}
                </h2>
                <p className="text-[length:var(--text-small)] text-[var(--color-text-muted)]">
                    {description}
                </p>
            </div>
            <div className="mt-[var(--space-6)]">{children}</div>
            {footer && (
                <div className="mt-[var(--space-6)] text-center text-[length:var(--text-small)] text-[var(--color-text-muted)]">
                    {footer}
                </div>
            )}
        </div>
    );
}
