import { ShieldCheck } from 'lucide-react';

type KycHintProps = {
    message?: string;
};

export default function KycHint({
    message = 'By creating an account, you agree to complete KYC for higher limits and marketplace escrow access.',
}: KycHintProps) {
    return (
        <div className="flex items-start gap-[var(--space-2)] rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-micro)] text-[var(--color-text-muted)]">
            <ShieldCheck className="mt-[2px] h-4 w-4 text-[var(--color-success)]" />
            <p>{message}</p>
        </div>
    );
}
